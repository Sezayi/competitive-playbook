import { NextSeo } from "next-seo";
import Page from "@/components/page";
import Header from "@/components/header";
import VideoSection from "@/components/video-section";
import ListSection from "@/components/list-section";
import FeatureSection from "@/components/feature-section";
import SocialProof from "@/components/social-proof";
import PricingTable from "@/components/pricing-table";
import SideBar from "@/components/sidebar";
import Footer from "@/components/footer";
import { useSession } from "next-auth/client";
import { tw, css } from "twind/css";

const headerStyle = css`
  background-color: #ffffff;
  min-height: calc(100vh - 6rem);
`;

export default function Home() {
  const [session] = useSession();
  console.log(session);
  return (
    <Page>
      <NextSeo
        title="Het eerste papa handboek"
        description="Alle tips en trucs voor nieuwe vaders"
      />
      <main>
        {!session && (
          <>
            <Header />
            <VideoSection />
            <ListSection />
            <FeatureSection />
            <SocialProof />
            <PricingTable />
            <Footer />
          </>
        )}
        {session && (
          <>
            <header className={tw(headerStyle)}>
              <div className={tw(`flex flex-row`)}>
                <SideBar />
                <div
                  className={tw(
                    `max-w-6xl mx-auto py-16 px-14 sm:px-6 lg:px-8 lg:pt-32 `
                  )}
                >
                  <h1
                    className={tw(
                      `font-sans font-bold text-2xl md:text-4xl lg:text-6xl text-center leading-snug text-gray-800`
                    )}
                  >
                    Welcome {session.user.name}
                  </h1>
                </div>
              </div>
            </header>
          </>
        )}
      </main>
    </Page>
  );
}
