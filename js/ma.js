//今日闪购
$.get("json/ma.json",function(data){	
	var html = "";
	for(var i = 0;i < data.length;i++){
		html = '<ul><li><a class="index-sale-img" href="###"><div class="cover-img"><img src="img/xin/' + data[i].img + '"></div></a><div class="data"><div class="timeout"><span class="timer"></span></div><p class="title"><span class="discount">' + data[i].zhe + '</span><a href="###">' + data[i].biao + '</a></p><p class="intro">' + data[i].intro + '</p><p class="price"><span class="redel">' + data[i].redel + '</span><span class="now-price">' + data[i].now + '</span><span class="old-price">' + data[i].old + '</span></p><div class="function"><a class="btn-nostock" href="javascript:;">' + data[i].a + '</a><span class="info">' + data[i].info + '</span></div></div></li></ul>';
	$(".index-sale-box>.s_left").append(html);
	
	}
});

//闪购预告
$.get("json/yugao.json",function(data){
	var html = "";
	for(var i = 0; i < data.length;i++){
		html = '<li class="clear"><a href="###"><div class="cover-img"><img src="img/xin/' + data[i].img + '"/></div></a><div class="data"><p class="title"><span class="discount">' + data[i].discount + '</span><a href="###" class="jie">' + data[i].jie + '</a></p><p class="intro">' + data[i].intro + '</p><div class="function"><a href="###"><span class="col"></span>' + data[i].col + '</a><button class="btn-cart">' + data[i].cart + '</button></div></div></li>';
		$(".s_right>.yu").append(html);
	}	
});





