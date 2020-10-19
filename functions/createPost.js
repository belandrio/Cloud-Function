const { db } = require("./utils/admin");

exports.createPost = (req, res) => {
    if (req.body.text.trim() === "") {
      return res.status(400).json({ text: "Post must not be empty" });
    }
    const newPost = {
      text: req.body.text,
      createdAt: new Date().toISOString()
    };
    db.collection("posts")
      .add(newPost)
      .then((doc) => {
        const resPost = newPost;
        resPost.postId = doc.id;
        return res.json(resPost);
      })
      .catch((err) => {
        res.status(500).json({ error: err.code });
      });
  };
  