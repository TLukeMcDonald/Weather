

const viewController = {
  handleCreate(req, res) {
    res.setHeader('Location', `/api/locations/${res.locals.location}`);
    res.sendStatus(201);
  },
  handleUpdate(req, res) {
    res.setHeader('Location', `/api/locations/${res.locals.location}`);
    res.sendStatus(202);
  },

  handleDelete(req, res) {
    res.sendStatus(200);
  },

  show(req, res) {
    res.json(res.locals);
  },

  show400(err, req, res, next) {
    res.sendStatus(400);
  },
};

module.exports = viewController;
