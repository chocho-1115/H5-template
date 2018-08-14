// JavaScript Document
//escape   unescape
$(window).load(function(e) {
	//缓存全局变量
	var win = window,
		doc = document;
	
	//跳到第二页
	H5Init({
		pageAnimateType: 'fade',//fade 渐隐渐现翻页   translate 位移翻页 threeD  三d翻页
		viewportHeight: 1008,//640*1338    750*1334     1008为 页面内容最小高度；默认按640的宽度适配  但是在如ip4屏幕按相对较短的手机下  底部内容显示不全  需要根据页面内容的高度 来调整适配宽度
		//scale : window.innerHeight<1008?window.innerHeight/1008:1,  //此参数 作废
		
		//滑动翻页控制
		// 0 代表可上翻  也可以下翻   1 代表只可下翻    -1代表只可以上翻   false 代表不可以滑动翻页
		pageSwipeB : {
			'0':false,//
			'1':1,
			'2':0,
			'3':-1,
			'4':false,
			'5':false,
			'6':false,
		},
	});
	
	//横屏 的时候调用
	//window.orientation = 90
	/*JSeasy.rotateWindows({
		winW:window.innerHeight,//页面最大宽度 在手机中根据手机高度自动适配
		winH:640,//页面适配宽度
		callback: function(opt){
			
		},
		onRotate: function(opt){
			
		}
	});
	*/
	window.publicInfo.pageCallback = {
		'2':function(){
			
		}
	};
	
	+function(){
		J.countDown("9/2/2918 00:00:00",function(data){
			console.log(data.day+'天 '+(data.hour<10?"0"+data.hour:data.hour)+':'+(data.minute<10?"0"+data.minute:data.minute)+':'+(data.second<10?"0"+data.second:data.second))
		});
	}();
	
	/*JSeasy.isTime("Dec 08, 2017 11:54:00",'活动将于12点开始',function(){
		J.pageFunc(1,{time:0,endCallback:function(){console.log('翻页成功后的回调')}})//显示第indexPage页
	});*/
	
	var page = Number(J.getQueryString('page'))||1//
	J.pageFunc(page,{
		time:300,//翻页动画的运行时间
		endCallback:function(){},//翻页后的回调函数
		startCallback:function(){}//翻页前调用的函数
	});
	
	
	//setTimeout(function(){J.pageFunc(1,{endCallback:function(){alert(0)}})},3000)
	//添加背景音乐
	/*var audioEle = J.addMp4({
		src:'media/bj.mp3',
		autoplay:true,//音乐是否自动播放
		loop:true//是否循环播放
	});
	//给背景音乐添加一个按钮
	J.setMp4Btn({
		audioBtn:document.getElementById('micBtn'),
		audioEle:audioEle,
		autoplay:true
	});
	//以下是为了兼容ios自动播放音乐
	document.addEventListener("WeixinJSBridgeReady", function () {  
		audioEle.play();
		$('#micBtn').addClass('show');
	}, false);  
	document.addEventListener('YixinJSBridgeReady', function() {  
		audioEle.play(); 
		$('#micBtn').addClass('show');
	}, false); */
	
	
	//关闭页面下拉露出网页来源
	JSeasy.setScroll(false)//
	
	
	//提示文案
	//JSeasy.tipsText('请输入您的昵称')
	
	
	
	//懒加载   在有load页面的时候用
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
	
	
	//调用手机相册
	var fileEle = J.initUpImg($('.page1'),'image/*',function(reader){
		console.log(reader)
		//.substring(22)
		//type为jpeg webp的情况下 encoderOptions才起作用
		J.compressionPIC(reader.result,{maxWidth:100,type:'image/png',encoderOptions:0.92},function(picdata){
			//$('.page4 .logo').attr('src',picdata)
			$('.page1 img').attr({'src':picdata});
		})
	});
	
	
	
	
	
	
	
	

	//post 请求数据
	/*$.post("http://www.cui2.com/h5/tongCheng20151210/index.php?act=chaxun", {openid:openid}, function(data){
			var data=JSON.parse(data);
			var text1 = $('.text1').val().replace(/\s/g, ""),
				text2 = $('.text2').val().replace(/\s/g, "");
			JSON.stringify(result)
	});*/
	
	
	
	
	/*
	//$('.sub').on("click",function(e){
		var text1 = $('.info .text1').val().replace(/\s/g, ""),//获取input数据  并且去掉数据中的空格
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


   





