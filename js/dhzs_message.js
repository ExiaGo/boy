function message() {
	var mag = document.getElementById('message');  //获得输入框的元素
	var sd = document.getElementById('send');      //获得留言按键的元素
	var content = document.getElementById('messageBox');   //获得输出版面的元素
	var oAl = document.createElement('ol');       //创建出一个有序列表al
	content.appendChild(oAl);                      //在输出版面元素下插入一个有序列表
	sd.onclick = function(){          
	var box = mag.value;                           //输入框里的内容放进box中
	var aLi = document.createElement('li');        //再创建一个li元素用于包住后面要写的内容
	aLi.innerHTML = box + " <input class='del' type='button' value='删除' />" + "<br> ------------";    //li里的内容赋值
	var li_num = oAl.getElementsByTagName('li');    //这个是用来数创建出多少个li的
	if(li_num.length > 0){                          //当有新内容的时候
		oAl.insertBefore(aLi, li_num[0]);           //就用插入第一个li，成为新的li，就是说新留言会置顶
	}
	else{
		oAl.appendChild(aLi);
	}

	var del = document.getElementsByClassName('del');        //用于删除留言
		for(var i = 0; i < del.length; i++){
			del[i].onclick = function(){
				oAl.removeChild(this.parentNode);
			}
		}
	}
}
