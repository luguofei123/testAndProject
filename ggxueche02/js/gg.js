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
	   
	
	//报名表单提交
	var data={};
	$('#sub-btn').on('click',function(){
		
		var username  = $('#admin').val();
		var mobile    = $('#phone-num').val();
		var number_p   = $('#num_people').val();
		
	
		data.username = username;
		data.mobile   = mobile;
		data.number_p = number_p;
		if(!username|| (!mobile||!number_p)){
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
	





















