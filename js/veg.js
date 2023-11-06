function capitalize(text) { 
    return text[0].toUpperCase() + text.slice(1);
}

function formatText(text) {
    return `😁${text}👌`;
}

function dashText(text) {
    return '-'.repeat(text.length);
}

function formatList(selector, textFromatFunc) {
    const parentDOM = document.querySelector(selector);
    // console.log(parentDOM);
    const allLiDOM = parentDOM.querySelectorAll('li');
    // console.log(allLiDOM);
    for (let i = 0; i < allLiDOM.length; i++) {
        const liDOM = allLiDOM[i];
        // console.log(liDOM);
        liDOM.innerText = textFromatFunc(liDOM.innerText);
    }
}

formatList('.veg', capitalize);
formatList('.fun', formatText);
formatList('.dash', dashText);

// console.log('veikia');
// const vegDOM = document.querySelector('.veg');
// const vegLiDOM = vegDOM.querySelectorAll('li');

// for (let i = 0; i < vegLiDOM.length; i++) {
//     const liDOM = vegLiDOM[i];
//     // console.log(liDOM.textContent);
//     // console.log(`"${liDOM.innerText}"`);
//     // console.log(`"${liDOM.textContent}"`);
//     // const text = liDOM.textContent.trim();
//     // const text = liDOM.innerText;
//     liDOM.innerText = capitalize(liDOM.innerText);
// }