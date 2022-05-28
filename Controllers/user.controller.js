const User = require("../modules/User.modul");

module.exports.userController = {
  postUser: (req, res) => {
    User.create({
      name: req.body.name,
    })
      .then((data) => {
        res.json(data);
      })
      .catch(() => {
        res.json("Ошибка при создании пользователя");
      });
  },
  deleteUser: (req, res) => {
    User.findByIdAndRemove(req.params.id)
      .then(() => {
        res.json("Пользователь удален");
      })
      .catch(() => {
        res.json("Ошибка при удалении пользователя");
      });
  },
  getUserById: (req, res) => {
    User.findById(req.params.id)
      .then((data) => {
        res.json(data);
      })
      .catch(() => {
        res.json("Ошибка при выводе пользователя");
      });
  },
  getUsers: (req, res) => {
    User.find()
      .then((data) => {
        res.json(data);
      })
      .catch(() => {
        res.json("Ошибка при выводе пользователей");
      });
  },
  addSaveByTwit: (req, res) => {
    User.findByIdAndUpdate(req.params.id, {
      $push: {
        saveTwit: req.body.saveTwit,
      },
    })
      .then((data) => {
        res.json(data);
      })
      .catch(() => {
        res.json("Ошибка при изменении пользователя");
      });
  },
};
