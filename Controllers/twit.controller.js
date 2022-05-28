const Twit = require("../modules/Twit.modul");

module.exports.twitController = {
  postTwit: (req, res) => {
    Twit.create({
      name: req.body.name,
      text: req.body.text,
    })
      .then((data) => {
        res.json(data);
      })
      .catch(() => {
        res.json("Ошибка при создании поста");
      });
  },
  deleteTwit: (req, res) => {
    Twit.findByIdAndRemove(req.params.id)
      .then(() => {
        res.json("Пост удален");
      })
      .catch(() => {
        res.json("Ошибка при удалении поста");
      });
  },
  pathTwit: (req, res) => {
    Twit.findByIdAndUpdate(req.params.id, {
      name: req.params.id,
      text: req.params.id,
    })
      .then((data) => {
        res.json(data);
      })
      .catch(() => {
        res.json("Ошибка при удалении поста");
      });
  },
  addLike: (req, res) => {
    Twit.findByIdAndUpdate(req.params.id, {
      $push: {
        like: req.body.like,
      },
    })
      .then((data) => {
        res.json(data);
      })
      .catch(() => {
        res.json("Ошибка при добавлении лайка");
      });
  },
  addComment: (req, res) => {
    Twit.findByIdAndUpdate(req.params.id, {
      $push: {
        comment: req.body.comment,
      },
    })
      .then((data) => {
        res.json(data);
      })
      .catch(() => {
        res.json("Ошибка при добавлении комментария");
      });
  },
};
