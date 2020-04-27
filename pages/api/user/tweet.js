import Twit from 'twit';

import express from '../../../utils/express';

const app = express();

app.use((req, res) => {
  const twitter = new Twit({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token: req.user.token,
    access_token_secret: req.user.tokenSecret,
    strictSSL: true
  });

  twitter.post(
    'statuses/update',
    {
      status: req.body.status
    },
    (err, data) => {
      if (err) {
        return res.status(500).json({ error: err.toString() });
      }

      return res.status(201).json({
        tweet: data,
        error: ''
      });
    }
  );
});

export default app;
