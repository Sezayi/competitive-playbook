import { NextSeo } from "next-seo";
import Page from "@/components/page";
import SignUp from "@/components/signup";


export default function Form() {
  return (
    <Page>
      <NextSeo
        title="Papa Handboek"
        description="Alle praktische tips en trucs voor nieuwe vaders"
      />
      <main>
        <SignUp />
      </main>
    </Page>
  );
}
