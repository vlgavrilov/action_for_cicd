const express = require('express');
const router = express.Router();
const {check} = require('express-validator');

const attachMailAgent = require('../utils/mailAgent');
const {authController} = require('../controllers/auth');
const {checkToken} = require('../guards/tokenGuard');

router.get(
    '/google-revoke-token',
    checkToken,
    authController.googleRevokeToken,
);
router.get(
    '/google-check-access-token/:linkedAccountId',
    checkToken,
    authController.googleCheckAccessToken,
);
router.get('/logout', function(req, res) {
  req.logout();
  res.status(201);
});

router.post('/google_auth', attachMailAgent, authController.googleAuth);
router.post('/facebook_auth', attachMailAgent, authController.facebookOAuth);
router.post(
    '/add-google-link-account',
    attachMailAgent,
    checkToken,
    authController.addGoogleLinkAccount,
);
router.post('/signup', [
  check('email', 'Incorrect email').isEmail(),
  check('password', 'Minimum password length 6 characters')
      .isLength({min: 6})
      .custom((value) => !/\s/.test(value))
      .withMessage('No spaces are allowed in the password'),
  check('first_name', 'Minimum password length 1 characters')
      .trim()
      .isLength({min: 1}),
  check('last_name', 'Minimum password length 1 characters')
      .trim()
      .isLength({min: 1}),
  authController.preLoginSignUp,
  attachMailAgent,
  authController.signUp,
]);
router.post('/login', [
  check('email', 'Incorrect email').isEmail(),
  check('password', 'Minimum password length 6 characters')
      .isLength({min: 6})
      .custom((value) => !/\s/.test(value))
      .withMessage('No spaces are allowed in the password'),
  authController.preLoginSignUp,
  authController.login,
]);
router.post('/cypress/delete', authController.deleteCypressTestUser);

module.exports = router;
