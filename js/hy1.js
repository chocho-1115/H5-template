// JavaScript Document
//escape   unescape
$(window).load(function(e) {
	//缓存全局变量
	var win = window,
		doc = document;
	
	//跳到第二页
	H5Init({
		pageAnimateType: 'threeD',//fade translate threeD
		//viewportHeight : 1108,
		pageSwipeB : {
			'0':1,
			'1':1,
			'2':0,
			'3':-1,
			'4':0,
			'5':0,
			'6':-1,
		},
	})
	
	J.pageFunc(1,{time:0,endCallback:function(){console.log('翻页成功后的回调')}})//显示第indexPage页
	
	
	//setTimeout(function(){J.pageFunc(1,{endCallback:function(){alert(0)}})},3000)
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
	document.addEventListener("WeixinJSBridgeReady", function () {  
		audioEle.play();
		$('#micBtn').addClass('show');
	}, false);  
	document.addEventListener('YixinJSBridgeReady', function() {  
		audioEle.play(); 
		$('#micBtn').addClass('show');
	}, false); 
	
	
	
	//关闭页面下拉刷新
	JSeasy.setScroll(false)//
	
	//  获取地址里面带的参数
	JSeasy.getQueryString('openid')
	
	//获取 10-20的随机整数
	JSeasy.getRandomNum(10,20,true)
	
	/*	window.J.lazyLoad('.lazy_load',{
		fileload:function(item){console.log(item)},
		complete:function(assets){console.log(assets)
			var $loadNum = $('#set_load_num');
			
			J.pageFunc(0,{endCallback:function(){
				
				window.J.lazyLoad('.lazy',{
					fileload:function(item){
						$loadNum.html(parseInt(item.progress*100)+'%');
					},
					complete:function(assets){console.log(assets)
						$loadNum.html(100+'%');
						setTimeout(function(){
							J.pageFunc(1);
						},800);
					},
					minTime:6000
				});
				
			}})
			
		},
		minTime:0
		
	});*/
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
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


   





