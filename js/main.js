let flag = 0;
let items = document.getElementsByClassName('grid-row');
//初始化网格id
function initId() {

    for (let i = 0; i < items.length; i++) {
        let cells = items[i].children;
        for (let j = 0; j < cells.length; j++) {
            let id = "grid-cell-" + i + "-" + j;
            cells[j].setAttribute("id", id);
        }
    }
}


initId()

//随机生成一个块
function randOne() {
    let cells = document.getElementsByClassName('grid-cell');
    let cellsNUll = [];
    // console.log(items)
    for (const key in cells) {
        if (cells.hasOwnProperty(key)) {
            const element = cells[key];
            if (cells[key].innerHTML == "")
                cellsNUll.push(cells[key]);
        }
    }
    let rand = Math.floor(Math.random() * cellsNUll.length);
    
    if (cellsNUll[rand]) {
        cellsNUll[rand].innerHTML = '2';
        cellsNUll[rand].classList.add('title');
    } else {
        //TODO游戏结束

    } 
 }

function $(id) {
    return document.getElementById(id);
}

//根据keyCode返回相应状态
function keyTo(key) {
    switch (key) {
        case 38:
        case 87:
            return "up";
        case 40:
        case 83:
            return "down";
        case 37:
        case 65:
            return "left";
        case 39:
        case 68:
            return "right";
    }
}

function onKey() {
    document.onkeydown = function () {
        // console.log(event.keyCode)
        key = keyTo(event.keyCode);
        switch (key) {
            case "up":
                upTo();
                break;
            case "down":

                break;
            case "left":

                break;

            case "right":

                break;
        }
    } 
}
//触发方向上键与w键
function upTo() {
    for (let i = 1; i < items.length; i++) {
        let nowRow = items[i].children;
        for (let j = 0; j < nowRow.length; j++) {
            for (let k = 0; k < i; k++) {
                let beforeRow = items[k].children;
                let status = isMerge(nowRow[j], beforeRow[j]);
                switch (status) {
                    case 0:
                        break;
                    case 1:
                        temp(nowRow[j], beforeRow[j]);
                        break;
                    case 2:
                        merge(nowRow[j], beforeRow[j]);
                        break;

                }
            }
            
        }
        
    }
    randOne();    
}
//触发方向下键与s键
function downTo() {
    for (let i = items.length - 1; i >= 0; i++) {
        let beforeRow = items[i - 1]
    }
}
//判断函数
//0:不进行任何操作
//1:交换
//2:合并
function isMerge(elNow, elBefore) {

    if (elNow.innerHTML == "") {
        return 0;
    } else  {
        if (elBefore.innerHTML == "") {
            return 1;
        } else {
            if (elNow.innerHTML == elBefore.innerHTML) {
                return 2;
            } else {
                return 0;
            }
        }
    }
}
//合并网格
function merge(elNow, elBefore) {
    let num = parseInt(elBefore.innerHTML) * 2;
    elBefore.innerHTML = num;
    elNow.classList.remove('title');
    elNow.innerHTML = "";
}
//交换网格
function temp(elNow, elBefore) {
    elBefore.innerHTML = elNow.innerHTML;
    elNow.innerHTML = "";
    elNow.classList.remove('title');
    elBefore.classList.add('title');

}
function test() {
    randOne();
    randOne();
    onKey()
}
test();
