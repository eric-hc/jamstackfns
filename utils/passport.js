const passport = require('passport');
const TwitterStrategy = require('passport-twitter').Strategy;

const { URL } = require('./constants');

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((id, done) => {
  done(null, id);
});

passport.use(
  new TwitterStrategy(
    {
      consumerKey: process.env.TWITTER_CONSUMER_KEY,
      consumerSecret: process.env.TWITTER_CONSUMER_SECRET,
      callbackURL: `${URL}/api/auth/twitter/callback`
    },
    (token, tokenSecret, profile, done) => {
      const promise = Promise.resolve();

      promise
        .then(() => {
          done(null, {
            name: profile.username,
            token,
            tokenSecret
          });
        })
        .catch((error) => {
          // eslint-disable-next-line no-console
          console.error(error);

          done(null, {
            name: profile.username,
            token,
            tokenSecret
          });
        });
    }
  )
);

module.exports = passport;
