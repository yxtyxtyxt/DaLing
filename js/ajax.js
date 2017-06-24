function ajax(url,fnWin,fnFaild) {
	//1、创建ajax对象
	var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
	//2、连接服务器
	xhr.open("GET", url, true);
	//3、给服务器发送请求
	xhr.send();
	//4、接收返回的数据
	xhr.onreadystatechange = function() {
		if(xhr.readyState == 4) { //与服务器建立连接成功了
			if(xhr.status == 200) { //向服务器请求的文件被找到了
				fnWin && fnWin(xhr.responseText);
			} else {
				fnFaild && fnFaild();
			}
		}
	}
}