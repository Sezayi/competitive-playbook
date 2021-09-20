import { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";

const stripe = new Stripe(
  "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",
  {
    apiVersion: "2020-08-27",
  }
);

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: "T-shirt",
          },
        },
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: `${req.headers.origin}/result?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${req.headers.origin}/form`,
  });
  res.status(200).json({session_Id: session.id})
};
