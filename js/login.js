//注册与登录切换
$(function(){
	var a = $(".clicks>a");
	a.click(function(){
		a.removeClass("active").eq($(this).index()).addClass("active");
		a.not(":eq($(this).index()").addClass("");
	});
	a.eq(0).click(function(){
		$(".register-form").css("display","none");
		$(".login-form").css("display","block");		
	});
	a.eq(1).click(function(){
		$(".login-form").css("display","none");
		$(".register-form").css("display","block");			
	});
});

//获取验证码
$(function(){
	var code; //在全局 定义验证码  
	createCode();
	function createCode(){
	    code = "";
	    var codeLength = 4;//验证码的长度   
	    var checkCode = $(".unchanged");
	    var selectChar = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z');//所有候选组成验证码的字符，当然也可以用中文的   
	   
	    for (var i = 0; i < codeLength; i++) {
	        var charIndex = Math.floor(Math.random() * 36);
	        code += selectChar[charIndex];
	    }
	    if (checkCode){
	        checkCode.val(code);
	    }	  
	}
	$(".unchanged").click(function(){		
		createCode();
	});
});

//注册
$(function(){
	// 失焦时，检查手机号是否存在
	$(".mobile:eq(1)").blur(function(){
		var strUser = $(".mobile:eq(1)").val();
		var re = /^\d{11}$/g;
		if(re.test(strUser) == false || strUser == ""){
			$("em:eq(0)").html("手机号格式不正确").css("color","red");
			return 	false;		
		}else{
			$("em:eq(0)").html("手机号格式正确").css("color","green")			
		}		
		if( strUser != "" ){
			$("em:eq(0)").html("正在检查..").css("color","orange");
			var url = "js/login.php?action=1&phone="+strUser;
			$.get(url, function( str ){
				var obj = JSON.parse(str);
				if( obj.state == "success" ){
					$("em:eq(0)").html(obj.text).css("color","green");
				}else{
					$("em:eq(0)").html(obj.text).css("color","red");
				}
			});
		}else{
			$("em:eq(0)").html("请输入用户名").css("color","red");
		}					
	});
	$(".verify:eq(1)").blur(function(){
		var strMa = $(".verify:eq(1)").val();
		if( strMa == "" ){
			$("em:eq(1)").html("请输入验证码").css("color","red");
		}		
	});
	$(".password:eq(1)").blur(function(){
		var strPwd = $(".password:eq(0)").val();
		if( strPwd == "" ){
			$("em:eq(2)").html("请输入密码").css("color","red");
		}		
	});
	// 点击时，用户注册
	$(".submit-btn:eq(1)").click(function(){
		var strUser = $(".mobile:eq(1)").val();
		var strPwd = $(".password:eq(1)").val();
		//var strPwd2 = $("input:eq(2)").val();
		
		if( strUser == "" ){
			$("em:eq(0)").html("请输入用户名").css("color","red");
		}
		if( strPwd == "" ){
			$("em:eq(2)").html("请输入密码").css("color","red");
		}
		//if( strPwd!=strPwd2 ){
			//$("span:eq(2)").html("密码不相同").css("color","red");
		//}
		
		if( strUser != "" && strPwd!=""){
			var url = "js/login.php?action=2&phone="+strUser+"&password="+strPwd;
			console.log(strUser);
			console.log(strPwd);
			$.get(url, function(str){
				var obj = JSON.parse(str);
				if( obj.state == "success" ){
					$("em:eq(0)").html(obj.text).css("color","green");
					alert("注册成功");
				}else{
					$("em:eq(0)").html(obj.text).css("color","red");
				}
			});
		}		
	});
});

//登录
$(function(){
	// 失焦时，检查手机号是否存在
	$(".mobile:eq(0)").blur(function(){
		var strUser = $(".mobile:eq(0)").val();
		var re = /^\d{11}$/g;
		if(re.test(strUser) == false || strUser == ""){
			$("b:eq(0)").html("手机号格式不正确").css("color","red");
			return 	false;		
		}else{
			$("b:eq(0)").html("手机号格式正确").css("color","green")			
		}		
		if( strUser != "" ){
			$("b:eq(0)").html("正在检查..").css("color","orange");
			var url = "js/login.php?action=3&phone="+strUser;
			$.get(url, function( str ){
				var obj = JSON.parse(str);
				if( obj.state == "success" ){
					$("b:eq(0)").html(obj.text).css("color","green");
				}else{
					$("b:eq(0)").html(obj.text).css("color","red");
				}
			});
		}else{
			$("b:eq(0)").html("请输入用户名").css("color","red");
		}					
	});
	//验证码
	$(".verify:eq(0)").blur(function(){
		var strMa = $(".verify:eq(0)").val();
		if( strMa == "" ){
			$("b:eq(1)").html("请输入验证码").css("color","red");
		}		
	});
	$(".password:eq(0)").blur(function(){
		var strPwd = $(".password:eq(0)").val();
		if( strPwd == "" ){
			$("b:eq(2)").html("请输入密码").css("color","red");
		}		
	});
	
	// 点击时，用户登录
	$(".submit-btn:eq(0)").click(function(){
		var strUser = $(".mobile:eq(0)").val();
		var strPwd = $(".password:eq(0)").val();
		var strMa = $(".verify:eq(0)").val();
		
		if( strUser == "" ){
			$("b:eq(0)").html("请输入用户名").css("color","red");
		}
		if( strPwd == "" ){
			$("b:eq(2)").html("请输入密码").css("color","red");
		}
		if( strMa == "" ){
			$("b:eq(1)").html("请输入验证码").css("color","red");
		}
		//if( strPwd!=strPwd2 ){
			//$("span:eq(2)").html("密码不相同").css("color","red");
		//}
		
		if( strUser != "" && strPwd!=""){
			var url = "js/login.php?action=4&phone="+strUser+"&password="+strPwd;
			$.get(url, function(str){
				var obj = JSON.parse(str);
				if( obj.state == "success" ){
					$("b:eq(2)").html(obj.text).css("color","green");
				}else{
					$("b:eq(2)").html(obj.text).css("color","red");
				}
			});
		}		
	});
});



