//商品详情
$.get("json/detail.json",function(data){
	for(var i = 0;i < data.length;i++){
	/* 	var imgg = '<img class="goods-big-img" src="img/detail/' + data[i].img + '"/>';
			$(".goods-big").append(imgg);
		var share = '<span class="icon-share"></span>' + data[i].share;
	 	$(".share>.ff").append(share);*/
	 	var coll = '<a class="" href="javascript:;"><span class="ico-collect"></span>' + data[i].collect;
		$(".pf40").append(coll);
		var h1 = '<h1 class="clearfix">' + data[i].h1 + '</h1>';
		$(".goods-data>.boss").append(h1);
		var price = '<dt>' + data[i].goods + '</dt><dd><div class="clearfix"><div class="flfl">' + data[i].f1 + '<span class="f30 bold">' + data[i].f30 + '</span></div><p>' + data[i].p + '<span class="jian">' + data[i].jia + '</span><span class="price-off">' + data[i].off + '</span></p></dd>';
		$(".goods-price").append(price);
		var count = '<ul><li>' + data[i].coll + '<span>' + data[i].count + '</span></li></ul>';
		$(".goods-function").append(count);
		var dis = '<dt>' + data[i].num + '</dt><dd><div class="number"><a class="btn-reduce" href="javascript:;"><span class="ico-u-5"></span></a><a class="btn-add" href="javascript:;"><span class="ico-d-5"></span></a><input class="number-input" value="1" type="text"></div></dd>';
		$(".goods-number").append(dis);
		var btn = '<a href="###"><span class="btn-buy">' + data[i].buy + '</span></a><button class="da-cart-add">' + data[i].cart + '</button>';
		$(".goods-btn").append(btn);
		var bao = '<span class="mr20"><span class="ico-mark-1"></span>' + data[i].mark1 + '</span><span class="mr20"><span class="ico-mark-2"></span>' + data[i].mark2 + '</span><span class="mr20"><span class="ico-mark-3"></span>' + data[i].mark3 + '</span>';
		$(".goods-tips").append(bao);
		var tu = '<dl><dt>' + data[i].zi + '</dt><dd><img src="img/detail/' + data[i].img1 + '"/></dd></dl>'; 
		$(".tagg").append(tu);
		var tu1 = '<img src="img/detail/' + data[i].img2 + '"/>'; 
		$(".tagg").append(tu1);
		var tu2 = '<img src="img/detail/' + data[i].img3 + '"/>'; 
		$(".tagg").append(tu2);
		var tu3 = '<img src="img/detail/' + data[i].img4 + '"/>'; 
		$(".tagg").append(tu3);
		var tu4 = '<img src="img/detail/' + data[i].img5 + '"/>'; 
		$(".tagg").append(tu4);
		var tu5 = '<img src="img/detail/' + data[i].img6 + '"/>'; 
		$(".tagg").append(tu5);
		var tu6 = '<img src="img/detail/' + data[i].img7 + '"/>'; 
		$(".tagg").append(tu6);
		var tu7 = '<img src="img/detail/' + data[i].img8 + '"/>'; 
		$(".tagg").append(tu7);
		var tu8 = '<img src="img/detail/' + data[i].img9 + '"/>'; 
		$(".tagg").append(tu8);
		var tu9 = '<img src="img/detail/' + data[i].img1 + '"/>'; 
		$(".tagg").append(tu9);
	}	
});

//放大镜
		window.onload = function(){
			var oDiv = document.getElementsByClassName("big")[0];
			var oMark = document.getElementsByClassName("mark")[0];
			var oFloat = document.getElementsByClassName('float_layer')[0];
			var oBig = document.getElementsByClassName('small')[0];
			var oSmall = document.getElementsByClassName('goods-big')[0];
			var oImg = oBig.getElementsByTagName('img')[0];

			//给遮罩层添加鼠标移入事件
			oMark.onmouseover = function(){
				oFloat.style.display = 'block';  //让小块显示出来
				oBig.style.display = 'block';   //同时让大图显示出来
			};
			//给遮罩层添加鼠标移出事件
			oMark.onmouseout = function(){
				oFloat.style.display = 'none';  //让小块隐藏
				oBig.style.display = 'none';   //同时让大图隐藏
			};
			
			//给遮罩层添加鼠标移动事件
			oMark.onmousemove = function(evt){
				var e = evt || window.event;
				var scroll = document.body.scrollTop || document.documentElement.scrollTop;
				//鼠标页面位置-最外面div到页面左边的距离 - 小图到oDiv的距离 - oFloat的宽度/2 (使鼠标到oFloat的中心位置);
				//document.title = e.clientY;
				var l = e.clientX  - oDiv.offsetLeft - oSmall.offsetLeft - oFloat.offsetWidth/2 ;
				var t = e.clientY - oDiv.offsetTop - oSmall.offsetTop - oFloat.offsetHeight/2 + scroll;
								
				//限制边界
				if(l < 0){
					l = 0;
				}else if(l > oMark.offsetWidth - oFloat.offsetWidth){
					l = oMark.offsetWidth - oFloat.offsetWidth;
				}
				
				if(t < 0){
					t = 0;
				}else if( t > oMark.offsetHeight - oFloat.offsetHeight){
					t = oMark.offsetHeight - oFloat.offsetHeight;
				}
				
				oFloat.style.left = l + 'px';
				oFloat.style.top = t + 'px';
				
				//小块活动的距离（移动比例）（大图显示比例）
				var percentX = l / (oMark.offsetWidth - oFloat.offsetWidth);
				var percentY = t / (oMark.offsetHeight - oFloat.offsetHeight);
				 
				//大图的left值 = 移动比例 * （大图的宽度 - 大图所在Div的宽度）（大图所能移动的距离）
				oImg.style.left = -percentX * (oImg.offsetWidth - oBig.offsetWidth) + 'px';
				oImg.style.top = -percentY * (oImg.offsetHeight - oBig.offsetHeight) + 'px';
				
				
			};
		};
				