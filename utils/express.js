const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const session = require('cookie-session');

const passport = require('./passport');

const TWENTY_FOUR_HOURS = 24 * 60 * 60 * 1000;

if (!process.env.SESSION_SECRET) {
  throw new Error('Missing env: SESSION_SECRET.');
}

export default () => {
  const app = express();

  app.set('trust proxy', 1);
  app.use(cors());
  app.use(cookieParser());
  app.use(
    session({
      name: 'session',
      keys: [process.env.SESSION_SECRET],
      secure: process.env.NODE_ENV === 'production',
      signed: true,
      sameSite: 'lax',
      maxAge: TWENTY_FOUR_HOURS // 24 hours
    })
  );
  app.use(passport.initialize());
  app.use(passport.session());
  app.use((req, res, next) => {
    if (req.session && req.user) {
      // Refresh authenticated users expiry time
      // eslint-disable-next-line no-param-reassign
      req.session.lastRequest = Date.now();
    }

    next();
  });

  return app;
};
