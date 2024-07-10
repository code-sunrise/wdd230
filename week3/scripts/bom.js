// declare variables -- previous assignment

const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// declare the array

let chaptersArray = getChaptersArray() || [];
//set the variable for the local storage?
let stringStorage = String(window.localStorage.getItem('myBOMList'))

//function

chaptersArray.forEach(chapter => {
    displayList(chapter)
});


//event listener. Arrow function => previous assignment
/*button.addEventListener('click', () => {
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
})*/

//new button event listener

button.addEventListener('click', () =>{
    if (input.value != '') {
        console.log('first event listener')
        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterArray();
        input.value = '';
        input.focus();}
    })

//function that creates and deletes close button

function displayList(item) {
    console.log('displays list')
    const li = document.createElement('li');
    const closeButton = document.createElement('button');
    li.textContent = item;
    closeButton.textContent = '❌';
    closeButton.classList.add('delete');
    li.append(closeButton);
    list.append(li);
    closeButton.addEventListener('click', function () {
        console.log('second event listener')
        list.removeChild(li);
        deleteChapter(li.textContent);
        input.focus();
    })
}

//getter and setter? like c#?

function setChapterArray() {
    console.log('set chapters')
    localStorage.setItem('myBOMList', JSON.stringify(chaptersArray))
}

function getChaptersArray() {
    console.log('get chapters')
    return JSON.parse(localStorage.getItem('myBOMList'))
}

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1)
    chaptersArray = chaptersArray.filter((item) => item !==chapter);
    setChapterArray;
}