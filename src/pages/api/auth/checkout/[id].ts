import { NextApiRequest, NextApiResponse } from 'next';

import Stripe from 'stripe';
const stripe = new Stripe("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", {
  // https://github.com/stripe/stripe-node#configuration
  apiVersion: '2020-08-27',
});

export default async function handler(req: NextApiRequest,
  res: NextApiResponse) {
    const id: any  = req.query.id;
    try {
      const checkout_session = await stripe.checkout.sessions.retrieve(id);
  
      res.status(200).json(checkout_session);
    } catch (err: any) {
      res.status(500).json({ statusCode: 500, message: err.message });
    }
  }
  