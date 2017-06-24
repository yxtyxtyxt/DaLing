//注册选择项
$(function(){
	$(".t_right>.tip").click(function(){
		$(".t_right>.tip").hide();
	});
});
//选项卡(大家都说好)
$(function(){
	var gao = $(".index-good-tab>ul>li");
		gao.click(function(){
			gao.removeClass("current").eq($(this).index()).addClass("current");
		var index = $(this).index();
		var cache = $(".index-good-list>ul");
		cache.not(":eq("+index+")").removeClass("check");
		cache.eq(index).addClass("check");
	});
});
//手风琴
/*
$(function(){
	var head = $(".index-buy-list>dl>dd");
	head.mouseenter(function(){
		index = $(this).index();
		$(this).stop().animate({
			height:251 
		},500).siblings("dd").stop().animate({
			height:52
		},500);
		head.removeClass("ex-first").eq($(this).index()).addClass("first");
	})
	
	
});
*/


//返回顶部
$(function(){
	$(".s-function>.goTop").click(function(){
		$("html,body").animate({
			"scrollTop":0
		});
	});
});

//闪购倒计时/
$(function(){
	var times = $(".timeout>.timer");
	var time = setInterval(function(){
		var now = new Date();
		var later = new Date(2017,7,1,0,0,0);
		
		var cha = Math.floor((later - now) / 1000);
		var day = Math.floor(cha / 60 / 60 / 24);
		var hours = Math.floor((cha - day * 24 * 60 * 60) / 60 / 60);
		var minutes = Math.floor((cha - day * 24 * 60 * 60 - hours * 60 * 60)/ 60);
		var seconds = cha % 60;
		times.html("距闪购结束：" + day + "天" + hours + "小时" + minutes + "分钟" + seconds + "秒");			
	},1000)
})