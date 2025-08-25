
let btn = document.querySelector('.btn');
let inp = document.querySelector('input');
let ul = document.querySelector('ul');
let btn2 = document.querySelector('.btn2');

btn.addEventListener('click', () => {
    let li = document.createElement('li')
    li.textContent = inp.value
    ul.appendChild(li)
    inp.value = ''

let span = document.createElement('span')
span.textContent = " \u00d7";
li.appendChild(span)
})

ul.addEventListener('click', (e) => {
    if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
    }else if (e.target.tagName === 'LI') {
        e.target.classList.add('text');
    }
})


btn2.addEventListener('click', () => {
    document.body.classList.toggle('dark');
})