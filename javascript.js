let btns = document.querySelectorAll('button');
let mask = document.querySelector('.mask');

for (let i = 0; i < btns.length; i++) {
    btns[i].onclick = function () {
        mask.style.display = 'flex';
    }
}

mask.onclick = function () {
    mask.style.display = 'none';
}
