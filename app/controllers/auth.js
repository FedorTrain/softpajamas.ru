const mongoose = require('mongoose');
const bCrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authHelper = require('../helpers/authHelper');
const { secret } = require('../../config/app').jwt;

const User = mongoose.model('User');
const Token = mongoose.model('Token');

const updateTokens = (userId) => {
  const accessToken = authHelper.generateAccessToken(userId);
  const refreshToken = authHelper.generateRefreshToken();

  return authHelper.replaceDbRefreshToken(refreshToken.id, userId)
    .then(() => ({
      accessToken,
      refreshToken: refreshToken.token,
    }));
};

const signIn = (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email })
    .exec()
    .then((user) => {
      if (!user) {
        res.status(401).json({ message: 'User does not exist'});
      }
      const isValid = bCrypt.compareSync(password, user.password);
      if (isValid) {
        updateTokens(user._id).then(tokens => res.json(tokens));
      } else {
        res. status(401).json({ massage: 'Invalid credentials!' });
      }
    })
    .catch(err => res.status(500).json({ massage: err.massage }));
};

const refreshTokens = (req, res) => {
  const { refreshToken } = req.body;
  let payload;
  try {
    payload = jwt.verify(refreshToken, sicret);
    if (payload.type !== 'refresh') {
      res. status(400).json({ massage: 'Invalid token!' });
      return;
    }
  } catch (e) {
    if (e instanceof jwt.TokenExpiredError) {
      res.status(400).json({ massage: 'Token expired!' });
      return;
    } else if (e instanceof jwt.JsonWebTokenError) {
      res.status(400).json({ massage: 'Invalid token!' });
      return;
    }
  };

  Token.findOne({ tokenId: payload.id })
    .exec()
    .then((token) => {
      if (token === null) {
        throw new Error('Invalid token!');
      }

      return updateTokens(token.userId);
    })
    .then(tokens => res.json(tokens))
    .catch(err => res.status(400).json({ massage: err.massage }));
};

module.exports = {
  signIn,
  refreshTokens,
};
