
window.onload=function(){

//报名信息提交信息成功后调用此函数；
function open_okpage(){
	document.getElementsByClassName("okpage")[0].style.display = "block";
	document.getElementsByClassName("sign_box")[0].style.opacity = "0.1";
}

//url传递班型名称，驾校名称，练车时间参数
function GetRequest() { 
  var url = location.search; //获取url中"?"符后的字串
   var theRequest = new Object();
   if (url.indexOf("?") != -1) {
      var str = url.substr(1);
      strs = str.split("&");
      for(var i = 0; i < strs.length; i ++) {
         theRequest[strs[i].split("=")[0]]=(strs[i].split("=")[1]);
      }
   }
   return theRequest;
}

//获取参数
var Request = new Object();
Request = GetRequest();
var name1 = decodeURI(Request.name_banxing);
var name2 = decodeURI(Request.name_jiaxiao);
var name3 = decodeURI(Request.time_lianche);
//将参数值写入到报名信息中的页面

 $("#banxing").html(name1);
 $("#jiaixao_name").html(name2);
 $("#time").html(name3);

//表单验证
    var data={};
	$('#sub-btn').on('click',function(){
		var banxing   = $('#banxing').val();
		var jiaxiao   = $('#jiaixao_name').val();		
		var username  = $('#username').val();
		var mobile    = $('#phonenumber').val();
		var address   = $('#useraddress').val();
		
		data.banxing  = banxing;
		data.jiajiao  = jiaxiao;	
		data.username = username;
		data.mobile   = mobile;
		data.address  = address;
		if(!username|| (!mobile||!address)){
				alert("缺少必填项!");
				return;
		}
		$.ajax({
	  		type: "POST",
	  		data:data,
	  		url:"http://www.ggxueche.com/main/act/save",
			cache: false,
			success: function(){
				
				 open_okpage();
			},
			error:function(){
				alert("失败");
			}
	  	});
		
	})

              
 }         
           
   






