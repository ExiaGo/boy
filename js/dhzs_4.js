function search() {
	alert("test");
}

function returnTop(){
	var sdelay = 0;
	window.scrollBy(0,-50);
	if(document.body.scrollTop > 0){
		sdelay = setTimeout("returnTop()", 50);
	}
}

function changeC(li){
	var a = document.getElementById("list_2").children;	
	for(var i = 0; i < a.length; i++){ 
		if(i == 1){                          //跳过四月番，防止背景颜色失效
			continue;
		}
		a[i].onmouseover = function(){
			this.style.backgroundColor = "red";
		}
		a[i].onmouseout = function(){
			this.style.backgroundColor = null;
		}
	}
} 

function osTime(){
	var now = new Date();
	var y = now.getFullYear();
	var m = now.getMonth() + 1;
	var d = now.getDate();
	var h = now.getHours();
	h = (h<10)?"0" + h : h;
	var min = now.getMinutes();
	min = (min<10)?"0" + min : min;
	var s = now.getSeconds();
	s = (s<10)?"0" + s : s; 
	document.all.clock.innerHTML = ""+ y + "年" + m + "月" + d + "日" + "" + h + ":" + min + ":" + s;
	var time = setTimeout("osTime()",1000);
}