const library = {
  name: "City Library",
  books: [],

  addBook(title, author, isbn) {
    const book = { title, author, isbn };
    this.books.push(book);
  },

  findBookByTitle(title) {
    return this.books.find(book => book.title === title) || null;
  },

  listAllBooks() {
    this.books.forEach(book => console.log(book.title));
  }
};

const universityLibrary = Object.create(library);
universityLibrary.courses = [];

universityLibrary.addCourseBook = function (courseName, title, author, isbn) {
  this.courses.push(courseName);
  this.addBook(title, author, isbn);
};

universityLibrary.addCourseBook("CMPS2212", "JavaScript", "Bill", "567");
universityLibrary.addCourseBook("MATH1532", "Introduction to Algebra", "Sam", "890");
universityLibrary.addCourseBook("MATH6767", "Introduction to Trigonometry", "Patrick", "787");

universityLibrary.listAllBooks();
