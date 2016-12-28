(function($) {
  $(document).ready(function() {
  	//新建联系人单个模块，属性name，amail值初始化为空；
    var Contact = Backbone.Model.extend({
      defaults: {
        name: 'ee',
        email: '',
        sex:'',
      },
         //联系人验证如果名字为空，返回“用户名不能为空”
      validate: function(attrs, options){
        if (attrs.name == "") {
          alert("用户名不能为空") ;//为什么会弹出两次？？
        };
      },

      // 用户搜索的辅助方法
      filter: function(query) {
        if (typeof(query) === 'undefined' || query === null || query === '') return true;//为什么是空还返回true？
        query = query.toLowerCase();
        return this.get('email').toLowerCase().indexOf(query) != -1 ;  //返回值是什么？布尔值？还是别的？
      }
    });

    var Contacts = Backbone.Collection.extend({
      model: Contact,
      localStorage: new Store('')//储存在哪里呢？
    });

    //单个联系人视图  一个视图必须与一个模型相关，
    //为什么这里只有一个名字的视图，邮箱，性别的视图在哪里？
    var ContactItemView = Backbone.View.extend({
      className: 'item',
      template: _.template($('#tpl-item').html()),
      events: {
        'click': 'select',
        //'click': 'sler',
        
      },

      initialize: function() {
        _.bindAll(this, 'select');
       // _.bindAll(this, 'click');
        this.model.bind('reset', this.render, this);
        this.model.bind('change', this.render, this);
        this.model.bind('destroy', this.remove, this);
        if (this.model.view) {this.model.view.remove();}
        this.model.view = this;//这个的作用是什么呢，有待研究？
      },

      // 渲染联系人
      render: function() {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
      },
      //sler:function(){alert("fff")},
      select: function() { 
        appRouter.navigate('contacts/' + this.model.cid, {
          trigger: true
        });
      },

      active: function() {
        this.$el.addClass('active');
      },
      
      deactive: function() {
        this.$el.removeClass('active');
      }
    });

    // 左边的侧边条视图
    var SidebarView = Backbone.View.extend({
      className: 'sidebar',
      template: _.template($('#tpl-sidebar').html()),
      events: {
        'click footer button': 'create',
        'click input': 'filter',
        'keyup input': 'filter'
      },

      initialize: function() {
        _.bindAll(this, 'create', 'filter');
        this.model.bind('reset', this.renderAll, this);
        this.model.bind('add', this.add, this);
        this.model.bind('remove', this.remove, this);
      },

      // 渲染联系人列表
      render: function() {
        $(this.el).html(this.template());
        this.renderAll();
        return this;
      },

      renderAll: function() {
        this.$(".items").empty();
        this.model.each(this.renderOne, this);
        this.filter();
      },

      renderOne: function(contact) {
        var view = new ContactItemView({
          model: contact
        });
        this.$(".items").append(view.render().el);
      },

      create: function() {
        var contact = new Contact();//实例化
        this.model.add(contact);
        appRouter.navigate('contacts/' + contact.cid + '/edit', {
          trigger: true
        });
      },

      filter: function() {
        var query = $('input', this.el).val();
        this.model.each(function(contact, element, index, list) {
          contact.view.$el.toggle(contact.filter(query));
        });
        // this.model.last().view.$el.trigger("click")
      },

      active: function(item) {
        if (this.activeItem) this.activeItem.view.deactive();
        this.activeItem = item;
        if (this.activeItem) this.activeItem.view.active();
      },

      add: function(contact) {
        this.renderOne(contact);
      },

      remove: function(contact) {
        console.log(contact);
      }
    });
    // 显示选择的联系人详细信息
    var ShowView = Backbone.View.extend({
      className: 'show',
      template: _.template($('#tpl-show').html()),

      events: {
        'click .edit': 'edit'
      },

      initialize: function() {
        _.bindAll(this, 'edit');
      },

      render: function() {
        if (this.item) this.$el.html(this.template(this.item.toJSON()));
        return this;
      },

      change: function(item) {
        this.item = item;
        this.render();
      },

      edit: function() {
        if (this.item) appRouter.navigate('contacts/' + this.item.cid + '/edit', {
          trigger: true
        });
      }
    });
    
    // 编辑选择的联系人
    var EditView = Backbone.View.extend({
      className: 'edit',
      template: _.template($('#tpl-edit').html()),

      events: {
        'submit form': 'submit',
        'click .save': 'submit',
        'click .delete': 'remove'
      },

      initialize: function() {
        _.bindAll(this, 'submit', 'remove');
      },

      render: function() {
        if (this.item) this.$el.html(this.template(this.item.toJSON()));
        return this;
      },

      change: function(item) {
        this.item = item;
        this.render();
      },

      submit: function() {
        this.item.set(this.form());
        this.item.save();
        appRouter.navigate('contacts/' + this.item.cid, {
          trigger: true
        });
        return false;
      },

      form: function() {
        return {
          name: this.$('form [name="name"]').val(),
          email: this.$('form [name="email"]').val(),
          sex: this.$('form [name="sex"]').val()
        };
      },

      remove: function() {
        this.item.destroy();
        this.item = null;
        appRouter.navigate('', {
          trigger: true
        });
      }
    });

    // 主视图，显示和编辑联系人
    var MainView = Backbone.View.extend({
      className: 'main stack',
      initialize: function() {
        this.editView = new EditView();
        this.showView = new ShowView();
      },

      render: function() {
        this.$el.append(this.showView.render().el);
        this.$el.append(this.editView.render().el);
        return this;
      },

      edit: function(item) {
        this.showView.$el.removeClass('active');
        this.editView.$el.addClass('active');
        this.editView.change(item);
      },

      show: function(item) {
        this.editView.$el.removeClass('active');
        this.showView.$el.addClass('active');
        this.showView.change(item);
      }
    });

    // 整个页面的视图，管理SiderbarView和MainView两个子视图
    var AppView = Backbone.View.extend({
      className: 'contacts',

      initialize: function() {
        this.sidebar = new SidebarView({
          model: this.model
        });
        this.main = new MainView();
        this.vdiv = $('<div />').addClass('vdivide');
        this.model.fetch();
        this.render();
      },

      render: function() {
        this.$el.append(this.sidebar.render().el);
        this.$el.append(this.vdiv);
        this.$el.append(this.main.render().el);
        $('#article').append(this.el);
        return this;
      },

      show: function(item) {
        this.sidebar.active(item);
        this.main.show(item);
      },

      edit: function(item) {
        this.sidebar.active(item);
        this.main.edit(item);
      }
    });

    // 路由
    var AppRouter = Backbone.Router.extend({
      routes: {
        '': 'show',
        'contacts/:id': 'show',
        'contacts/:id/edit': 'edit'
      },

      show: function(id) {
        if (id != undefined) {
          appView.show(this.getContact(id));
        } else {
          appView.show(contacts.first());
        }
      },

      edit: function(id) {
        appView.edit(this.getContact(id));
      },

      getContact: function(id) {
        return contacts.getByCid(id);
      }
    });

    var contacts = new Contacts();
    window.appView = new AppView({
      model: contacts
    });
    window.appRouter = new AppRouter();
    Backbone.history.start();
  });
})(jQuery);