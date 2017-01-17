var myScroll,upIcon,downIcon;
$(function(){
	
	//需要滑动效果的页面，在最外层.container-fluid元素添加data-scroll=true
	//例student.html
	if($('[data-scroll=true]').length>0){
		$('[data-scroll=true]').wrap('<div id="wrapper"><div id="scroller"></div></div>')
		$('#scroller').prepend('<div id="scroller-pullDown"><span id="down-icon" class="icon-double-angle-down pull-down-icon"></span><span id="pullDown-msg" class="pull-down-msg">下拉刷新</span></div>');
		$('#scroller').append('<div id="scroller-pullUp"><span id="up-icon" class="icon-double-angle-up pull-up-icon"></span><span id="pullUp-msg" class="pull-up-msg">上拉刷新</span></div>');
		
		upIcon = $("#up-icon"),
		downIcon = $("#down-icon");
			
		myScroll = new IScroll('#wrapper', { probeType: 3, mouseWheel: true, tap: true });
		
		myScroll.on("scroll",function(){
			var y = this.y,
				maxY = this.maxScrollY - y,
				downHasClass = downIcon.hasClass("reverse_icon"),
				upHasClass = upIcon.hasClass("reverse_icon");
			
			if(y >= 100){
				!downHasClass && downIcon.addClass("reverse_icon");
				return "";
			}else if(y < 100 && y > 0){
				downHasClass && downIcon.removeClass("reverse_icon");
				return "";
			}
			
			if(maxY >= 100){
				!upHasClass && upIcon.addClass("reverse_icon");
				return "";
			}else if(maxY < 100 && maxY >=0){
				upHasClass && upIcon.removeClass("reverse_icon");
				return "";
			}
		});
		
		myScroll.on("slideDown",function(){
			if(this.y > 100){
				location.reload();
				upIcon.removeClass("reverse_icon")
			}
		});
		
		myScroll.on("slideUp",function(){
			if(this.maxScrollY - this.y > 100){
				//每页重定义，例student.html
				ajaxHandle();
				upIcon.removeClass("reverse_icon")
			}
		});
	}



	//title
	if($('.title-bar').length>0){
		$('.title-bar>span').html(document.title);
		$('.title-bar .back').on('touchend',function(){
			window.history.back();
		})
	}

	$('a').on('tap',function(){
		if($(this).attr('href')=='javascript:;') return;
		location.href = $(this).attr('href');
		console.log('go')
		return false;
	})
})
