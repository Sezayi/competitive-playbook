import { loadStripe } from '@stripe/stripe-js';

const getStripe = () => {
 const stripePromise = loadStripe("pk_live_51JZZATLW50fYGS23NxkGbMBPWYgJzRToioLelkUuAZiEk3Z7Hha1TDK0nKvOFVflgybvO4cbJS6JCAZObMWqDWhj00IpHjHFA4")
   
  return stripePromise;
};

export default getStripe;