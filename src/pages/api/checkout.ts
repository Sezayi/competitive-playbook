import { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";

const stripe = new Stripe(
  "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",
  {
    // https://github.com/stripe/stripe-node#configuration
    apiVersion: "2020-08-27",
  }
);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const email = req.body.email;
  const name = req.body.name;

  if (req.method === "POST") {
    try {
      const session = await stripe.checkout.sessions.create({
        mode: "payment",
        // customer_email: email,
        // customer: name,
        metadata: {
          customer_email: email,
          customer: name,
        },
        payment_method_types: ["ideal"],
        line_items: [
          {
            price_data: {
              currency: "eur",
              product_data: {
                name: "Papa Handboek",
              },
              unit_amount: 3000,
            },
            quantity: 1,
          },
        ],
        success_url: `${req.headers.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${req.headers.origin}/form`,
      });

      res.status(200).json({ url: session.url});
      console.log(session);
    } catch (err) {
      res.status(500).json({ statusCode: 500, message: err.message });
    }
  } 
}
