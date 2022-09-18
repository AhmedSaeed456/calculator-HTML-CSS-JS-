const display1 = document.querySelector('.display-1');
const display2 = document.querySelector('.display-2');
const numbers = document.querySelectorAll('.number');
const btns = document.querySelectorAll('.button');
const operations = document.querySelectorAll('.operation');
const equal = document.querySelector('.equal');
const clearAll = document.querySelector('.all-clear');
const container = document.querySelector('.container');
const clearLast = document.querySelector('.last-entity-clear');  
const section = document.querySelector('.section');  
const themeBtn = document.querySelector('.theme-btn');

let dis1Num = '';
let dis2Num = '';
let result = null;
let lastOperation = '';
let haveDot = false;
let isDark = false;

numbers.forEach((number) => {
   
    number.addEventListener('click', (e) => {
        if (e.target.innerText === '.' && !haveDot) {
            haveDot = true;
        }
        else if (e.target.innerText === '.' && haveDot) {
            return;
        }
        dis2Num += e.target.innerText;
        display2.innerText = dis2Num;
    })
})

operations.forEach((operation) => {
    operation.addEventListener('click', (e) => {
        if (!dis2Num) return;
        haveDot = false;
        const operationName = e.target.innerText;
        if (dis1Num && dis2Num && lastOperation) {
            mathOperation();
        }
        else {
            result = parseFloat(dis2Num);
        }
        clearVar(operationName);
        lastOperation = operationName;
        console.log(result);
    })
})
function clearVar(name='') {
    dis1Num = dis2Num + " " + name + " ";
    display1.innerText = dis1Num;
    display2.innerText = '';
    dis2Num = '';
   // display2.innerText = result;
}
function mathOperation() {
    if (lastOperation == 'x') {
        result = parseFloat(result) * parseFloat(dis2Num);
    }
    else if (lastOperation == '-') {
        result = parseFloat(result) - parseFloat(dis2Num);
    }
    else if (lastOperation == '+') {
        result = parseFloat(result) + parseFloat(dis2Num);
    }
    else if (lastOperation == '/') {
        result = parseFloat(result) / parseFloat(dis2Num);
    }
    else if (lastOperation == '%') {
        result = parseFloat(result) % parseFloat(dis2Num);
    }
   
}

equal.addEventListener('click', (e) => {
    console.log('this is equal');
    if (!dis1Num || !dis2Num) return;
    haveDot = false;
    mathOperation();
    clearVar();
    display2.innerText = result;
    dis2Num = result;
    dis1Num = '';
})

clearAll.addEventListener('click', (e) => {
    dis1Num = '';
    dis2Num = '';
    display1.innerText = '';
    display2.innerText = '';
    result = '';

})
clearLast.addEventListener('click', (e) => {
    dis2Num = '';
    display2.innerText = '';
})


themeBtn.addEventListener('click', (e) => {
    if (!isDark) {
        var index = 0, length = btns.length;
        for (; index < length; index++) {
            btns[index].style.backgroundColor = "#000";
            btns[index].style.color = "#fff";
            btns[index].style.boxShadow = "0px 0px 5px rgba(0,0,0,0)";
            btns[index].style.opacity = 0.9;
        }
        container.style.backgroundColor = "#000";

        section.style.backgroundColor = "#000";
        isDark = true;
    }
    else {
        var index = 0, length = btns.length;
        for (; index < length; index++) {
            btns[index].style.backgroundColor = "#e0e0e0";
            btns[index].style.color = "#000";
            btns[index].style.boxShadow = "5px 5px 11px #aaaaaa,-5px -5px 11px #ffffff";
            
        }
        container.style.backgroundColor = "#e0e0e0";

        section.style.backgroundColor = "#e0e0e0";
        isDark = false;
    }
})
