$(window).load(function(){
	
	//轮播图参数设置
	$(".example2").luara({width:"712",height:"290",interval:3000,selected:"seleted",deriction:"left"});
	
	//百度搜索控制	
	//清除搜索内容
	   $("#cancel").on("click",function(){
	     	
	     	$("#appendedInputButtons").val("");
	     	$("#baidubtn").attr("disabled","fasle");
	     	$("#cancel").css("opacity",0);
	   	
	   	
	   })
	   
	   
	   
	   //获取焦点
	   $("#appendedInputButtons").focus(function(){
	   	     $("#appendedInputButtons").attr("placeholder","");
	    
	     
	   	
	   });
	   //键盘keyup事件
	   $("#appendedInputButtons").keyup(function(){
	   	 if($("#appendedInputButtons").val()===""){
	   	 	$("#baidubtn").attr("disabled","fasle");
	   	 	$("#cancel").css("opacity",0);
	   	 }
	   	 else{
	   	 	$("#baidubtn").removeAttr("disabled");
	   	 	 $("#cancel").css("opacity",0.3);
	   	 }
	   	
	   	
	   })
	   
	   //失去焦点
	   $("#appendedInputButtons").blur(function(){
	   	  if($("#appendedInputButtons").val()===""){
	   	 	$("#appendedInputButtons").attr("placeholder","搜索");
	   	 	
	   	 }
	   	 
	   });
	   
	//驾校、版型、banner框架
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
	
	 var Request = new Object();
     Request = GetRequest();
     var myJiaxiao = decodeURI(Request.name);
    
	//获取驾校/版型的名称后进行框架的填充;
 switch(myJiaxiao){
	case "beifang":
 	       document.title="北方驾校";
 	        $("#price1").text("3800");
 	        $("#price2").text("4400");
 	        $("#price3").text("4600");
 	        $("#pc1").attr("src","images/act/bf.jpg");
 	        $("#pc2").attr("src","images/act/bfm.jpg");
            break;
    case "yuanhang":
 	        document.title="远航驾校";
 	        $("#price1").text("3700");
 	        $("#price2").text("4100");
 	        $("#price3").text("4500");
 	        $("#pc1").attr("src","images/act/yh.jpg");
 	        $("#pc2").attr("src","images/act/yhm.jpg");
            break;
    case "yuanfang":
 	        document.title="远方驾校";
 	        $("#price1").text("3800");
 	        $("#price2").text("4400");
 	        $("#price3").text("4600");
 	        $("#pc1").attr("src","images/act/yf.jpg");
 	        $("#pc2").attr("src","images/act/yfm.jpg");
            break;
    case "shoufeng":
 	        document.title="首丰驾校";
 	        $("#price1").text("3450");
 	        $("#price2").text("3950");
 	        $("#price3").text("4950");
 	        $("#pc1").attr("src","images/act/ft.jpg");
 	        $("#pc2").attr("src","images/act/ftm.jpg");
            break;
    case "xizong":
 	        document.title="西总驾校";
 	        $("#price1").text("3870");
 	        $("#training_time").text("训练时间：全周7:00-21:00");
 	        $("#price2").text("4170");
 	        $("#price3").text("5000");
 	        $("#pc1").attr("src","images/act/xz.jpg");
 	        $("#pc2").attr("src","images/act/xzm.jpg");
            break;
    case "chengshun":
 	        document.title="程顺驾校";
            $("#banxing1").remove();
 	        $("#price2").text("4400");
 	        $("#price3").text("4600");
 	        $("#pc1").attr("src","images/act/cs.jpg");
 	        $("#pc2").attr("src","images/act/csm.jpg");
            break;
    case "menjiao":
 	        document.title="门交驾校";
 	        $("#price1").text("4100");
 	        $("#price2").text("4800");
 	        $("#price3").text("6600");
 	        $("#pc1").attr("src","images/act/mj.jpg");
 	        $("#pc2").attr("src","images/act/mjm.jpg");
            break;
    case "yishida":
 	        document.title="易世达驾校";
            $("#banxing1").remove();
 	        $("#price2").text("3800");
 	        $("#price3").text("4900");
 	        $("#pc1").attr("src","images/act/ysd.jpg");
 	        $("#pc2").attr("src","images/act/ysdm.jpg");
            break;
    case "jisuban":
 	        document.title="极速班";
            $("#banxing_name").text("呱呱学车极速班");
 	        $("#banxing_price").text("￥4500元");
 	        $("#banxing_notice").text("此班型为极速班，需要连续学车，请确保自己时间充足");
 	        $("#banxing_pic1").attr("src","images/act/jisuban_1.jpg");
 	        $("#banxing_pic2").attr("src","images/act/dijiaban_33.jpg");
            break;
    case "wuyouban":
 	        document.title="无忧班";
            $("#banxing_name").text("呱呱学车无忧班班");
 	        $("#banxing_price").text("￥3500-4500元");
 	        $("#banxing_notice").text("此班型为无忧班，享受呱呱学车专属服务");
 	        $("#banxing_pic1").attr("src","images/act/wuyouban_1.jpg");
 	        $("#banxing_pic2").attr("src","images/act/dijiaban_32.jpg");
            break;
    case "dijiaban":
 	        document.title="低价班";
            $("#banxing_name").text("呱呱学车低价班");
 	        $("#banxing_price").text("￥3200元");
 	        $("#banxing_notice").text("此班型为平时班，周一至周五练车，通过呱呱学车报名才能享受此优惠");
 	        $("#banxing_pic1").attr("src","images/act/dijiaban_1.jpg");
 	        $("#banxing_pic2").attr("src","images/act/dijiaban_31.jpg");
 	        $("#support_jia1").empty();
 	        $("#support_jia2").empty();
 	        $("#support_jia1").append("<h2 style='margin-left:0'>支持驾校：<span>首都丰田驾校</span><span>远方驾校</span></h2>");
 	        
            break;
    case "banner1":
            $("#banner").attr("src","images/act/1920.jpg");
            break;
    case "banner2":
            $("#banner").attr("src","images/act/1900.jpg");
            break;
 	
     }
	
	//弹出报名框
	
	     $(".baoming").on("click", function(){
	     	   $("#tanchuang").css("display","block");
 	
	     })
	        function close_tanchuang(){
		    	var a=document.getElementById("tanchuang");
		    	a.style.display="none"
		    }
		   
		    function close_okpage(){
		    	var b=document.getElementById("okpage");
		    	b.style.display="none"}
	
	
	
	

	//报名表单提交
	var data={};
	$('#sub-btn').on('click',function(){
		
		var username  = $('#username').val();
		var mobile    = $('#userphone').val();
		//var number_p   = $('#num_people').val();
		
	
		data.username = username;
		data.mobile   = mobile;
		//data.number_p = number_p;
		if(!username|| !mobile){
				alert("缺少必填项!");
				return;
		}
		$.ajax({
	  		type: "POST",
	  		data:data,
	  		url:"http://www.ggxueche.com/main/act/save",
			cache: false,
			success: function(){
				 close_tanchuang();
				 $("#okpage").css("display","block");
			},
			error:function(){
				alert("失败");
				return;
			}
	  	});
		
	})
	
})




















