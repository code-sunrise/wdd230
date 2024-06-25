// declare variables

const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

//event listener. Arrow function => 
//what is listening?
//button?
button.addEventListener('click', () => {
    if (input.value != '') {
        const li = document.createElement('li');
        const closeButton = document.createElement('button');
        li.innerText = input.value;
        closeButton.textContent = '❌';
        li.append(closeButton); //?? is this right?
        list.append(li);
        closeButton.addEventListener('click', () => { list.removeChild(li);});
        input.value = '';
        input.focus();
    }
})