/**
去掉值中的空格.
输入：value 字符串
返回：去除空格后的字符串
**/
function trim(value) {
	 return	 value.replace(/(^\s*)|(\s*$)/g, ""); 
}

/**
去掉整个form中文本输入框中的空格.
输入：表单名
返回：
**/
function trimform(form)
{  
 var formobj =document[form];
 for (var i=0;i<formobj.length;i++) 
 { 
 	if(formobj.elements[i].value!=null&&formobj.elements[i].value!=undefined)
 	    formobj.elements[i].value=trim(formobj.elements[i].value);  
  } 
} 

/**
判断数值是否为空.
输入：value 字符串
返回：true 为空
返回：false 不为空
**/
function isEmpty(value) {
	if( value == null || trim(value) == "")
	return true;
	else 
	return false;
}

/**
判断是否为正数数值.
输入：value 字符串
返回：ture 不为空且为正数数值，否则返回 false
**/
function checkNumber(value) {
	var strRef = "1234567890";
	var tempChar;
	if(isEmpty(value))return false;
	for (i=0;i<value.length;i++) {
	  tempChar= value.substring(i,i+1);
	  if (strRef.indexOf(tempChar,0)==-1) {	
		  return false; 
	  }
	}
	return true;
}

/**
判断是否为数值.
输入：value 字符串
返回：不为空且为数值则返回 ture，否则返回 false
**/
function checkNegative(value) {
    strRef = "1234567890-";
    if (isEmpty(value))
        return false;
    for (i = 0; i < value.length; i++) {
        tempChar = value.substring(i, i + 1);
        if (strRef.indexOf(tempChar, 0) ==  - 1)
            return false;
        else {
            if (i > 0) {
                if (value.substring(i, i + 1) == "-")
                    return false;
            }
        }
    }
    return true;
}

function checkMobile(value)
{
 var reg0=/^13\d{9}$/g;   //130--139。
 var reg1=/^15\d{9}$/g;  //15?号段。
 var reg2 =/^\d+$/;
 var my=false;
 if(reg0.test(value)) { my=true; return my;}
 if(reg1.test(value)) { my=true; return my;}
 if(reg2.test(value)) { my=true; return my;}
 
}
/**
判断是否为规定钱的格式：xxx.xxx
输入：value 字符串
返回：不为空且为固定格式返回 ture，否则返回 false
**/
function checkMoney(value) {
    strRef = "1234567890.";
    if (isEmpty(value))
        return false;
    for (i = 0; i < value.length; i++) {
        tempChar = value.substring(i, i + 1);
        if (strRef.indexOf(tempChar, 0) ==  - 1)
            return false;
        else {
            tempLen = value.indexOf(".");
            if (tempLen !=  - 1) {
                strLen = value.substring(tempLen + 1, value.length);
                if (strLen.length > 2)
                    return false;
            }
        }
    }
    return true;
}
/**
判断是否为闰年
输入：year 数字
返回：是返回 ture，否则返回 false
**/
function isLeapYear(year) {
    if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) {
        return true;
    }
    return false;
}

