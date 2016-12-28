$(document).ready(function() 
{ 
jQuery.fn.extend({ 
center:function(width,height) 
{ 
return $(this).css("left", ($(window).width()-width)/2+$(window).scrollLeft()). 
css("top", ($(window).height()-height)/2+$(window).scrollTop()). 
css("width",width). 
css("height",height);
} 
}); 
}); 

$("#login").click(function () 
{ 
$("#login").show().center(350,250);//展现登陆框 
}); 

$(document).ready(function() 
{ 
jQuery.fn.extend({ 
//拖拽功能 
drag:function(){ 
var $tar = $(this); 
return $(this).mousedown(function(e){ 
if(e.target.tagName =="IMG"){ 
var diffX = e.clientX - $tar.offset().left; 
var diffY = e.clientY - $tar.offset().top; 
$(document).mousemove(function(e){ 
var left = e.clientX - diffX; 
var top = e.clientY - diffY; 
if (left < 0){ 
left = 0; 
} 
else if (left <= $(window).scrollLeft()){ 
left = $(window).scrollLeft(); 
} 
else if (left > $(window).width() +$(window).scrollLeft() - $tar.width()){ 
left = $(window).width() +$(window).scrollLeft() -$tar.width(); 
} 
if (top < 0){ 
top = 0; 
} 
else if (top <= $(window).scrollTop()){ 
top = $(window).scrollTop(); 
} 
else if (top > $(window).height() +$(window).scrollTop() - $tar.height()){ 
top = $(window).height() +$(window).scrollTop() - $tar.height(); 
} 
$tar.css("left",left + 'px').css("top",top + 'px'); 
}); 
} 
$(document).mouseup(function(){ 
$(this).unbind("mousemove"); 
$(this).unbind("mouseup") 

}); 
}); 
} 
}); 
$("#login").drag(); 
}); 














