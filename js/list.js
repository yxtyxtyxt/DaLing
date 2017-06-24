//列表导航选项
$.get("json/snav.json",function(data){
	for(var i = 0;i < data.length;i++){
		var html = '<a href="javascript:;" class="item"><span class="text">' + data[i].f1 + '</span></a>';
		$(".single-select>.select-inner").append(html);
		var htm = '<a href="javascript:;" class="item"><span class="text">' + data[i].f2 + '</span></a>';
		$(".ss>.s1").append(htm);
		var ht = '<a href="javascript:;" class="item"><span class="text">' + data[i].f3 + '</span></a>';
		$(".s3>.s2").append(ht);
	}	
});

//商品列表
$.get("json/list.json",function(str){
	var html = "";
	for(var i = 0; i < str.length;i++){
		html = '<li><a class="search-img" href="detail.html"><div class="search-img"><img src="img/list/' + str[i].img + '"/></div></a><div class="data"><p class="price"><span class="rede1">' + str[i].rede1 + '</span><span class="now-price">' + str[i].now + '</span><span class="old-price">' + str[i].old + '</span></p><p class="title"><span class="discount">' + str[i].discount + '</span><a href="###" class="biao">' + str[i].biao + '</a></p><p class="function">' + str[i].function + '<span class="line">' + str[i].line + '</span>' + str[i].ping + '</p></div></li>';
	$(".searchlist>ul").append(html);	
	}	
});
