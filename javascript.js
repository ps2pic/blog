let btns = document.querySelectorAll('button');
let mask = document.querySelector('.mask');
let supers = document.querySelectorAll('.super');

supers[0].style.color = 'red';
supers[1].style.color = 'orangered';
supers[2].style.color = 'orangered';


for (let i = 0; i < btns.length; i++) {
    btns[i].onclick = function () {
        mask.style.display = 'flex';
    }
}

mask.onclick = function () {
    mask.style.display = 'none';
}
