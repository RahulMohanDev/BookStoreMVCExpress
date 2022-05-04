const express = require("express");
const http = require("http");
const path = require("path");
const Book = require("../Model/Book");
const router = express.Router();

router.get("/addBooks", (req, res, next) => {
  res.render("admin");
});

router.post("/books", (req, res, next) => {
  const newBook = new Book(req.body.title, req.body.author);
  newBook.add();
  res.redirect("/library");
});

module.exports = router;
