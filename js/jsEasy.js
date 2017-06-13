//UIeasy.js by 华扬长沙 杨燚平 email：849890769@qq.com
window.publicInfo = {
	content : $('#content'),
	page : $('.page'),
	indexPage : -1,
	pageStatus : 0,//页面切换状态
	pageCutover : true,//页面切换开关
	pageLen : 0,//总共多少页
	
	prefix : null,
	htmlFontSize : -1,
	
	
};

var defaultConfig = {
	pageAnimateType : 'threeD',//fade translate threeD
	setPrefix : false, //
	isRem : false, //是否为rem适配
	pageSwipeB : {
		'0':1,
		'1':1,
		'2':0,
		'3':-1,
		'4':0,
		'5':0,
		'6':-1,
	},
	
}


window.publicInfo.pageLen = window.publicInfo.page.length;

(function(){
	
	var pageAnimate = {
		'fadeInit':function(){
			TweenMax.set(publicInfo.page,{
				display:'none',
				opacity:0
			});
		},
		'fade':function(oldPage,newPage,direction,time,callBack){
			
			TweenMax.set(newPage,{display:'block'});
			TweenMax.to(oldPage,time/1000,{opacity:0});
			TweenMax.to(newPage,time/1000,{opacity:1,onComplete:function(){
				TweenMax.set(oldPage,{display:'none'});
				callBack()
			}});
			
		},
		'translateInit':function(){
			TweenMax.set(publicInfo.page,{
				display:'none',
				y:publicInfo.page.height(),
				opacity:1,
				'z-index':1
			});
		},
		'translate':function(oldPage,newPage,direction,time,callBack){
			TweenMax.set(oldPage,{'z-index':2});
			TweenMax.set(newPage,{display: 'block',y:oldPage.height()*direction,'z-index':3});
			TweenMax.to(newPage,time/1000,{y:0,opacity:1,onComplete:function(){
				TweenMax.set(oldPage,{display: 'none','z-index':1});
				callBack()
			}});
		},
		'threeDInit':function(){
			
			publicInfo.browserDetect = J.browserDetect();
			var z = publicInfo.browserDetect.isIOS? -window.innerHeight/2:0;
			
			$('#content').css({
				//overflow:'visible',
				
				'-webkit-transform-origin': 'center center -'+$('#content').height()/2+'px',
				transformOrigin: 'center center -'+$('#content').height()/2+'px',
				
				'-weikit-transform': 'translate3d(0px, 0px, '+ z +'px) rotateX(0deg) rotateY(0deg)',
				transform: 'translate3d(0px, 0px, '+ z +'px) rotateX(0deg) rotateY(0deg)',
				
				'-webkit-transform-style': 'preserve-3d',
   				'transform-style': 'preserve-3d',
				
			});
			$('.page').css({
				display: 'none',
				'z-index':1,
			});
			
		},
		'threeD':function(oldPage,newPage,direction,time,callBack){ 
			
			$('body').css({
				'-webkit-perspective': '1200px',
    		 	'perspective': '1200px'
			});
			
			
			var z = publicInfo.browserDetect.isIOS? -window.innerHeight/2:0;
			
			publicInfo.content.css({
				transform: 'translate3d(0px, 0px, '+ z +'px) rotateX('+(-90*direction)+'deg) rotateY(0deg)',
				'-weikit-transform': 'translate3d(0px, 0px, '+ z +'px) rotateX('+(-90*direction)+'deg) rotateY(0deg)',
			});
			
			oldPage.css({
				'z-index':2,
				transform: 'translate3d(0px, '+ (-window.innerHeight*direction) +'px, 0px) rotateX('+(90*direction)+'deg) rotateY(0deg)',
				'-weikit-transform': 'translate3d(0px, '+ (-window.innerHeight*direction) +'px, 0px) rotateX('+(90*direction)+'deg) rotateY(0deg)',
				
				'-webkit-transform-origin': 'center '+(direction==1?'bottom':'top'),
				transformOrigin: 'center '+(direction==1?'bottom':'top'),
			});
			
			newPage.css({
				display: 'block',
				'z-index':3,
				transform: 'translate3d(0px, 0px, 0px) rotateX('+(0)+'deg) rotateY(0deg)',
				'-weikit-transform': 'translate3d(0px, 0px, 0px) rotateX('+(0)+'deg) rotateY(0deg)'
			});
			var obj = {curImg: -90*direction};
			TweenMax.to(obj,time/1000,{
				curImg:0,
				//roundProps: "curImg",  // 仅产生整数
				ease: Power1.easeInOut,
				ease: Power2.easeIn,
				onUpdate: function () {
					publicInfo.content.css({
						transform: 'translate3d(0px, 0px, '+ z +'px) rotateX('+ obj.curImg +'deg) rotateY(0deg)',
						'-weikit-transform': 'translate3d(0px, 0px, '+ z +'px) rotateX('+ obj.curImg +'deg) rotateY(0deg)'
					});
				},
				onComplete:function(){
					TweenMax.set(oldPage,{'z-index':1});
					oldPage.css({display: 'none'})
					callBack()
					$('body').css({
						'-webkit-perspective': 'none',
						'perspective': 'none'
					});
					
				}
			});
		}
	};
	
	window.JSeasy = window.J = {};
	
	JSeasy.EventUtil = {
				
			//事件处理程序
			addHandler:function(element,type,handler){
				if(element.addEventListener){element.addEventListener(type,handler,false)}//DOM2
				else if(element.attachEvent){element.attachEvent('on'+type,handler);}//ie
				else{element['on'+type]=handler;}//DOM0
			},
			//滚轮事件对象的 wheelDelta/FF DOMMouseScroll
			getWheelDelta:function(event){
				if(event.wheelDelta){//ff以外的浏览器
					//在最新版的opera中window返回undefined ， 在opera9.5中返回对象 在9.5版本之前的版本中wheelDelta的正负号颠倒的
					return (window.opera&&window.opera.version()<9.5?-event.wheelDelta:event.wheelDelta);
				}else{return -event.detail*40;}//ff
			},
			//返回事件对象的引用
			getEvent:function(event){return event?event:window.event;},
			//返回鼠标相对于事件对象的 X 坐标
			getX:function(event){return event.offsetX?event.offsetX:event.layerX;},//火狐中的layerX  要保证元素用了position相对/绝对
			//返回鼠标相对于事件对象的 Y 坐标
			getY:function(event){return event.offsetY?event.offsetY:event.layerY;},
			//返回事件目标元素
			getTarget:function(event){return event.target||event.srcElement;},
			//取消事件默认行为
			preventDefaclt:function(event){
				if(event.preventDefault){event.preventDefault();}
				else {event.returnValue=false;}
			},
			//取消事件进一步捕获或冒泡
			stopPropagation:function(event){
				if(event.stopPropagation){event.stopPropagation();}
				else{event.cancelBubble=true;}//ie
			},
			//移除事件处理程序
			removeHandler:function(element,type,handler){
				if(element.removeEventListener){element.removeEventListener(type,handler,false);}
				else if(element.detachEvent){element.detachEvent('on'+type,handler)}
				else{element['on'+type]=null;}
			}
		};
		
		
		
		JSeasy.browserDetect = function() {
			var obj = {
					agent : window.navigator.userAgent
				};
			
			obj.isWindowPhone = (obj.agent.indexOf("IEMobile") > -1) || (obj.agent.indexOf("Windows Phone") > -1);
			obj.isFirefox = (obj.agent.indexOf("Firefox") > -1);
			obj.isOpera = (window.opera != null);
			obj.isChrome = (obj.agent.indexOf("Chrome") > -1);  // NOTE that Chrome on Android returns true but is a completely different browser with different abilities
			obj.isIOS = (obj.agent.indexOf("iPod") > -1 || obj.agent.indexOf("iPhone") > -1 || obj.agent.indexOf("iPad") > -1) && !obj.isWindowPhone;
			obj.isAndroid = (obj.agent.indexOf("Android") > -1) && !obj.isWindowPhone;
			obj.isBlackberry = (obj.agent.indexOf("Blackberry") > -1);
			return obj;
			
			//throw "BrowserDetect cannot be instantiated";
		},
		
		JSeasy.setUpJt = function (B){
			if(B){
				$('#upJt').show();
			}else{
				$('#upJt').hide();
			}
		};
		//defaultConfig.pageSwipeB[publicInfo.indexPage]!=-1&&defaultConfig.pageSwipeB[publicInfo.indexPage]!==false
		JSeasy.pageFunc = function(num,opt){
			
			if(window.publicInfo.indexPage==num)return false;
			
			publicInfo.pageStatus = 0;
			
			var opt = opt || {},
				direction = 1,
				oldPage = publicInfo.page.eq(publicInfo.indexPage),
				newPage = publicInfo.page.eq(num),
				self = this;
				
				
			if(publicInfo.indexPage>num)direction = -1;
			self.setUpJt(false);
			if(opt.startCallback)opt.startCallback();
			if(publicInfo.callback&&publicInfo.callback[num+'init'])publicInfo.callback[num+'init']();
			
			pageAnimate[defaultConfig.pageAnimateType](
				oldPage,
				newPage,
				direction,
				opt.time===undefined?800:opt.time,
				function(){
					oldPage.removeClass('show');
					newPage.addClass('show');
					
					if(publicInfo.callback&&publicInfo.callback[num])publicInfo.callback[num]();
					
					if(opt.endCallback)opt.endCallback();
					
					var d = defaultConfig.pageSwipeB[num]

					if(opt.upJtB===undefined&&(d===0||d===1)){
						self.setUpJt(true);
					}else{
						self.setUpJt(opt.upJtB);
					}
					/*if(opt.upJtB==true || (opt.upJtB===undefined&&defaultConfig.pageSwipeB[publicInfo.indexPage]!=-1&&defaultConfig.pageSwipeB[publicInfo.indexPage]!==false)){
						self.setUpJt(true);
					}*/
					publicInfo.pageStatus = 1;
				});
			
			publicInfo.indexPage = num;
			
		};
		//预载器
		JSeasy.preload = function(srcArr,callback,endCallback,minTime){
			srcArr = typeof(srcArr)=='string' ? [srcArr] : srcArr;
			if(srcArr.length==0)endCallback({});
			var num = 0,
				imgArrObj = {},
				len = srcArr.length,
				t = minTime/len,
				st = (new Date()).getTime();
			for(var i=0;i<len;i++){
				(function(i){
					var newImg = new Image();
					imgArrObj[srcArr[i].id||i+''] = newImg;
					newImg.onload = newImg.onerror = function(e) {
						e = e||window.event;
						setTimeout(function(){
							endLoad(this,e.type,i);
						},t*i-( (new Date()).getTime() -st));
					};
					newImg.src = srcArr[i].path;
				})(i);
			}
			function endLoad(this_,eType,i) {
				num++;
				var progress = Math.floor(num*100/len);
				if(progress>=100)progress=100;
				srcArr[i]['result']=this_;
				srcArr[i]['progress']=progress;
				srcArr[i]['index']=i;
				srcArr[i]['status']=eType=='load'?200:'加载失败';
				callback(srcArr[i]);
				if(num===len){
					endCallback(imgArrObj);
				}
			}
			
		};
		
		JSeasy.lazyLoad = function(selector,callback,endCallback,minTime){
			var doc = document,
				assets = [],
				ele = doc.querySelectorAll(selector);
			
			for(var i=0,len=ele.length;i<len;i++){
				var obj = {path:'',type:'',ele:ele[i]}
				if(ele[i].nodeName === 'IMG'){
					obj.type = 'img';
				}else{
					obj.type = 'bj';
				}
				obj.path = ele[i].getAttribute('data-pic');
				if(obj.path){
					assets.push(obj)
				}
			};
			
			window.J.preload(assets,function(item){
				if(item.status===200){
					if(item.type=='img'){
						item.ele.setAttribute('src',item.path);
					}else if(item.type=='bj'){
						item.ele.style.backgroundImage = 'url('+item.path+')';
					}
				}
				if(callback)callback(item);
			},function(result){
				if(endCallback)endCallback(result);
			},minTime)
			
		};
	
		//获取地址参数
		JSeasy.getQueryString = function(name){
	/*		 var str=window.location.search;
			 if (str.indexOf(name)!=-1){
				  var pos_start=str.indexOf(name)+name.length+1;
				  var pos_end=str.indexOf("&",pos_start);
				  if (pos_end==-1){return str.substring(pos_start);}
				  else{return str.substring(pos_start,pos_end)}
			 }else{
					return defaultV;
			 }*/
			 
			 
	
			 var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
			 var r = window.location.search.substr(1).match(reg);
			 if(r!=null)return unescape(r[2]);
			 return null;
	
		};
		
		JSeasy.scrollBox_M = function(boxEle,nrEle){
			if(!boxEle||!nrEle)return false;
			var mc = new Hammer(boxEle),
				startRegY = 0;
				startTop = 0,
				minTop = boxEle.offsetHeight-nrEle.offsetHeight,
				B = true;
			mc.get('pan').set({direction:30});
			mc.on("panmove",function(e){
				if(!B)return false;
				var V = startTop+(e.center.y-startRegY);
				if(V>0){V=0}else if(V<minTop){V = minTop};
				//window.J.css(nrEle,'top',V+'px');
				$(nrEle).css('top',V)
			});
			mc.on("panstart",function(e){
				minTop = boxEle.offsetHeight-nrEle.offsetHeight;
				if(minTop>=0){B = false;}else{B = true}
				startRegY = e.center.y;
				startTop = parseInt($(nrEle).css('top'));
				
			});
			mc.on("panend",function(e){
				if(!B)return false;
				startRegY = 0;
				startTop = 0;
			});
		};
		
		
		JSeasy.isMobile = function (str){
			if(str==null||str=="") return false;
			//var result=str.match(/^((\(\d{2,3}\))|(\d{3}\-))?((13\d{9})|(15\d{9})|(18\d{9}))$/);
			var result=str.match(/^1[3|4|5|7|8][0-9]\d{8}$/);
			if(result==null)return false;
			return true;
		};
		
		
		JSeasy.isEmail = function (str){
			if(str==null||str=="") return false;

			var result = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
  			if(result.test(str)){
				return true;
			}else{
				return false;
			}

		};
		
		
		JSeasy.addMp4 = function(opt){
			var audioEle = document.createElement('audio');
			audioEle.setAttribute('src',opt.src);
			audioEle.loop = opt.loop;
			
			if(opt.autoplay){
				audioEle.autoplay = true;
				//audioEle.setAttribute('autoplay',true);
				audioEle.play();
				
				if(audioEle.paused==true){
					window.addEventListener('touchstart',clickF,false)
				}
				
			}else{audioEle.autoplay = false;}
			
			function clickF(){
				audioEle.play();
				if(audioEle.btn)audioEle.btn.className += ' show';
				window.removeEventListener('touchstart',clickF,false)
			}
			
			return audioEle;
		};
		//设置mp4 背景音乐按钮	
		JSeasy.setMp4Btn = function(opt){
			
			var audioBtn = opt.audioBtn,
				audioEle = opt.audioEle,
				autoplay = opt.autoplay;
			
			audioBtn.style.display = 'block';
			audioEle.btn = audioBtn;
			var oldClass = audioBtn.className;
			
			if(autoplay&&!audioEle.paused){
				audioBtn.className = oldClass+' show';
				audioEle.play();
			}else{
				audioBtn.className = oldClass+' hide';
				audioEle.pause();
			}
			var mc = new Hammer(audioBtn);
			mc.on('tap',function(e){
				if(audioBtn.className==oldClass+' hide'){
					audioBtn.className = oldClass+' show';
					audioEle.play();
				}else{
					audioBtn.className = oldClass+' hide';
					audioEle.pause();
				}
			});
		};
		
		
		
		function stopDefaultScroll(e){
			e.preventDefault();
			e.stopPropagation();
			//return false;
		}
		//是否开启 触摸滚动页面
		JSeasy.setScroll = function(isScroll){
			if(isScroll){
				document.removeEventListener('touchmove',stopDefaultScroll,false);
			}else{
				document.addEventListener('touchmove',stopDefaultScroll,false);
			}
		};
		
		//整数[]  任意数（）
		JSeasy.getRandomNum = function (Min,Max,integerB){ 
			if(integerB){
				return ( Math.floor(Math.random()*(Max-Min+1)+Min) )
			}else{
				return ( Min + Math.random()*(Max-Min) )
			}
		};
		 
		JSeasy.rotateWindows = function(opt){
			opt = opt||{};
			var isSet = false,
				winW = opt.winW||1136, winH = opt.winH||640;
			
			$('body').addClass('horizontalWindows');//水平窗口
			
			changeFunc();
			window.addEventListener('orientationchange', changeFunc);
			function changeFunc(event){
				//pc端
				if(window.orientation===undefined){
					$('.content').css({width:winW,height:winH});
					opt.callback&&opt.callback({winW:winW,winH:winH});
					return false
				}
				
				if ( window.orientation === 180 || window.orientation === 0 ) {//竖着的
					if(!isSet){
						isSet = true;
						winW = $('body').height();//window.innerHeight;
						$('.content').css({
							position:'absolute',
							left:'50%',
							top:'50%',
							transform:'rotate(90deg)',
							width:winW,
							height:winH,
							marginLeft:winW/-2,
							marginTop:winH/-2
						})
						opt.onRotate&&opt.onRotate({winW:winW,winH:winH});
						opt.callback&&opt.callback({winW:winW,winH:winH});
					}
					$('.rotateWindows_tips').css('display','none');
				}else if( window.orientation == 90 || window.orientation == -90 ) {
					$('.rotateWindows_tips').css('display','block');
				}
				
			}

		}
		
		
		
		
	pageAnimate[defaultConfig.pageAnimateType+'Init']();

	
	
	
	
	
	//设置翻页事件
	if(window.publicInfo.page.length>0){
		
		var mc = new Hammer(publicInfo.content[0]);
		mc.get('swipe').set({velocity:0,threshold:30,direction:30});//修改滑动的速度与方向
		
		//下一页
		mc.on("swipeup",function(){
			if(!publicInfo.pageStatus)return false;
			if(!publicInfo.pageCutover)return false;
			if(defaultConfig.pageSwipeB[publicInfo.indexPage]===false||defaultConfig.pageSwipeB[publicInfo.indexPage]<0)return false;
			J.pageFunc(publicInfo.indexPage+1);
		});
		//上一页
		mc.on("swipedown",function(){
			if(!publicInfo.pageStatus)return false;
			if(!publicInfo.pageCutover)return false;
			if(defaultConfig.pageSwipeB[publicInfo.indexPage]===false||defaultConfig.pageSwipeB[publicInfo.indexPage]>0)return false;
			J.pageFunc(publicInfo.indexPage-1);
		});
	}

	
	if(defaultConfig.setPrefix){
		/*
		获取浏览器前缀：
			文档模式为 [ie8- 和 [Opera12.16- prefix 将返回null；
			(Opera12.16+ 内核改为谷歌内核 将返回 webkit 前缀；
			不过这些浏览器没有必要获取浏览器前缀了 浏览器前缀主要用于css3 而这些老古董浏览器不支持大部分的css3；
		*/
		if(window.opera||!window.getComputedStyle)return null;
		var styles = window.getComputedStyle(document.documentElement, ''),
			pre = (Array.prototype.slice
			.call(styles)
			.join('') 
			.match(/-(moz|webkit|ms)-/) || (styles.OLink === '' && ['', 'o']))[1],
			dom = ('WebKit|Moz|MS|O').match(new RegExp('(' + pre + ')', 'i'))[1];
		window.publicInfo.prefix = {
			dom: dom,
			lowercase: pre,
			css: '-' + pre + '-',
			js: pre[0].toUpperCase() + pre.substr(1)
		};
	}
	
	//rem适配   DOMContentLoaded
	if(defaultConfig.isRem){
		(function(){
			var doc = document,
				win = window,
				docEl = doc.documentElement,
				resizeEvt = 'onorientationchange' in window ? 'orientationchange' : 'resize',
				bodyEle = document.getElementsByTagName('body')[0],
				recalc = function () {
					var winH = window.innerHeight,
						winW = window.innerWidth;
					if(640/1136<winW/winH){
						var sizeV = 100 * (winH / 1136);
					}else{
						var sizeV = 100 * (winW / 640);
					}
					sizeV = sizeV>100?100:sizeV;
					sizeV = Math.round(sizeV*10000)/10000;
					
					docEl.style.fontSize = sizeV + 'px';
					bodyEle.style.fontSize = '24px';
					window.publicInfo.htmlFontSize = sizeV;
				};
			recalc();
			
			//点击页面输入框 输入内容后 页面无法复位 上移了
			/*document.addEventListener('DOMContentLoaded', function(){
				$("body").height($(window).height());
			});*/
			
			if (!doc.addEventListener) return;
			win.addEventListener(resizeEvt, function(){
				if(resizeEvt==='orientationchange'){
					setTimeout(recalc,300);//orientationchange事件发生时 立马获取的window的宽高不正确 要延时获取才行
				}else{
					recalc();
				}
			}, false);
			
			/*window.addEventListener('orientationchange', function(event){
				setTimeout(recalc,300);
				if ( window.orientation == 180 || window.orientation==0 ) {
					//alert("竖屏");
				}
				if( window.orientation == 90 || window.orientation == -90 ) {
					//alert("横屏");
				}
			});*/

		}());
	};
	
	
	
	
	
	
	if(document.querySelector('#fx')){
		$('.fxBtn').on('click',function(){$('#fx').fadeIn(500);});
		$('#fx').on('click',function(){$(this).fadeOut(500);});
	}
	$('.close').on('click',function(e){
		$(this.parentNode).css('display','none');
	});
	
	
	


	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
})();













//var thisData = new Date();
//thisData.format("yyyy/MM/dd")
Date.prototype.format = function(format)   
{   
   var o = {   
     "M+" : this.getMonth()+1, //month   
     "d+" : this.getDate(),    //day   
     "h+" : this.getHours(),   //hour   
     "m+" : this.getMinutes(), //minute   
     "s+" : this.getSeconds(), //second   
     "q+" : Math.floor((this.getMonth()+3)/3), //quarter   
     "S" : this.getMilliseconds() //millisecond   
   }   
   if(/(y+)/.test(format)) format=format.replace(RegExp.$1,   
     (this.getFullYear()+"").substr(4 - RegExp.$1.length));   
   for(var k in o)if(new RegExp("("+ k +")").test(format))   
     format = format.replace(RegExp.$1,   
       RegExp.$1.length==1 ? o[k] :    
         ("00"+ o[k]).substr((""+ o[k]).length));   
   return format;   
};
 
/*var hasTouch=function(){
	var touchObj={};
	touchObj.isSupportTouch = "ontouchend" in document ? true : false;
	touchObj.isEvent=touchObj.isSupportTouch?'touchstart':'click';
	return touchObj.isEvent;
};*/