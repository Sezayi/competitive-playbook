import { NextSeo } from "next-seo";
import Page from "@/components/page";
import { tw, css } from "twind/css";
import { useSession } from "next-auth/client";
import SideBar from "@/components/sidebar";


export default function Intro() {
  const [session] = useSession();

  return (
    <Page>
        <NextSeo
        title="Het eerste papa handboek"
        description="Alle tips en trucs voor nieuwe vaders"
      />
      {session && (
        <>
          <header>
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
                  Introductie
                </h1>
              </div>
            </div>
          </header>
        </>
      )}
    </Page>
  );
}
