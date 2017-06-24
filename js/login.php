<?php
//mysql账户   声明变量
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "login";
//mysqli()  php提供函数  连接数据库
$conn = new mysqli($servername, $username, $password, $dbname);

//解决中文乱码问题
//设置连接字符集编码
$sql="SET CHARACTER SET 'UTF8'";
$conn->query($sql);
//告诉服务器将来从这个客户端传来的信息采用字符集utf8
$sql="SET NAMES 'UTF8'";
$conn->query($sql);

//获取IP地址
$ip = $_SERVER["REMOTE_ADDR"];

//获取参数
//isset()在php中用来检测变量是否设置，该函数返回的是true/false
$action = isset($_GET["action"]) ? $_GET["action"] : "";
$phone = isset($_GET["phone"]) ? $_GET["phone"] : "";
$password = isset($_GET["password"]) ? $_GET["password"] : "";

//判断函数   该手机号是否存在
function isHasUser(){
	global $conn,$phone;     //global 全局变量
	 //从数据库中查询
	$sql = "select count(*) as num from userlist where phone='".$phone."'";
	$result = $conn->query($sql);  //结果集,二维数组
	$row = $result->fetch_assoc();  //从结果集，查询一行
	if( $row["num"] == 0){
		return false;
	}else{
		return true;
	}
}
//判断密码
function isPwd(){
	global $conn,$phone,$password;
	$sql = "select * from userlist WHERE (phone='".$phone."') AND (password='".$password."')";
	$result = $conn->query($sql);
	//有数据表示密码正确
	if($row = $result->fetch_assoc()){
		return true;
	}else{
		return false;
	}
}
//登陆处理
switch( $action ){
	case "3":
	if(isHasUser() == true){
		echo '{"state":"success","text":"账号正确"}';
	}else{
		echo '{"state":"error","text":"该用户不存在"}';
	}
	    break;
	 //密码
	 case "4":
	if ( isPwd() === true ){
			
			echo '{"state":"success", "text":"密码正确"}';
	}else{		
			echo '{"state":"error", "text":"密码不正确"}';
		}		
		break;
}

//注册处理
switch( $action ){
	case "1":
	if(isHasUser() == true){
		echo '{"state":"error","text":"该手机号已被占用"}';
	}else{
		echo '{"state":"success","text":"该手机号可以使用"}';
	}
	    break;
	case "2":
		// 注册用户		
		if ( isHasUser() === true ){
			echo '{"state":"error", "text":"该手机号已被占用"}';
		}else{
			$userid = register();
			echo '{"state":"success", "text":"注册成功", "userid":"'.$userid.'"}';
		}		
		break;
}

function register(){
	global $conn, $phone, $password, $ip;
	//插入数据
	$sql="insert into userlist (phone, password, ip, addTime) values ('".$phone."', '".$password."', '".$ip."', now())";
	$conn->query($sql);	//执行sql语句	
	return mysqli_insert_id($conn);//取出插入的数据的编号
}

?>