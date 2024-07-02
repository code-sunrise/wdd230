const modeButton = document.querySelector('#mode');
const body = document.querySelector('body');
const ulList = document.querySelectorAll('ul');
const liList = document.querySelectorAll('li');
const aList = document.querySelectorAll('a');
const pList = document.querySelectorAll('p');
const span = document.querySelector('span');
const label = document.querySelector('#label');
const mainNav = document.querySelectorAll('.navList');



modeButton.addEventListener("click", () => {
    if (modeButton.textContent.includes('🕶️')) {
        body.style.background = '#000';
        body.style.color = '#fff';
        ulList.forEach((ul) => {
            ul.style.background = '#2c085f';
        });
        liList.forEach((li) => {
            li.style.color = '#fff'
        });
        aList.forEach((a) => {
            a.style.color = '#fff'
        });
        pList.forEach((p) => {
            p.style.color = '#fff'
        })
        span.style.color = "#fff";
        mainNav.forEach((link) => {
            link.style.color = '#fff';
        });
        label.style.color = '#fff';
        modeButton.textContent = '🔆';
    }
    else {
        body.style.background = '#eee';
        body.style.color = '#000';
        ulList.forEach((ul) => {
            ul.style.background = '#fff';
        });
        liList.forEach((li) => {
            li.style.color = '#000'
        });
        aList.forEach((a) => {
            a.style.color = '#000'
        });
        pList.forEach((p) => {
            p.style.color = '#000'
        })
        span.style.color = "#000";
        mainNav.forEach((link) => {
            link.style.color = '#fff';
        });
        label.style.color = '#fff';
        modeButton.textContent = '🕶️';
    }
});