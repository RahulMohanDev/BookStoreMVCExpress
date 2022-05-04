// this is the database
const bookList = [];
// make a new book list 
// {
//  horror:[{author,title},{author,title}],
//  crime:[{},{}],
// }
// console.log("module code init");

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  // form use dropdown for category
  // add(cat..)
  add() {
    // bookList[cat..].push(...)
    bookList.push({ title: this.title, author: this.author });
  }

  static getBookList() {
    // 
    return bookList;
  }
}

module.exports = Book;
