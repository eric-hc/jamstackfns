import passport from 'passport';

import express from '../../../../utils/express';

const app = express();

app.get(
  '*',
  (req, _, next) => {
    if (req.query && req.session && req.query.r) {
      // eslint-disable-next-line no-param-reassign
      req.session.redirectUrl = req.query.r;
    }

    next();
  },
  passport.authenticate('twitter')
);

export default app;
