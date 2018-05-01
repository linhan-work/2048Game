## 第一种方法
```
let name = itemsNUll[rand].getAttribute('class') + " " + "title"
itemsNUll[rand].setAttribute('class', name);
```
这种方法思路很简单，最容易想到，先获取元素原来的class，然后拼接需要添加的class，但是感觉好傻，一定有更好的办法

## 第二种方法
```
let name = itemsNUll[rand].className.concat(" title");  //title前一定加个空格
itemsNUll[rand].setAttribute('class', name);
```
好像是有了那么一点点改进，不需要手动拼接了，能不能再简单一点呢

## 第三种方法

