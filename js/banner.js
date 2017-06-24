function animamove(){
	this.oBanner = document.getElementsByClassName("flexslider");
	this.ull = this.oBanner[0].getElementsByTagName("ul");
	this.oimg = this.ull[0].getElementsByTagName("li");
	this.oll = document.getElementsByTagName("ol");
	this.ospan = this.oll[0].getElementsByTagName("li");
	var index=0;
	var zindex=1;
	var timer = setInterval(function(){
		if(index >= oimg.length-1){
			index=0;
		}else{
			index++;
		}
		cut();
	},3000)
	oBanner.onmouseover=function(){
		clearInterval(timer);
	}
	oBanner.onmouseout=function(){
		timer = setInterval(function(){
			if(index >= oimg.length-1){
			index = 0;
		}else{
			index++;
		}
			cut();
		},3000)
	}

	for(var i = 0;i < ospan.length;i++){
		ospan[i].index=i;
		ospan[i].onmouseover=function(){
			index = this.index;
			cut();
		}
	}

	function cut(){		
		if(zindex > 4){
			for(var i = 0;i < oimg.length;i++){
				oimg[i].style.zIndex=0;				
			}
			zindex=1;
		}
		for(var i = 0;i <ospan.length;i++){
			ospan[i].className ="ab";
		}

		oimg[index].style.zIndex = zindex++;
		oimg[index].style.opacity=0;
		ospan[index].className='see';

		startMove(oimg[index],{opacity:100})
		
	}
}