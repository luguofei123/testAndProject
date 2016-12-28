
_.templateSettings = {  
   interpolate : /\$\{(.+?)\}/g  
};
var Testview = Backbone.View.extend({
        template: null,  //  把模板直接放这里有时也可以，但有时又会出错，还不知道是什么原因  
        events: {  
            'click button#toggle' : 'toggle'  
        },  
        initialize: function() {  
            this.template = _.template($("#hello-template").html());  //  模板放这里一般没问题  
            this.render();  
        },  
        render: function() {  
            //this.$el.html('<p id="hello">Hello World</p><button id="toggle">Toggle</button>');
            this.$el.html(this.template({message: "hello world!"}));  //  渲染模板
            return this;  
        },  
        toggle: function() {  
            this.$("#hello").toggle();  
            return this;  
        }  
    });  
$(function(){	
	var v = new Testview({el:$("#myback")})
	
	
})
