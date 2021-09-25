import { PaymentIntent } from "@stripe/stripe-js";
import { NextApiRequest, NextApiResponse } from "next";
import { Stripe } from "stripe";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// handle payment_intent.succeeded
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const event: Stripe.Event = req.body;

  console.log(event.data.object);
  // Handle the event
  switch (event.type) {
    case "payment_intent.succeeded":
      const paymentIntent = event.data.object as PaymentIntent & {
        metadata: { customer_email?: string; customer?: string };
      };
      // paymentIntent.
      console.log("PaymentIntent was successful!");
      const customerName = paymentIntent.metadata.customer;
      const customerEmail = paymentIntent.metadata.customer_email;
      // save customer to database
      // send customer email
      prisma.user.create({
        data: {
          name: customerName,
          email: customerEmail,
          hasPaid: true,
        },
      });
      break;
    case "payment_method.attached":
      const paymentMethod = event.data.object;
      console.log("PaymentMethod was attached to a Customer!");
      break;
    // ... handle other event types
    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  // Return a 200 response to acknowledge receipt of the event
  res.json({ received: true });
}
