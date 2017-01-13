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

// function next(){
// 	var pic = document.getElementById("fuel_pic");
// 	var img = pic.children;
// 	var key = document.getElementById("next");

// 	for(var i = 0; i < img.length; i++){
// 			key.onclick = function(){
//     		document.write(img[3].innerHTML);
// 		}
// 	}

// }

function next(){
	// 获取images元素生成字符串数组，字符串数组不能进行push pop splice 等操作
	// 所以要将它的值重新存放进一个数组中，后面有定义
	var images = document.getElementById('fuel_pic').getElementsByTagName('img');
	var butLeft = document.getElementById('butLeft');
	var butRight = document.getElementById('butRight');
	//获取变量index 用来为后面设置层级用
	var index = 1000;
	// 获取一个空的数组，用来存放images里面的字符串元素
	var imagess = [];
	 
	// for循环用来给imagess数组赋值，并且改变数组中的元素的层级
	for (var i = 0; i < images.length; i++) {
	imagess[i] = images[i];
	var currentImage = imagess[i];
	// 当前图片的层级的设置，一轮for循环都为他们设置了初始的zIndex，图片越靠前，层级设置
	// 要求越高，所以用的是－i,这样图片会按顺序从第一张，第二张.....依次向下
	currentImage.style.zIndex = -i;
	}
	 
	// 设置计数器count，执行一次点击事件（向左或者向右）count加1
	var count = 0;
	// 向左的点击事件
	butLeft.onclick = function() {
	// 从数组头部弹出一个图片元素
	var showFirst = imagess.shift();
	//shift() 方法用于把数组的第一个元素从其中删除，并返回数组原来第一个元素的值
	// 给弹出的这个图片元素设置层级，即 －1000+count，
	// 让层级相较其他元素是最小的，数组头部弹出的图片会显示在最底层
	showFirst.style.zIndex = - index + count;
	// 层级改变完成后再将他push进数组的尾部
	imagess.push(showFirst);
	// 点击一次加1，不用考虑具体的值，只需要有点击事件加 1
	count++;
	}
	// 向右点击事件
	butRight.onclick = function() {
	// 从imagess的尾部弹出一个元素，并赋值给showFirst
	var showFirst = imagess.pop();
	// 设置showFirst的层级为最大，1000+count ，这样他会显示在第一层
	showFirst.style.zIndex = index + count;
	// 层级改变之后将他在插入数组imagess的头部
	imagess.unshift(showFirst);
	// 点击一次加1
	count++;
	}
}


