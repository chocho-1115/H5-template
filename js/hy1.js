// JavaScript Document
//escape   unescape
$(window).load(function(e) {
	//缓存全局变量
	var win = window,
	    doc = document;

	/*if(window.innerHeight<1008){
		var w = 1008*window.innerWidth/window.innerHeight;
		//document.getElementById('content').style.width = w+'px';
		document.getElementById('viewEle').setAttribute('content','height=1008,width='+w+', user-scalable=no,target-densitydpi = device-dpi');
	}
*/
	//page信息
	
	//跳到第二页
	J.pageFunc(0,{time:0,endCallback:function(){console.log('翻页成功后的回调')}})//显示第indexPage页


	//添加背景音乐
	var audioEle = J.addMp4({
		src:'media/bj.mp3',
		autoplay:true,
		loop:true
	});
    //给背景音乐添加一个按钮
	J.setMp4Btn({
		audioBtn:document.getElementById('micBtn'),
		audioEle:audioEle,
		autoplay:true
	});	
	
   //关闭页面下拉刷新
   JSeasy.setScroll(false)//
   
   //  获取地址里面带的参数
   JSeasy.getQueryString('openid')
   
   //获取 10-20的随机整数
   JSeasy.getRandomNum(10,20,true)
   
   //验证是否为手机号码
   JSeasy.isMobile('15211142729')
   
   //横屏 
    //window.orientation = 0
	/*JSeasy.rotateWindows({
		winW:1136,//页面最大宽度 在手机中根据手机高度自动适配
	    winH:640,//页面适配宽度
	    callback: function(opt){
			
		},
		onRotate: function(opt){
			
		}
	});*/
	
   
	
	/*$.get("http://dqpage.com/h5/lvdi/index.php", {openid:ID,Action:"get"}, function(data){
            console.log(data);//0 玩过；1可以玩；-1没有这个用户 或者不是用微信登陆的
			isShake = data;
   },'jsonp');*/
	
	/*$.post("http://www.cui2.com/h5/tongCheng20151210/index.php?act=chaxun", {openid:openid}, function(data){
			var data=JSON.parse(data);
			var text1 = $('.text1').val().replace(/\s/g, ""),
		  	    text2 = $('.text2').val().replace(/\s/g, "");
			JSON.stringify(result)
	});*/
	
	//跳到第二页
	
	
	
	
	/*
	
	window.J.lazyLoad('.lazy_load',function(item){},function(assets){
		var $loadNum = $('#set_load_num');
		J.pageFunc(0,{endCallback:function(){
			window.J.lazyLoad('.lazy',function(item){
				$loadNum.html(item.progress+'%');
			},function(assets){
				$loadNum.html(100+'%');
				setTimeout(function(){
					J.pageFunc(1);
				},800);
			});
		}})//显示第indexPage页
		
	});
	
	
	
	//$('.ewm').fadeIn(300);
	var mc = new Hammer($('.info .btn')[0])
	mc.on("tap",function(e){
		var text1 = $('.info .text1').val().replace(/\s/g, ""),
			text3 = $('.info .text3').val().replace(/\s/g, ""),
		  	text2 = $('.info .text2').val().replace(/\s/g, "");
		if(text1.length==0||text2.length==0||text3.length==0){alert('请完善好个人信息！');return false}	
		if(!J.isMobile(text2)){alert('电话号码错误！');return false}

		$.post("", {openid:openid,name:text1,tele:text2,address:text3}, function(data){
				var data=JSON.parse(data);
				if (parseInt(data.statu) == 1) {
					alert("提交成功！");
					
					
					$('.info .text1').val('')
					$('.info .text2').val('')
					$('.info .text3').val('')
					
					
					$('.info').fadeOut(300);
				}else{
					alert("您提交收获地址无需重复提交！");
				}
		});
				
	});
	*/
   

});


   





