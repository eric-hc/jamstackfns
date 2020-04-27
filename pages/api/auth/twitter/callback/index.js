import passport from 'passport';

import express from '../../../../../utils/express';

const app = express();

app.get(
  '*',
  passport.authenticate('twitter', {
    failureRedirect: '/'
  }),
  (req, res) => {
    const redirectUrl = (req.session && req.session.redirectUrl) || '/example';

    if (req.session) {
      // eslint-disable-next-line no-param-reassign
      delete req.session.redirectUrl;
    }

    res.redirect(typeof redirectUrl === 'string' ? redirectUrl : '/example');
  }
);

export default app;
