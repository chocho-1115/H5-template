// JavaScript Document
//escape   unescape



$(window).load(function(e) {
	//缓存全局变量
	var win = window,
		doc = document;
	
	//跳到第二页
	H5Init({
		pageAnimateType: 'fade',//fade translate threeD
		viewportHeight: 1008,
		//scale : window.innerHeight<1008?window.innerHeight/1008:1,
		pageSwipeB : {
			'0':false,
			'1':false,
			'2':false,
			'3':false,
			'4':false,
			'5':false,
			'6':false,
		},
	})
	
	//横屏 
	//window.orientation = 90
	/*JSeasy.rotateWindows({
		winW:1136,//页面最大宽度 在手机中根据手机高度自动适配
		winH:640,//页面适配宽度
		callback: function(opt){
			
		},
		onRotate: function(opt){
			
		}
	});*/
	
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
	
	
	
	//JSeasy.tipsText('请输入您的昵称')
	
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
	
	
	
	/*JSeasy.initUpImg(document.querySelector('#upimg'),function(reader){
		console.log(reader)
		$('.win1 .pic').css({'background-image':'url('+reader.result+')',opacity:1});
		
		
	});*/
	
	
	
	
	
	
	
	

	
	/*$.post("http://www.cui2.com/h5/tongCheng20151210/index.php?act=chaxun", {openid:openid}, function(data){
			var data=JSON.parse(data);
			var text1 = $('.text1').val().replace(/\s/g, ""),
				text2 = $('.text2').val().replace(/\s/g, "");
			JSON.stringify(result)
	});*/
	
	//跳到第二页
	
	
	
	
	/*
	
	
	
	
	
	//$('.btn').on("click",function(e){
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


   





