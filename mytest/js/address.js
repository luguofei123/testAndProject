$(document).ready(function(){

       var _val1,_val2
       
       _val1=$("#dpstarttime").val();//获取文本框值
       _val2=$("#dpendtime").val();

		var xmlhttp;   //定义对象
		if (window.XMLHttpRequest)
		{
			xmlhttp=new XMLHttpRequest();
		}
		else
		{
			xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
		}
		  
		xmlhttp.open("POST","getdate.php",false);   //ajax发送请求
		xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		xmlhttp.send("&type=2");
	 
		var arrs=xmlhttp.responseText;   //ajax接受返回值
		
		// if(arrs==null || arrs=="")  //判断数组为空的话取所有用户
		// {
			// var xmlhttp;   //定义对象
			// if (window.XMLHttpRequest)
			// {
				// xmlhttp=new XMLHttpRequest();
			// }
			// else
			// {
				// xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
			// }
			// xmlhttp.open("POST","getdate.php",false);   //ajax发送请求
			// xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
			// xmlhttp.send("&type=2");
		 
			// arrs=xmlhttp.responseText;   //ajax接受返回值
		// }
		
		var arrs = eval('(' + arrs + ')');   //转换json格式		
		
		var arrindex=1;
		$$.module.address.source.hotel="";
		$.each(arrs,function(n,value){         
			$$.module.address.source.hotel +="@"+value+"|";
			//$$.module.address.source.hotel +="@"+value+"|"+arrindex+"|";
			arrindex++;
		});
		


//$$.module.address.source.hotel = "@Anqing|安庆|36|@Bangbu|蚌埠|37|@Chaohu|巢湖|38|@Chizhou|池州|39|@Chuzhou|滁州|40|@Fuyang|阜阳|41|@Hefei|合肥|42|@Huaibei|淮北|43|@Huainan|淮南|44|@Huangshan|黄山|45|@Liuan|六安|46|@Maanshan|马鞍山|47|@Suzhouu|宿州|48|@Tongling|铜陵|49|@Wuhu|芜湖|50|@Xuancheng|宣城|51|@BoZhou|亳州|52|@Beijing|北京|53|@Fuzhou|福州|54|@Longyan|龙岩|55|@Nanping|南平|56|@Ningde|宁德|57|@Putian|莆田|58|@Quanzhou|泉州|59|@Sanming|三明|60|@Xiamen|厦门|61|@Zhangzhou|漳州|62|@Baiyin|白银|63|@Dingxi|定西|64|@Gannan|甘南|65|@Jiayuguan|嘉峪关|66|@Jinchang|金昌|67|@Jiuquan|酒泉|68|@Lanzhou|兰州|69|@Linxia|临夏|70|@Longnan|陇南|71|@Pingliang|平凉|72|@Qingyang|庆阳|73|@Tianshui|天水|74|@Wuwei|武威|75|@Zhangye|张掖|76|@Chaozhou|潮州|77|@DongGuan|东莞|78|@Foshan|佛山|79|@Guangzhou|广州|80|@Heyuan|河源|81|@Huizhou|惠州|82|@Jiangmen|江门|83|@Jieyang|揭阳|84|@Maoming|茂名|85|@Meizhou|梅州|86|@Qingyuan|清远|87|@Shantou|汕头|88|@Shanwei|汕尾|89|@Shaoguan|韶关|90|@Shenzhen|深圳|91|@Yangjiang|阳江|92|@Yunfu|云浮|93|@Zhanjiang|湛江|94|@Zhaoqing|肇庆|95|@Zhongshan|中山|96|@Zhuhai|珠海|97|@Baise|百色|98|@Beihai|北海|99|@Chongzuo|崇左|100|@Fangchenggang|防城港|101|@Guilin|桂林|102|@Guigang|贵港|103|@Hechi|河池|104|@Hezhou|贺州|105|@Laibin|来宾|106|@Liuzhou|柳州|107|@Nanning|南宁|108|@Qinzhou|钦州|109|@Wuzhou|梧州|110|@Yulin|玉林|111|@Anshun|安顺|112|@Bijie|毕节|113|@Guiyang|贵阳|114|@Liupanshui|六盘水|115|@Qiandongnanmiaozudongzuzizhizhou|黔东|116|@Qiannanbuyizumiaozuzizhizhou|黔南|117|@Qianxinanbuyizumiaozuzizhizhou|黔西|118|@Tongren|铜仁|119|@Zunyi|遵义|120|@Baishalizuzizhixian|白沙|121|@Baotinglizumiaozuzizhixian|保亭|122|@Changjianglizuzizhixian|昌江|123|@Chengmaixian|澄迈县|124|@Dinganxian|定安县|125|@Dongfang|东方|126|@Haikou|海口|127|@Ledonglizuzizhixian|乐东|128|@Lingaoxian|临高县|129|@Lingshui|陵水|130|@Qionghai|琼海|131|@Qiongzhonglizumiaozuzizhixian|琼中|132|@Sanya|三亚|133|@Tunchangxian|屯昌县|134|@Wanning|万宁|135|@Wenchang|文昌|136|@Wuzhishan|五指山|137|@DanZhou|儋州|138|@Baoding|保定|139|@Cangzhou|沧州|140|@Chengde|承德|141|@Handan|邯郸|142|@Hengshui|衡水|143|@Langfang|廊坊|144|@Qinhuangdao|秦皇岛|145|@Shijiazhuang|石家庄|146|@Tangshan|唐山|147|@Xingtai|邢台|148|@Zhangjiakou|张家口|149|@Anyang|安阳|150|@Hebi|鹤壁|151|@Jiyuan|济源|152|@Jiaozuo|焦作|153|@Kaifeng|开封|154|@Luoyang|洛阳|155|@Nanyang|南阳|156|@Pingdingshan|平顶山|157|@Sanmenxia|三门峡|158|@Shangqiu|商丘|159|@Xinxiang|新乡|160|@Xinyang|信阳|161|@Xuchang|许昌|162|@Zhengzhou|郑州|163|@Zhoukou|周口|164|@Zhumadian|驻马店|165|@LuoHe|漯河|166|@PuYang|濮阳|167|@Daqing|大庆|168|@Daxinganling|大兴安岭|169|@Haerbin|哈尔滨|170|@Hegang|鹤岗|171|@Heihe|黑河|172|@Jixi|鸡西|173|@Jiamusi|佳木斯|174|@Mudanjiang|牡丹江|175|@Qitaihe|七台河|176|@Qiqihaer|齐齐哈尔|177|@Shuangyashan|双鸭山|178|@Suihua|绥化|179|@Yichun|伊春|180|@Ezhou|鄂州|181|@Enshitujiazumiaozuzizhizhou|恩施|182|@Huanggang|黄冈|183|@Huangshi|黄石|184|@Jingmen|荆门|185|@Jingzhou|荆州|186|@Qianjiang|潜江|187|@Shennongjialinqu|神农架|188|@Shiyan|十堰|189|@Suizhou|随州|190|@Tianmen|天门|191|@Wuhan|武汉|192|@Xiantao|仙桃|193|@Xianning|咸宁|194|@Xiangfan|襄樊|195|@Xiaogan|孝感|196|@Yichang|宜昌|197|@Changde|常德|198|@Changsha|长沙|199|@Chenzhou|郴州|200|@Hengyang|衡阳|201|@Huaihua|怀化|202|@Loudi|娄底|203|@Shaoyang|邵阳|204|@Xiangtan|湘潭|205|@Xiangxi|湘西|206|@Yiyang|益阳|207|@Yongzhou|永州|208|@Yueyang|岳阳|209|@Zhangjiajie|张家界|210|@Zhuzhou|株洲|211|@Baicheng|白城|212|@Baishan|白山|213|@Changchun|长春|214|@Jilin|吉林|215|@Liaoyuan|辽源|216|@Siping|四平|217|@Songyuan|松原|218|@Tonghua|通化|219|@Yanbian|延边|220|@Changzhou|常州|221|@Huaian|淮安|222|@Lianyungang|连云港|223|@Nanjing|南京|224|@Nantong|南通|225|@Suzhou|苏州|226|@Suqian|宿迁|227|@Taizhou|泰州|228|@Wuxi|无锡|229|@Xuzhou|徐州|230|@Yancheng|盐城|231|@Yangzhou|扬州|232|@Zhenjiang|镇江|233|@Fuzhou|抚州|234|@Ganzhou|赣州|235|@Jian|吉安|236|@Jingdezhen|景德镇|237|@Jiujiang|九江|238|@Nanchang|南昌|239|@Pingxiang|萍乡|240|@Shangrao|上饶|241|@Xinyu|新余|242|@Yichun|宜春|243|@Yingtan|鹰潭|244|@Anshan|鞍山|245|@Benxi|本溪|246|@Chaoyang|朝阳|247|@Dalian|大连|248|@Dandong|丹东|249|@Fushun|抚顺|250|@Fuxin|阜新|251|@Huludao|葫芦岛|252|@Jinzhou|锦州|253|@Liaoyang|辽阳|254|@Panjin|盘锦|255|@Shenyang|沈阳|256|@Tieling|铁岭|257|@Yingkou|营口|258|@Alashanmeng|阿拉善盟|259|@Bayannaoer|巴彦淖尔|260|@Baotou|包头|261|@Chifeng|赤峰|262|@Eerduosi|鄂尔多斯|263|@Huhehaote|呼和浩特|264|@Hulunbeier|呼伦贝尔|265|@Tongliao|通辽|266|@Wuhai|乌海|267|@Wulanchabushi|乌兰察布|268|@Xilinguole|锡林郭勒|269|@Xinganmeng|兴安盟|270|@Guyuan|固原|271|@Shizuishan|石嘴山|272|@Wuzhong|吴忠|273|@Yinchuan|银川|274|@Guoluocangzuzizhizhou|果洛|275|@Haibeicangzuzizhizhou|海北|276|@Haidong|海东|277|@Hainancangzuzizhizhou|海南|278|@Haixi|海西|279|@Huangnancangzuzizhizhou|黄南|280|@Xining|西宁|281|@Yushucangzuzizhizhou|玉树|282|@Binzhou|滨州|283|@Dezhou|德州|284|@Dongying|东营|285|@Heze|菏泽|286|@Jinan|济南|287|@Jining|济宁|288|@Laiwu|莱芜|289|@Liaocheng|聊城|290|@Linyi|临沂|291|@Qingdao|青岛|292|@Rizhao|日照|293|@Taian|泰安|294|@Weihai|威海|295|@Weifang|潍坊|296|@Yantai|烟台|297|@Zaozhuang|枣庄|298|@Zibo|淄博|299|@Changzhi|长治|300|@Datong|大同|301|@Jincheng|晋城|302|@Jinzhong|晋中|303|@Linfen|临汾|304|@Lvliang|吕梁|305|@Shuozhou|朔州|306|@Taiyuan|太原|307|@Xinzhou|忻州|308|@Yangquan|阳泉|309|@Yuncheng|运城|310|@Ankang|安康|311|@Baoji|宝鸡|312|@Hanzhong|汉中|313|@Shangluo|商洛|314|@Tongchuan|铜川|315|@Weinan|渭南|316|@Xian|西安|317|@Xianyang|咸阳|318|@Yanan|延安|319|@Yulin|榆林|320|@Shanghai|上海|321|@Abacangzuqiangzuzizhizhou|阿坝|322|@Bazhong|巴中|323|@Chengdu|成都|324|@Dazhou|达州|325|@Deyang|德阳|326|@Ganzi|甘孜|327|@Guangan|广安|328|@Guangyuan|广元|329|@Leshan|乐山|330|@Liangshan|凉山|331|@Meishan|眉山|332|@Mianyang|绵阳|333|@Nanchong|南充|334|@Neijiang|内江|335|@Panzhihua|攀枝花|336|@Suining|遂宁|337|@Yaan|雅安|338|@Yibin|宜宾|339|@Ziyang|资阳|340|@Zigong|自贡|341|@LuZhou|泸州|342|@Tianjin|天津|343|@Ali|阿里|344|@Changdu|昌都|345|@Lasa|拉萨|346|@Linzhi|林芝|347|@Naqu|那曲|348|@Rikaze|日喀则|349|@Shannan|山南|350|@Akesu|阿克苏|351|@Alaer|阿拉尔|352|@Bayinguoleng|巴音郭楞|353|@Boertalamengguzizhizhou|博尔塔拉|354|@Changjihuizuzizhizhou|昌吉|355|@Hami|哈密|356|@Hetian|和田|357|@Kashi|喀什|358|@Kelamayi|克拉玛依|359|@Kezilesukeerkezizizhizhou|克孜|360|@Shihezi|石河子|361|@Tumushuke|图木舒克|362|@Tulufan|吐鲁番|363|@Wulumuqi|乌鲁木齐|364|@Wujiaqu|五家渠|365|@Yili|伊犁|366|@Baoshan|保山|367|@Chuxiongyizuzizhizhou|楚雄|368|@Dali|大理|369|@Dehongdaizujingpozuzizhizhou|德宏|370|@Diqing|迪庆|371|@Honghehanizuyizuzizhizhou|红河|372|@Kunming|昆明|373|@Lijiang|丽江|374|@Lincang|临沧|375|@Nujianglilizuzizhizhou|怒江|376|@Qujing|曲靖|377|@Simao|思茅|378|@Wenshanzhuangzumiaozuzizhizhou|文山|379|@Xishuangbanna|西双版纳|380|@Yuxi|玉溪|381|@Zhaotong|昭通|382|@Hangzhou|杭州|383|@Huzhou|湖州|384|@Jiaxing|嘉兴|385|@Jinhua|金华|386|@Lishui|丽水|387|@Ningbo|宁波|388|@Shaoxing|绍兴|389|@Taizhou|台州|390|@Wenzhou|温州|391|@Zhoushan|舟山|392|@QuZhou|衢州|393|@Chongqing|重庆|394|@Xianggang|香港|395|@Aomen|澳门|396|@Gaoxiong|高雄|397|@Hualian|花莲|398|@Jilong|基隆|399|@Jiayi|嘉义|400|@Taibei|台北|401|@Taidong|台东|402|@Tainan|台南|403|@Taizhong|台中|404|@Zhongwei|中卫|3105|@Tacheng|塔城|3113|@Aletai|阿勒泰|3114|@Wusulijiang|乌苏里江|3143|@Chibishi|赤壁市|3280|@Shunde|顺德|3281";
// $$.module.address.source.hotel_hotData = {
     // "热门": "@80|北京@321|上海@80|广州@91|深圳@324|成都@383|杭州@192|武汉@317|西安@394|重庆@292|青岛@199|长沙@224|南京@61|厦门@373|昆明@248|大连@343|天津@163|郑州@133|三亚@287|济南@54|福州",
    // 'ABC': "@36|安庆@112|安顺@150|安阳@245|鞍山@259|阿拉善盟@311|安康@322|阿坝@344|阿里@351|阿克苏@352|阿拉尔@396|澳门@3114|阿勒泰@37|蚌埠@52|亳州@53|北京@63|白银@98|百色@99|北海@113|毕节@121|白沙@122|保亭@139|保定@212|白城@213|白山@246|本溪@260|巴彦淖尔@261|包头@283|滨州@312|宝鸡@323|巴中@353|巴音郭楞@354|博尔塔拉@367|保山@38|巢湖@39|池州@40|滁州@77|潮州@100|崇左@123|昌江@124|澄迈县@140|沧州@141|承德@198|常德@199|长沙@200|郴州@214|长春@221|常州@247|朝阳@262|赤峰@300|长治@324|成都@345|昌都@355|昌吉@368|楚雄@394|重庆@3280|赤壁市",
    // 'DEF':"@64|定西@78|东莞@125|定安县@126|东方@138|儋州@168|大庆@169|大兴安岭@248|大连@249|丹东@284|德州@285|东营@301|大同@325|达州@326|德阳@369|大理@370|德宏@371|迪庆@181|鄂州@182|恩施@263|鄂尔多斯@41|阜阳@54|福州@79|佛山@101|防城港@234|抚州@250|抚顺@251|阜新",
	// 'GHJ':"@65|甘南@80|广州@102|桂林@103|贵港@114|贵阳@235|赣州@271|固原@275|果洛@327|甘孜@328|广安@329|广元@397|高雄@42|合肥@43|淮北@44|淮南@45|黄山@81|河源@82|惠州@104|河池@105|贺州@127|海口@142|邯郸@143|衡水@151|鹤壁@170|哈尔滨@171|鹤岗@172|黑河@183|黄冈@184|黄石@201|衡阳@202|怀化@222|淮安@252|葫芦岛@264|呼和浩特@265|呼伦贝尔@276|海北@277|海东@278|海南@279|海西@280|黄南@286|菏泽@313|汉中@356|哈密@357|和田@372|红河@383|杭州@384|湖州@398|花莲@66|嘉峪关@67|金昌@68|酒泉@83|江门@84|揭阳@152|济源@153|焦作@173|鸡西@174|佳木斯@185|荆门@186|荆州@215|吉林@236|吉安@237|景德镇@238|九江@253|锦州@287|济南@288|济宁@302|晋城@303|晋中@385|嘉兴@386|金华@399|基隆@400|嘉义",
	// 'KLM':"@154|开封@358|喀什@359|克拉玛依@360|克孜@373|昆明@46|六安@55|龙岩@69|兰州@70|临夏@71|陇南@106|来宾@107|柳州@115|六盘水@128|乐东@129|临高县@130|陵水@144|廊坊@155|洛阳@166|漯河@203|娄底@216|辽源@223|连云港@254|辽阳@289|莱芜@290|聊城@291|临沂@304|临汾@305|吕梁@330|乐山@331|凉山@342|泸州@346|拉萨@347|林芝@374|丽江@375|临沧@387|丽水@47|马鞍山@85|茂名@86|梅州@175|牡丹江@332|眉山@333|绵阳",
	// 'NPQ':"@56|南平@57|宁德@108|南宁@156|南阳@224|南京@225|南通@239|南昌@334|南充@335|内江@348|那曲@376|怒江@388|宁波@58|莆田@72|平凉@157|平顶山@167|濮阳@240|萍乡@255|盘锦@336|攀枝花@59|泉州@73|庆阳@87|清远@109|钦州@116|黔东@117|黔南@118|黔西@131|琼海@132|琼中@145|秦皇岛@176|七台河@177|齐齐哈尔@187|潜江@292|青岛@377|曲靖@393|衢州",
	// 'RST':"@293|日照@349|日喀则@48|宿州@60|三明@88|汕头@89|汕尾@90|韶关@91|深圳@133|三亚@146|石家庄@158|三门峡@159|商丘@178|双鸭山@179|绥化@188|神农架@189|十堰@190|随州@204|邵阳@217|四平@218|松原@226|苏州@227|宿迁@241|上饶@256|沈阳@272|石嘴山@306|朔州@314|商洛@321|上海@337|遂宁@350|山南@361|石河子@378|思茅@389|绍兴@3281|顺德@49|铜陵@74|天水@119|铜仁@134|屯昌县@147|唐山@191|天门@343|天津@219|通化@228|泰州@257|铁岭@266|通辽@294|泰安@307|太原@315|铜川@343|天津@362|图木舒克@363|吐鲁番@390|台州@401|台北@402|台东@403|台南@404|台中@3113|塔城",
	// 'WXY':"@50|芜湖@75|武威@110|梧州@135|万宁@136|文昌@137|五指山@192|武汉@229|无锡@267|乌海@268|乌兰察布@273|吴忠@295|威海@296|潍坊@316|渭南@364|乌鲁木齐@365|五家渠@379|文山@391|温州@3143|乌苏里江@51|宣城@61|厦门@148|邢台@160|新乡@161|信阳@162|许昌@193|仙桃@194|咸宁@195|襄樊@196|孝感@205|湘潭@206|湘西@230|徐州@242|新余@269|锡林郭勒@270|兴安盟@281|西宁@308|忻州@317|西安@318|咸阳@380|西双版纳@395|香港@92|阳江@93|云浮@111|玉林@180|伊春@197|宜昌@207|益阳@208|永州@209|岳阳@220|延边@231|盐城@232|扬州@243|宜春@244|鹰潭@258|营口@274|银川@282|玉树@297|烟台@309|阳泉@310|运城@319|延安@320|榆林@338|雅安@339|宜宾@366|伊犁@381|玉溪",
	// 'Z':"@62|漳州@76|张掖@94|湛江@95|肇庆@96|中山@97|珠海@120|遵义@149|张家口@163|郑州@164|周口@165|驻马店@210|张家界@211|株洲@233|镇江@298|枣庄@299|淄博@340|资阳@341|自贡@382|昭通@392|舟山@3105|中卫"
// };


String.prototype.cntStr = function() {
    return this.replace(/@+/g, "@");
};

});