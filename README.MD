## 介绍

H5的原生拖拽事件小试，只是尝试了拖拽元素到指定位置，不涉及放置目标和数据的传递

## 关于使用
	//引用js文件
    <script src="./dragElement.js"></script>
    //获取要拖拽元素
	var dragDiv = document.querySelector(Element);
	//通过构造函数创建一个实例
    var drag = new dragElement(dragDiv);
	//初始化实例
    drag.init();
## 关于bug

> 我不知道，就是提供个拖拽元素发生位移的思路，能由此实现更多好玩的东西

## 演示地址

[https://big-stiff.github.io/dragEvent-H5/](https://big-stiff.github.io/dragEvent-H5/)
