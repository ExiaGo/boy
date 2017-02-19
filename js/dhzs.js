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

function changeC(li){            //这个li实际上没有用，只是用于表示是li元素
	var a = document.getElementById("list_2").children;//这里的a实际上就是li元素
	for(var i = 0; i < a.length; i++){
		a[i].onmouseover = function(){            //可以看到每一个li元素当有鼠标在上面的时候
			this.style.backgroundColor = "red";   //这个this其实就是li元素，当然这里是用a[i]
		}                                         //来表示了。
		a[i].onmouseout = function(){             //于是实际上要想知道this是表示什么，其实this
			this.style.backgroundColor = null;    //就是代表使用函数的那个对象，这个例子的
		}                                         //this就是a[i]，实际上是li元素
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

function goto(){
	window.open('动画之沙 Message.html', '_blank');
}