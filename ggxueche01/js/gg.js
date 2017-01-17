$(window).load(function(){
	
	//轮播图参数设置
	$(".example2").luara({width:"712",height:"290",interval:2000,selected:"seleted",deriction:"left"});
	
	//百度搜索控制
	
	   var baidubtn   = $("#baidubtn");
	   var cancel     = $("#cancel")
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
	   
	
	//报名表单提交
	var data={};
	$('#sub-btn').on('click',function(){
		
		var username  = $('#admin').val();
		var mobile    = $('#phone-num').val();
		var address   = $('#address-detail').val();
		
	
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
				 alert("报名成");
				 open_okpage();
			},
			error:function(){
				alert("失败");
			}
	  	});
		
	})
	
	




})
	

    //百度地图	
    // 百度地图API功能
         var map = new BMap.Map("allmap");            // 创建Map实例
          map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);
         var local = new BMap.LocalSearch(map, {
         renderOptions:{map: map, autoViewport:true}
          });
           local.searchNearby("驾校", "远航");




















