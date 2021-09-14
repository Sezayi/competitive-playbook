import { NextApiRequest, NextApiResponse } from "next";

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
export default (req: NextApiRequest, res: NextApiResponse) => {
  console.log(req.body.full_name);

  // iets als `url = strip.createCheckout(naam, etc.)`;
  res.redirect("https://url-from-stripe");
  // res.statusCode = 200;
  // res.json({ name: `John Doe` });
};
