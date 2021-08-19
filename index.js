const express = require("express");

const blogs = require("./routes/blogs");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use("/blogs", blogs);

app.listen(PORT, function () {
  console.log("listening on port: " + PORT);
});
