import Page from '@/components/page';
import Footer from '@/components/footer';
import { tw } from "twind";


export default function Success() {
  return (
    <Page>
      <main>
      <h1
          className={tw(
            `font-sans font-bold text-4xl md:text-5xl lg:text-7xl 2xl:text-8xl leading-snug text-gray-800`
          )}
        >
          Dank voor je berichtje! We gaan deze zo snel mogelijk beantwoorden.
        </h1>
      </main>
      <Footer />
    </Page>
  );
}