/**
判断是否固定日期的格式：mm-dd 并没有超过范围
输入：value 字符串
返回：不为空且为固定格式返回 ture，否则返回 false
**/
function checkDate(value) {
    var datetime;
    var year, month, day;
    var gone, gtwo;
    if (trim(value) != "") {
        datetime = trim(value);
        if (datetime.length == 10) {
            year = datetime.substring(0, 4);
            if (isNaN(year) == true) {
                return false;
            }
            gone = datetime.substring(4, 5);
            month = datetime.substring(5, 7);
            if (isNaN(month) == true) {
                return false;
            }
            gtwo = datetime.substring(7, 8);
            day = datetime.substring(8, 10);
            if (isNaN(day) == true) {
                return false;
            }
            if ((gone == "-") && (gtwo == "-")) {
                if (month < 1 || month > 12) {
                    return false;
                }
                if (day < 1 || day > 31) {
                    return false;
                }
                else {
                    if (month == 2) {
                        if (isLeapYear(year) && day > 29) {
                            return false;
                        }
                        if (!isLeapYear(year) && day > 28) {
                            return false;
                        }
                    }
                    if ((month == 4 || month == 6 || month == 9 || month == 11)
                        && (day > 30)) {
                        return false;
                    }
                }
            }
            else {
                return false;
            }
        }
        else {
            return false;
        }
    }
    else {
        return true;
    }
    return true;
}
/**
判断是否固定时间的格式：xx:xx:xx
输入：value 字符串
返回：不为空且为固定格式返回 ture，否则返回 false
**/
function checkTime(value) {
	var regtime=/^((0[0-9]|[0-9])|1[0-9]|2[0-3]):((0[0-9]|[0-9])|[1-5][0-9]):((0[0-9]|[0-9])|[1-5][0-9])$/g;
	if(!regtime.test(value))
	   return false;
	return true;
}

