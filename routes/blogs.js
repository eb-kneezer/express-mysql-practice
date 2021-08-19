const express = require("express");
const router = express.Router();
const newsDbModel = require("../model/newsdb.model");

router.get("/", newsDbModel.getAllBlogs);

router.get("/:id", newsDbModel.getSingleBlog);

router.post("/", newsDbModel.postSingleBlog);

router.delete("/:id", newsDbModel.deleteSingleBlog);

module.exports = router;
