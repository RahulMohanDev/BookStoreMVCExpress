const express = require("express");
const http = require("http");
const path = require("path");
let bodyParser = require("body-parser");
let adminRouter = require("./Routes/admin");
let userRouter = require("./Routes/user");
const { route } = require("./Routes/user");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/test", (req,res,next) => {
  console.log("this is some other transformation");
  next(); 
});

app.set("view engine", "ejs");

// app.set('views','htmlTemplates')

app.use(userRouter);

app.use("/admin", adminRouter);

app.listen(8000);
http.createServer(app);

// app.get("/", (req, res, next) => {
//   console.log(path.join(__dirname,'Pages','index.html'));
//   res.sendFile(path.join(__dirname,'Pages','index.html'));
//   res.end();
// });

// app.get("/form", (req, res, next) => {
//   res.sendFile(path.join(__dirname,'Pages','form.html'));
//   res.end();
// });

// app.post("/formData", (req, res, next) => {
//   console.log(req.body.fullName);
//   res.redirect("/");
//   res.end();
// });

// app.use((req, res) => {
//   res.status(404);
//   res.end();
// });