/**
判断是否固定URL的格式：如 http[s]://xxx.xxx.xxx 字符不能超过范围
输入：url 字符串
返回：为固定格式返回 ture，否则返回 false
**/
 function checkURL(url) {
    var urlrule = /^http[s]{0,1}:\/\/[A-Za-z0-9]+[\.\/=\?%\-&_~`@:+!]*([^\"\\\'])*$/;
    if(!urlrule.test(trim(url))) {
        return false;
    }
    return true;
 }

/**
 * 判断是否固定URI的格式：uri必须以'/'开始
 * 输入：uri 字符串
 * 返回：为固定格式返回 ture，否则返回 false
 * **/
 function checkURI(uri) {
     if(trim(uri).length != 0 && trim(uri).charAt(0) != '/') 
		 return false;
     return true;
	  } 

/**
固定格式数字证书序列号检查：只能包含十六进制字符[a-fA-F0-9]
输入：str 字符串
返回：为固定格式则返回 ture，否则返回 false
**/
function checkCertsn(str) {
	var regcertsn = /^[a-fA-F0-9]*$/g;
	if(!regcertsn.test(str)) {
		return false;
	   }
	  
	return true;
}

/**
固定格式字符串检查：字母开头，只能包含"." "_" "@"和字母
输入：str 字符串
返回：为固定格式则返回 ture，否则返回 false
**/

function checkName_ex(str) {
	if(typeof(str)!='string') {
			str = str.value;
		}
		for(var i = 0; i < str.length; i++) {
				if(str.charAt(i)=='.'||str.charAt(i)=='_'||str.charAt(i)=='@') {
				
				}else {
					if(str.charCodeAt(i) < 127 && !str.substr(i,1).match(/^\w+$/ig)){
						return false;
					}
				}
		}
		return true;
}

function checkName(str) {
	if(typeof(str)!='string') {
			str = str.value;
		}
		for(var i = 0; i < str.length; i++) {
				if(str.charAt(i)=='.'||str.charAt(i)=='_'||str.charAt(i)=='@') {
				
				}else {
					if(str.charCodeAt(i) < 127 && !str.substr(i,1).match(/^\w+$/ig)){
						return false;
					}
				}
		}
		return true;
}

/**
固定格式字符串检查：字母开头，只能包含"." "_" ":"和字母
输入：str 字符串
返回：为固定格式则返回 ture，否则返回 false
**/
function checkUserName(str) {
	if(typeof(str)!='string') {
			str = str.value;
		}
		for(var i = 0; i < str.length; i++) {
				if(str.charAt(i)==':'||str.charAt(i)=='.'||str.charAt(i)=='_'||str.charAt(i)==' ') {
				
				}else {
					if(str.charCodeAt(i) < 127 && !str.substr(i,1).match(/^\w+$/ig)){
						return false;
					}
				}
		}
		return true;
}

/**
路径格式检查：
输入：str 字符串
返回：符合固定格式则返回 ture，否则返回 false
**/
function checkDir(str) {
	if(!str)
		return true;

	if(typeof(str)!='string'){
		str = str.value;
	}

	var rule = /^([^\"\'*?<>|])*$/;
	if(!rule.test(str)) {
		return false;
	}

	return true;
}

/**
文件名格式检查：
输入：str 字符串
返回：符合固定格式则返回 ture，否则返回 false
**/
function checkFile(str) {
	if(!str)
		return true;

	if(typeof(str)!='string') {
		str = str.value;
	}

	var rule = /^([^\"\\\:\'*?<>|])*$/;
	if(!rule.test(str)) {
		return false;
	}

	return true;
}

/**
IP格式检查：xxx.xxx.xxx.xxx
输入：ip 字符串
返回：符合固定格式则返回 ture，否则返回 false
**/
function checkIP(ip) {
    re=/(\d+)\.(\d+)\.(\d+)\.(\d+)/g
    if(!re.test(ip)) {
        return false;
    }
	ip = ip.split(".");
	if(ip.length!=4) {
		return false;
	}
	
	if(ip[0]<0||ip[0]>255||checkNumber(ip[0])==false) {
		return false;
	}
	if(ip[1]<0||ip[1]>255||checkNumber(ip[1])==false) {
		return false;
	}
	if(ip[2]<0||ip[2]>255||checkNumber(ip[2])==false) {
		return false;
	}
	if(ip[3]<0||ip[3]>255||checkNumber(ip[3])==false) {
		return false;
	}
	return true;
}

/**
端口格式检查：不为空，都为数值，65535范围内
输入：value 字符串
返回：符合固定格式则返回 ture，否则返回 false
**/
function checkPort(value) {
    if (isEmpty(value))
        return false;
    if (!checkNumber(value))
        return false;
    if (parseInt(value) > 65535 || parseInt(value) < 0)
        return false;
    return true;
}

/**
子网掩码格式检查：
输入：mask 字符串
返回：符合固定格式则返回 ture，否则返回 false
**/
function checkMask(mask) {
        var amask = mask.split(".");
        var closed = false;
        var bit;

        if (amask.length != 4)                             
                return false;               

        for (var i = 0; i < 4; i++) {
				if (amask[i] == '')
					return false;

                for (var j = 8; j >= 0; j--) {
                        bit = (1 << j) - 1;
                        if (closed && (amask[i] & bit == bit)) {
                                return false;
                        }
                        if ((bit & amask[i]) != bit && closed == false) {
                                closed = true;
                        }
                }
        }
        return true;
}

function checkobjmask(str,errorstr)
{
     if(checkMask(document.getElementById(str).value)==false)
	{
		ShowMes(str,errorstr,"wrong_check");
		return false;
	}	
	return true;
}
function checkobjemail(str,errorstr)
{
	var myreg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
     if(myreg.test(document.getElementById(str).value)==false)
	{
		ShowMes(str,errorstr,"wrong_check");
		return false;
	}	
	return true;
}




/**
检查一个ip是否在一个子网中，而且不能是子网和广播地址
输入：ip 字符串 IP地址
输入：subnet 字符串 子网IP地址
输入：mask 字符串 子网掩码
返回：1，2，3
**/
function checkIpinSubnet(ip,subnet,mask) {
	if (checkIP(ip)==false || checkIP(subnet)==false || checkMask(mask)==false){
		return false;
	}
	var issubip = 0;
	var isbrdip = 0;
	ip_array = ip.split(".");
	subnet_array = subnet.split(".");
	mask_array = mask.split(".");
	for (var i=0;i<4;i++) {
		if ((ip_array[i] & mask_array[i]) != (subnet_array[i] & mask_array[i])) {
			return 1;
			break;
		}
		//ip地址和掩码的非做与操作的结果如果为0，则ip地址是一个子网地址
		//ip地址和掩马做或操作的结果如果是255，则ip地址是一个广播地址
		if((ip_array[i] & (mask_array[i] ^255)) == 0)
			issubip++;
		if((ip_array[i] | mask_array[i]) == 255)
			isbrdip++;
	}
	if(4 == issubip || 4 == isbrdip)
		return 2;
	else 
		return 3;
}

/**
IP格式检查：为xxx.xxx.xxx.xxx/24或xxx.xxx.xxx.xxx/xxx.xxx.xxx.xxx格式
输入：ip 字符串
返回：为固定格式则返回 ture，否则返回 false
**/
function checkIPNet(ip) {
	ip_array = ip.split("/");
	if (ip_array.length != 2) {
  	return false;
  }
	if (checkIP(ip_array[0])==false) {
	  return false;
	}
	if ((!checkNumber(ip_array[1]) || ip_array[1]<0 || ip_array[1]>32) && (!checkMask(ip_array[1]))) {
		return false;
	}
	return true;
}


/**
port格式检查：为xx-xx
输入：ip_ip 字符串
返回：为固定格式则返回 ture，否则返回 false
**/
function checkport2port(ip_ip) {
	str = ip_ip.split("-");
	if (str.length !=2) {
		return false;
	}
	if((!checkPort(str[0]))||(!checkPort(str[1]))) {
	  return false;
	}
	
	if(str[0]>str[1]||str[0]==str[1])
	{
	    return false;
	}
	return true;
}

function checkIP2IP(ip_ip) {
	str = ip_ip.split("-");
	if (str.length !=2) {
		return false;
	}
	if((!checkIP(str[0]))||(!checkIP(str[1]))) {
	  return false;
	}
	ip1 = str[0].split(".");
	ip2 = str[1].split(".");

	for (i=0;i<4;i++) {
		var k1=parseInt(ip1[i]);
		var k2=parseInt(ip2[i]);
	  if (k1>k2) {
	    return false;
	    break;
	  }
	}
	return true;
}/**
主机IP及子网掩码检查
输入： ip 点分十进制IP字符串
输入： mask 点分十进制mask字符串
返回：符合条件则返回 ture，否则返回 false
**/
function CheckHostByMask(hostip, mask) {
    var h = hostip.split(".");
    var m = mask.split(".");
    if (m.length != 4 || h.length != 4) return false;
    for (var i = 0; i < 4; i++) {
        if ((parseInt(h[i]) | parseInt(m[i])) != m[i]) {
            return false;
        }
    }
    return true;
}

/**
设置所有的span 以前为红色的颜色为黑色
**/
function  resetRedSpan() {
	 	var origLength =document.all.length;
		for (var i = 0; i < origLength; i++) {
		   //if(obj_attr_check(document.all[i],"innerHTML")&&document.all[i].className=="STYLE2")
		   if(document.all[i].tagName == "SPAN" && document.all[i].className=="warning") {
			   document.all[i].innerHTML="";
			}
		}
}

/**
主机名称格式检查：
输入：str 字符串 主机名字
返回：符合格式返回 ture ，否则返回 false
**/
function checkHostName(str) {

	var reg = /[\^\$\*\\\+\?\{\}\[\]!@#%&:;"'\/><,=|~\u4e00-\u9fa5]+/g;
    if (str.match(reg)) {
		return false;
	}
	return true;
}

/**
主机检查：
返回：
**/
function checkHost(str) {

	if(checkHostName(str)==false&&checkIP(str)==false) {	
		return false;
	}
	return true;
}

/**
mac地址检查：
输入：mac 字符串 mac地址
返回：符合格式返回 ture，否则返回 false
**/
function checkMAC(mac) {
    //正则表达式解释：只能是("两个0-9或a-fA-F字符"+":")*5+"两个0-9或a-fA-F字符"******shuangda
    var re=/^([0-9a-fA-F]{2}:){5}[0-9a-fA-F]{2}$/g
    if (!re.test(mac)) {
        return false;
    }
    return true;
}

/**
将点分十进制IP字符串转为long型
输入：str 点分十进制IP字符串
返回：返回long型值
**/
function ip2Long(str) {
    var ip = 0;
    var array = str.split(".");
    ip = parseInt(ip) + parseInt(array[0]) * 16777216;
    ip = parseInt(ip) + parseInt(array[1]) * 65536;
    ip = parseInt(ip) + parseInt(array[2]) * 256;
    ip = parseInt(ip) + parseInt(array[3]);
    return parseInt(ip);
}

function generalCheck(value)
{
	var rule = /^([^\"\\\'])*$/g;
	if(!rule.test(trim(value)))
		return false;
	return true;
}


/**
判断对象内的属性是否存在
输入：obj 对象名
输入：attr 属性名
返回：如存在返回 ture，否则返回 false
**/
function checkObjAttr(obj,attr) {
	if((typeof obj[attr] == 'unknown') || (obj[attr] === void 0))
		return false;
	return true;
}
/**
获取当前对象的位置，返回位置
**/
function XgetPosition(e){
    var left = 0;
    var top  = 0;
    while(e.offsetParent){
        left += e.offsetLeft;
        top  += e.offsetTop;
        e= e.offsetParent;
    }
    left += e.offsetLeft;
    top  += e.offsetTop;
    return {x:left, y:top};
}

function list_addoption(listname,varname,varvalue)
{
	var oOption = document.createElement("OPTION");
	oOption.text=varname;
	oOption.value=varvalue;	
	document.getElementById(listname).add(oOption);



}

//获取元素属性
function getStyle(obj,attr)
	{
		return obj.currentStyle ?  obj.currentStyle[attr] : getComputedStyle(obj,0)[attr];
	}
	
//运动函数
function doMove(obj,attr,speed,target,endFn)
	{
		
		clearInterval(obj.timer);
		speed = parseInt(getStyle(obj,attr))<target ? speed:-speed;
		//alert(speed);
		obj.timer=setInterval(function(){
			var curPosition=parseInt(getStyle(obj,attr))+speed;
			if(curPosition>target && speed>0 || curPosition<target && speed<0)
				curPosition=target;
			obj.style[attr]=curPosition + 'px';
			if(curPosition==target)
			{
				clearInterval(obj.timer);
				endFn && endFn();
			}	
		},50);	
	}
	
	//需找与数组相等的值函数
function arrIndexOf(arr,v)
{
	for(i=0;i<arr.length;i++){
		if(arr[i]==v){
			return i; //返回与目标值相等的数组的下标值
		}
	}
	return -1;
}
//addClass函数
function addClass(obj,className)
{
	if(obj.className==''){
		//如果原来没有class
		obj.className=className;
	}
	else{
		var arrClassName=obj.className.split(' ');
		var _index=arrIndexOf(arrClassName,className);
		if(_index == -1){
			//如果要添加的class在原来的class中不存在
			obj.className += ' ' + className;
		}
		//如果要添加的class在原来的class中存在,则不需要做任何事
	}
}

//removeClass函数
function removeClass(obj,className)
{
	//如果原来有class
	if(obj.className!=''){
		var arrClassName=obj.className.split(' ');
		var _index=arrIndexOf(arrClassName,className);
		if(_index != -1){
			arrClassName.splice(_index,1);  //删除需要删除的calss
			obj.className=arrClassName.join(' '); //然后将arrClassName数组拼接起来
		}
	}
}

//鼠标在可视区域内的拖拽 不兼容非标准IE
function clientDrag(obj){
	obj.onmousedown=function(ev){
	ev=ev || event;
	var ms_b=ev.clientX-obj.offsetLeft;
	var ms_t=ev.clientY-obj.offsetTop;
	document.onmousemove=function(ev){
		ev=ev || event;
		var currX=ev.clientX-ms_b;
		var currY=ev.clientY-ms_t;
		var Width=document.body.clientWidth || document.documentElement.cilentWidth;
		var Height=document.body.clientHeight || document.documentElement.cilentHeight;
		if(currX<0) {currX=0;}
		else if(currX>Width-obj.clientWidth){
			currX=Width-obj.clientWidth;
		}
		if(currY<0) {currY=0;}
		else if(currY>Height-obj.clientHeight){
			currY=Height-obj.clientHeight;
		}
		obj.style.left=currX +'px';
		obj.style.top=currY +'px';
		return false;
	}
	document.onmouseup=function(){
		document.onmousemove=document.onmouseup=null;
	}
}
}

//拖拽
function drag(index){

　　index.onmousedown = function(event){
       　　 var ev = event ||window.event;
        　　ev.preventDefault();
       　　 disX = ev.clientX-this.offsetLeft;
      　　  disY = ev.clientY-this.offsetTop;
       　　 //给index绑定moousemove事件
       　　 document.onmousemove = function(event){
         　　   var ev = event ||window.event;
         　　   ev.preventDefault();
          　　  var x = ev.clientX;
          　　  var y = ev.clientY;
          　　  index.style.left = x-disX+'px';
           　　 index.style.top = y-disY+'px';
       　　 }
    　　}
    　　document.onmouseup =function(){
       　　 document.onmousemove = null;
  　　  }

　　}

//var handleFuction = function(){alert("111111")}
//var Obj = document.getElementById('move');
//MouseWheelHandle(Obj,handleFuction);
//滚动事件
function MouseWheelHandle (obj,handle){
    var info = navigator.userAgent;
    var down = null;//用来记录滚轮的上下,down=true表示向下
    if(info.indexOf("Firefox") !=-1){
        obj.addEventListener("DOMMouseScroll",function(event){
            var ev = event ||window.event;
                if(ev.detail>0){
                    //不做具体的事情
                    down = true;
                }else{
                    down = false;            
                }
                //调用外部传递的事件处理程序;
                handle(down,ev);
                //apply 可以让每一个函数都有一个自带的方法叫做apply,
                //这个方法可以切换函数的运行环境,如果函数需要传递参数,以数组的形式传递
               // handle.apply(obj,[down,ev]);
        },false);

    }else{

        obj.onmousewheel = function(event){
            var ev = event || window.event;
            if(ev.wheelDelta >0){
                down =false;
            }else{
                down = true;
            }
            handle(down,ev);
            handle.apply(obj,[down,ev]);
            //call 每个函数也都有一个call方法,他的功能和apply一样,
            //都可以实现切换一个函数的调用者(运行环境);
            //call和apply唯一的区别在于:函数有参数的时候,传递方式不一样,call
            //依次传递参数,参数用逗号隔开即可
            handle.call(obj,down,ev);
        }
    }
}

//检查两个矩形是否发生碰撞
function hitfun(obj1,obj2){
        //什么情况一定碰不到
        var l1 = obj1.offsetLeft;
        var t1 = obj1.offsetTop;
        var r1 = l1+obj1.offsetWidth;
        var b1 = t1+obj1.offsetHeight;

        
        var l2 = obj2.offsetLeft;
        var t2 = obj2.offsetTop;
        var r2 = l2+obj2.offsetWidth;
        var b2 = t2+obj2.offsetHeight;
        if(l1 >r2 || t1 > b2 ||r1<l2 ||b1<t2 ){
                return false;
        }else{
            return true;
        }
//检测两个圆形是否发生碰撞
    function hitfun(obj1,obj2){
        //记录两个圆的半径
        var r1 = obj1.offsetWidth/2;
        var r2 = obj2.offsetWidth/2;
        var l1 = obj1.offsetLeft+r1;
        var t1 = obj1.offsetTop +r1;
        var l2 = obj2.offsetLeft +r2;
        var t2 = obj2.offsetTop +r2;
        var a = l2-l1;
        var b = t2-t1;
        var c = Math.sqrt(Math.pow((l2-l1),2)+Math.pow((t2-t1),2))
        var d = r1+r2;
        if(c <=d){
            return true;
        }else{
            return false;
        }

    }