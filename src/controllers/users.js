const httpStatus = require('http-status');

class UserControllerHelpers {

}

class UserController extends UserControllerHelpers {
  constructor() {
    super();

  }

  async getUserEmojis(req, res) {
    try {
      const userId = req.user?.id;
      res.status(httpStatus.OK).send('data');
    } catch (err) {
      res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);

    }
  }
}

const userController = new UserController();

module.exports = { userController };
