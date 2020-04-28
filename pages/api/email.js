import sendgrid from '@sendgrid/mail';

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

export default async (req, res) => {
  const { from, text } = req.body;

  if (!from) {
    return res.status(400).json({ error: 'Email is required' });
  }

  if (!text) {
    return res.status(400).json({ error: 'Message is required' });
  }

  try {
    await sendgrid.send({
      to: 'me@leerob.io',
      from: 'me@leerob.io',
      subject: 'Contact – jamstackfns',
      text: `
      Email: ${from}
      Message: ${text}
      `
    });
  } catch (error) {
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: '' });
};
