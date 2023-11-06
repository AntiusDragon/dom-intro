const hi = 'Labas rytas, Lietuva! 👌';
console.log(hi);

const titleDOM = document.getElementById('title');
console.log(titleDOM);


titleDOM.innerText = hi;

titleDOM.classList.add('red');

for (let i = 0; i < titleDOM.classList.length; i++) {
    const c = titleDOM.classList[i];
    titleDOM.classList.remove(c)
}

const selectionTitle = 'About you'; 
// const selectionTitleDOM = document.querySelector('.section-title');
// const selectionTitleDOM = document.querySelector('h2');
const selectionTitleDOM = document.querySelector('h2.section-title > span');
console.log(selectionTitleDOM);

// selectionTitleDOM.innerText = selectionTitle;
selectionTitleDOM.textContent = selectionTitle;


