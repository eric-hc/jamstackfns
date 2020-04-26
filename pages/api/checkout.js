const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

export default async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        name: 'Front-End Development with the JAMstack',
        description:
          'This book explains how to run your web projects—from simple sites to complex applications—on the JAMstack, a modern web architecture for deploying fast, secure and highly-scalable sites that don’t require a traditional origin server.',
        images: ['https://i.imgur.com/ykNTXEG.png'],
        amount: req.query.price,
        currency: 'usd',
        quantity: 1
      }
    ],
    success_url: 'https://leerob.io/success?session_id={CHECKOUT_SESSION_ID}',
    cancel_url: 'https://leerob.io/jamstack'
  });

  return res.status(201).json(session);
};
