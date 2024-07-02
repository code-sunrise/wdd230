const modeButton = document.querySelector('#mode');
const body = document.querySelector('body');
var ulList = document.querySelectorAll('ul');
var liList = document.querySelectorAll('li');
var aList = document.querySelectorAll('a');
var pList = document.querySelectorAll('p');
var span = document.querySelector('span');



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
        modeButton.textContent = '🕶️';
    }
});