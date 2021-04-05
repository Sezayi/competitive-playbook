import { NextSeo } from 'next-seo';
import Page from '@/components/page';
import SignUp from '@/components/signup';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <Page>
      <NextSeo
        title="Growthhacking workshops"
        description="Beat the competition with these growthhacking workshops"
      />
      <main>
        <SignUp />
      </main>
      <Footer />
    </Page>
  );
}