const books = document.querySelector('.books');

const myLibrary = [];

function createBookItem (book,index) {
    const bookItem = document.createElement('div')
    bookItem.setAttribute('id', index)
    bookItem.setAttribute('key', index)
    bookItem.setAttribute('class', 'card book')
}

function renderBooks () {
    myLibrary.map((book, index) => { 
        createBookItem(book,index)
    })
}