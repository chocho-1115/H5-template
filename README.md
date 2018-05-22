
### H5-template

## 页面基本结构
~~~ html
<div class="content" id="content">
    <div class="page page0">
        <div class="nr">
			<!--loading-->
            <p class="abso load_num">LOADING<span id="set_load_num" >0</span></p>
        </div>
    </div>
    <div class="page page1">
    	<div class="nr">
        	<!--第一页-->
        </div>
    </div>
    <div class="page page2">
    	<div class="nr">
			<!--第二页-->
        </div>
    </div>
    <div class="page page3">
    	<div class="nr">
        	<!--第三页-->
        </div>
    </div>
</div>
~~~

## 设置最小适配高度  翻页动画  和是否滑动翻页
~~~ js
H5Init({
	pageAnimateType: 'fade',//fade 渐隐渐现翻页   translate 位移翻页 threeD  三d翻页
	viewportHeight: 1008,//1008为 页面内容最小高度；默认按640的宽度适配  但是在如ip4屏幕按相对较短的手机下  底部内容显示不全  需要根据页面内容的高度 来调整适配宽度
	//scale : window.innerHeight<1008?window.innerHeight/1008:1,  //此参数 作废

	//滑动翻页控制
	// 0 代表可上翻  也可以下翻   1 代表只可下翻    -1代表只可以上翻   false 代表不可以滑动翻页
	pageSwipeB : {
		'0':false,//
		'1':false,
		'2':false,
		'3':false
	},
});
~~~


