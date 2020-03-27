let btns = document.querySelectorAll('button');
let mask = document.querySelector('.mask');
let symbol = document.querySelector('.right');
let menu = document.querySelector('.menu');
let alinks = document.querySelectorAll('.menu a');

let xL = menu.offsetLeft;
console.log(xL);


for (let i = 0; i < btns.length; i++) {
    btns[i].onclick = function () {
        mask.style.display = 'flex';
    }
}

mask.onclick = function () {
    mask.style.display = 'none';
}

symbol.onclick = function () {
    if (menu.style.display == 'none') {
        menu.style.display = 'block';
    } else {
        menu.style.display = 'none';
    }
}

for (let i = 0; i < alinks.length; i++) {
    alinks[i].onclick = function () {
        menu.style.display = 'none';
    }
}
