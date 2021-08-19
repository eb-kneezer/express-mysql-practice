const newsDB = require("../schema/db");

function getAllBlogs(req, res) {
  newsDB.connect().getConnection(function (err, connection) {
    if (err) throw err;

    connection.query("SELECT * FROM blogs;", function (query_err, data) {
      connection.release();

      if (query_err) throw query_err;
      res.send(data);
    });
  });
}

function getSingleBlog(req, res) {
  const blogId = req.params.id;
  newsDB.connect().getConnection(function (err, connect) {
    if (err) throw err;

    connect.query(
      `SELECT * FROM blogs WHERE id = ${blogId};`,
      function (query_err, data) {
        connect.release();

        if (query_err) throw query_err;

        res.send(data);
      }
    );
  });
}

function postSingleBlog(req, res) {
  const requestBody = req.body;

  newsDB.connect().getConnection(function (err, connect) {
    if (err) throw err;

    connect.query(
      `INSERT INTO blogs(title, snippet, content, author_id, date_created) VALUES('${requestBody.title}', '${requestBody.snippet}', '${requestBody.content}', '${requestBody.author_id}', '${requestBody.date_created}');`,
      function (query_err, data) {
        connect.release();

        if (query_err) throw query_err;

        res.send(data);
      }
    );
  });
}

function deleteSingleBlog(req, res) {
  const blogId = req.params.id;

  newsDB.connect().getConnection((err, connect) => {
    if (err) throw err;

    connect.query(
      `DELETE FROM blogs WHERE id = ${blogId};`,
      function (query_err, data) {
        connect.release();

        if (query_err) throw query_err;

        res.send(data);
      }
    );
  });
}

// getAll("display");
module.exports = {
  getAllBlogs,
  getSingleBlog,
  postSingleBlog,
  deleteSingleBlog,
};
