// JavaScript Document
//escape   unescape
$(window).load(function(e) {
	//缓存全局变量
	var win = window,
		doc = document;
	
	//跳到第二页
	H5Init({
		pageAnimateType: 'fade',//fade 渐隐渐现翻页   translate 位移翻页 threeD  三d翻页
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
	
	J.setViewportMinHeight(1008); //640 1138 1236 1250    750 1334 1448 1450    
	if(window.history.length==1){
		J.setViewportMinHeight(1150); //640 1138 1236 1250    750 1334 1448 1450    
	}else{
		J.setViewportMinHeight(1150);
	}
	//横屏 的时候调用
	//window.orientation = 180
	/*JSeasy.rotateWindows({
		viewportMinHeight: 1008,
		callback: function(opt){
			
			
			
		},
		onRotate: function(opt){
			
		}
	});*/
	
	window.publicInfo.pageCallback = {
		'2':function(){
			
		}
	};
	
	+function(){
		
		var end_time = (new Date()).getTime()+10001;//月份是实际月份-1 "10/31/2018 14:51:00"
		
		J.countDown(end_time,{
			framerate:100,
			onUpdate:function(res){
				console.log(res.second)
			},
			onComplete:function(res){
				console.log(res.day+'天 '+(res.hour<10?"0"+res.hour:res.hour)+':'+(res.minute<10?"0"+res.minute:res.minute)+':'+(res.second<10?"0"+res.second:res.second)+':'+res.millisecond)
			}
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
		fileload:function(item){},
		complete:function(assets){
			var $loadNum = $('#set_load_num');
			
			J.pageFunc(0,{endCallback:function(){
				
				window.J.lazyLoad('.lazy',{
					fileload:function(item){
						$loadNum.html(parseInt(item.progress*100)+'%');
					},
					complete:function(assets){
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
	/*var fileEle = J.initUpImg(document.documentElement,'image/*',function(reader){
		console.log(reader)
		var exif_orientation = J.exifOrientation(reader.result)
		//.substring(22)
		//type为jpeg webp的情况下 encoderOptions才起作用
		J.compressionPIC(reader.result,{maxSize:750,exif_orientation:exif_orientation,type:'image/jpeg',encoderOptions:0.8},function(picdata){
			//$('.page4 .logo').attr('src',picdata)
			info.img = picdata.substring(23);
			$('.page3 .pic').css({'background-image':'url('+picdata+')','opacity':1});
		})
	});
	*/
	
	
	
	
	

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


   





