import sendgrid from '@sendgrid/mail';

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

export default async (req, res) => {
  try {
    await sendgrid.send({
      to: 'me@leerob.io',
      from: req.body.from,
      subject: 'Suggestion for jamstackfns',
      text: req.body.text
    });
  } catch (error) {
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: '' });
};
