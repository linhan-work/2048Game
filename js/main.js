//初始化网格id
function initId() {
    let items = document.getElementsByClassName('grid-row');
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
    let items = document.getElementsByClassName('grid-cell');
    let itemsNUll = [];
    // console.log(items)
    for (const key in items) {
        if (items.hasOwnProperty(key)) {
            const element = items[key];
            if (items[key].innerHTML == "")
                itemsNUll.push(items[key]);
        }
    }
    let rand = Math.floor(Math.random() * itemsNUll.length);
    itemsNUll[rand].innerHTML = '2';
    let name = itemsNUll[rand].getAttribute('class') + " " + "title"
    itemsNUll[rand].setAttribute('class', name);
}
function randNum() {
    return Math.floor(Math.random() * 4);
}
function $(id) {
    return document.getElementById(id);
}

function test() {
    randOne();
    randOne();
}
test();
