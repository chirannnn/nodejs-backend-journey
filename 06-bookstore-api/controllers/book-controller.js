const Book = require("../models/book");

const getAllBooks = async (req, res) => {
  try {
    const allBooks = await Book.find({});

    if (allBooks.length > 0) {
      return res.status(200).json({
        success: true,
        message: "List of books fetched successfully",
        data: allBooks,
      });
    }
    return res.status(200).json({
      success: true,
      message: "No books available yet",
      data: allBooks,
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Something went wrong! Please try again",
    });
  }
};

const getSingleBookById = async (req, res) => {
  try {
    const bookId = req.params.id;
    const getABook = await Book.findById(bookId);

    if (getABook) {
      return res.status(200).json({
        success: true,
        message: "This is Your Book",
        data: getABook,
      });
    }
    return res.status(404).json({
      success: false,
      message: "Enter a correct Book ID",
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Something went wrong! Please try again",
    });
  }
};

const addNewBook = async (req, res) => {
  try {
    const bookData = req.body;
    const newBook = await Book.create(bookData);
    if (newBook) {
      res.status(201).json({
        success: true,
        message: "Book added successfully",
        data: newBook,
      });
    }
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Something went wrong! Please try again",
    });
  }
};

const updateBook = async (req, res) => {
  try {
    const bookData = req.body;
    const bookId = req.params.id;

    const updatedBook = await Book.findByIdAndUpdate(bookId, bookData, {
      new: true,
    });

    if (!updatedBook) {
      return res.status(404).json({
        success: false,
        message: "Book is not found with this ID",
      });
    }

    res.status(200).json({
      success: true,
      message: "Book updated successfully",
      data: updatedBook,
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Something went wrong! Please try again",
    });
  }
};

const deleteBook = async (req, res) => {
  try {
    const bookID = req.params.id;
    const deletedBook = await Book.findByIdAndDelete(bookID);

    if (!deletedBook) {
      return res.status(404).json({
        success: false,
        message: "Book is not found with this ID",
      });
    }

    res.status(200).json({
      success: true,
      message: "Book deleted successfully",
      data: deletedBook,
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Something went wrong! Please try again",
    });
  }
};

module.exports = {
  getAllBooks,
  getSingleBookById,
  addNewBook,
  updateBook,
  deleteBook,
};
