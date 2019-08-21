/*
 *tkk 2019-08-21 
 *
 */
function dragElement(ele) {
    this.ele = ele;
}
dragElement.prototype = {

    constructor: dragElement,

    init: function() {
        this.ele.setAttribute('draggable', true);
        this.ele.addEventListener('dragstart', function(e) {
            //console.log(this);
            this.startclientLeft = e.clientX;
            this.startclientTop = e.clientY;
            this.eleLeft = GetElementPagePos(this).left;
            this.eleTop = GetElementPagePos(this).top;


        }, false);
        this.ele.addEventListener('dragend', function(e) {
            //console.log(e)
            this.endClientLeft = e.clientX;
            this.endClientTop = e.clientY;
            this.style.position = 'absolute';
            this.style.left = this.eleLeft + this.endClientLeft - this.startclientLeft + 'px';
            this.style.top = this.eleTop + this.endClientTop - this.startclientTop + 'px';
        })
    }
}



//7、获取元素在网页的绝对位置 返回left  top值
function GetElementPagePos(Ele) {
    if (!Ele) { return }
    var left = Ele.offsetLeft;
    var top = Ele.offsetTop;
    var parent = Ele.offsetParent;
    while (parent != null) {
        left += parent.offsetLeft;
        top += parent.offsetTop;
        parent = parent.offsetParent;
    }
    return {
        left: left,
        top: top
    }
}