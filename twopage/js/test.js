$(window.onload=function(){
	
	
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

//获取参数地址
var Request = new Object();
Request = GetRequest();
var myweb = decodeURI(Request.sss);
if(myweb==1){
	  $("#pp1").text("1111");
	  $("#pp3").attr("src","img/new1.png");
	              }
if(myweb==2){
	  $("#pp1").text("2222");
	  $("#pp3").attr("src","img/new2.png");
	              }
if(myweb==3){
	  $("#pp1").text("3333");
	  $("#pp3").attr("src","img/new3.png");
	              }
if(myweb==4){
	  $("#pp1").text("4444");
	  $("#pp3").attr("src","img/new4.png");
	              }










// switch(myweb){
// 	case "1":
// 	       $("#pp1").text("1111");
// 	       $('#pp2>img').remove();
//         	var str = '<img src="img/new1.png"/>';
//          $('#pp2').html(str);
//          break;
// 	case "2":
// 	       $("#pp1").text("222222222");
// 	       $('#pp2>img').remove();
//         	var str = '<img src="img/new2.png"/>';
//          $('#pp2').html(str);
//          break;
// 	case "3":
// 	       $("#pp1").text("3333333");
// 	       $('#pp2>img').remove();
//         	var str = '<img src="img/new3.png"/>';
//          $('#pp2').html(str);
//          break;
// 	case "4":
// 	       $("#pp1").text("4444");
// 	       $('#pp2>img').remove();
//         	var str = '<img src="img/new4.png"/>';
//          $('#pp2').html(str);
//          break;
// 	
// 	
// }
   
	
	

	
	
	
})



function cutstr(str, len) {
    var temp,
        icount = 0,
        patrn = /[^\x00-\xff]/,
        strre = "";
    for (var i = 0; i < str.length; i++) {
        if (icount < len) {
            temp = str.substr(i, 1);
                if (patrn.exec(temp) == null) {
                   icount = icount + 1
            } else {
                icount = icount + 2
            }
            strre += temp
            } else {
            break;
        }
    }
    return strre + "..."
}


var mycars=new Array();
var mype=new Array()
for(i=0;i<3;i++){
	 for(j=0;j<3;j++){
	 	
	 	
	 }
	

//mycars[1]="Volvo"
//mycars[2]="BMW"
alert(mycars[i]);
}

  
 
  



















