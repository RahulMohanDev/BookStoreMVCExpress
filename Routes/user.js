const express = require("express");
const http = require("http");
const path = require("path");
const Book = require("../Model/Book")

const router = express.Router();

router.get("/library", (req, res, next) => {
  res.render("index", {
    title: "New title 2",
    books: Book.getBookList(),
  });
});

module.exports = router;
