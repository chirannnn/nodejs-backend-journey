const express = require("express");
const app = express();

// Middleware
app.use(express.json());

let books = [
  {
    id: 1,
    title: "Book 1",
  },
  {
    id: 2,
    title: "Book 2",
  },
  {
    id: 3,
    title: "Book 3",
  },
];

// intro route
app.get("/", (req, res) => {
  res.json({
    title: "Welcome to our Bookstore API",
  });
});

// get all books
app.get("/books", (req, res) => {
  res.json(books);
});

// get a single book
app.get("/books/:id", (req, res) => {
  const bookId = parseInt(req.params.id);

  const singleBook = books.find((book) => book.id === bookId);

  if (singleBook) {
    res.status(200).json(singleBook);
  } else {
    res.status(404).json({
      message: "Book not found!! Please try with a diff Book ID",
    });
  }
});

// add a new book
app.post("/add-book", (req, res) => {
  const newBook = {
    id: Math.floor(Math.random() * 1000),
    title: `Book ${books.length + 1}`,
  };

  books.push(newBook);
  res.status(200).json({
    data: newBook,
    message: "New book is added successfully",
  });
});

// update a book
app.put("/update/:id", (req, res) => {
  const bookId = parseInt(req.params.id);
  const findCurrentBook = books.find((book) => book.id === bookId);

  if (findCurrentBook) {
    findCurrentBook.title = req.body.title || findCurrentBook.title;

    res.status(200).json({
      message: `Book with ID ${bookId} updated successfully`,
      data: findCurrentBook,
    });
  } else {
    res.status(404).json({
      message: "Book not found",
    });
  }
});

// delete a book
app.delete("/delete/:id", (req, res) => {
  const bookId = parseInt(req.params.id);
  const indexOfCurrentBook = books.findIndex((book) => book.id === bookId);

  if (indexOfCurrentBook !== -1) {
    const deleteBook = books.splice(indexOfCurrentBook, 1);

    res.status(200).json({
      message: "Book deleted successfully",
      data: deleteBook[0],
    });
  } else {
    res.status(404).json({
      message: "Book not found",
    });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
