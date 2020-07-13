// JavaScript Document
//创建一个可以执行简单动画的函数
//参数1：要执行动画的对象（obj）;参数2：要执行动画的样式,可以是left,right,top等（attr）；参数3：执行动画的目标位置（target）；参数4：表示移动的速度正数向右移动，负数向左移动（speed）；参数5：回调函数（callback），这个函数将会在动画执行完毕以后执行
function move(obj,attr,target,speed,callback)
{
	
		//在开启一个定时器之前，先关闭上一个元素的定时器
		clearInterval(obj.timer);
		//获取元素目前的位置
		var current=parseInt(getStyle(obj,attr));
		//判断速度的正负
		//如果从0向800移动，则speed为正，如果从800向0移动，则speed为负
		if(current>target)
		{
			speed=-speed;
		}
		//开启一个定时器来实现动画效果
		//向执行动画的对象中添加一个timer属性值，用来保存它自己的定时器标识
		 obj.timer=setInterval(function(){
			
			//获取div的原来的值
			var oldvalue=parseInt(getStyle(obj,attr));
			//在旧值的基础上增加
			var newvalue=oldvalue+speed;
			//判读newvalue是否大于800
			if(speed<0 && newvalue<target || speed>0 && newvalue>target)
			{
				newvalue=target;
			}
			//将新值赋给box
			obj.style[attr]=newvalue+"px";
			//当元素移动到800px时，则停止执行动画
			if(newvalue==target)
			{
				//达到目标关闭定时器
			clearInterval(obj.timer);
			//动画执行完毕，调用回调函数
			callback && callback();
			}},30);	
}
//定义一个函数用来获取指定元素的当前样式，参数，obj代表需获取样式的元素，name代表需获取的样式名
function getStyle(obj,name)
{
	if(window.getComputedStyle)
	{
		//正常浏览器有getComputedStyle()方法
	return getComputedStyle(obj,null)[name];
	}
	else
	{
		//IE8的浏览器没有getComputedStyle()方法
	return obj.currentStyle[name];
	}
}
