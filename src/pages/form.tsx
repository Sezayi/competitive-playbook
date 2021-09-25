import { NextSeo } from 'next-seo';
import Page from '@/components/page';
import SignUp from '@/components/signup';
import Footer from '@/components/footer';
import getStripe from '../utils/get-stripe'

export default function Form() {
  const handleClick = async() => {
    const { sessionId }: any = await fetch('api/checkout', {
      method: 'POST',
      headers: {
        "content-type": "application/json"
      }
    }).then(res => res.json)

    const stripe: any = await getStripe();
    const {error}: any = await stripe.redirectToCheckout({ sessionId })
  }
  return (
    <Page>
      <NextSeo
        title="Papa Handboek"
        description="Alle praktische tips en trucs voor nieuwe vaders"
      />
      <main>
        <SignUp />
        <button role="link" onClick={handleClick}>Betalen</button>
      </main>
      <Footer />
    </Page>
  );
}

