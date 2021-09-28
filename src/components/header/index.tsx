import { tw, css } from "twind/css";
import Link from "next/link";
import Image from "next/image";
// import dad from '../images/dadson.webp'
import Button from "@/components/button";
// import Netlify from "@/constants/svg/netlify.svg";
// import Nike from "@/constants/svg/nike.svg";
// import Figma from "@/constants/svg/figma.svg";
// import Aws from "@/constants/svg/aws.svg";

const headerStyle = css`
  background-color: #ffffff;
  min-height: calc(100vh - 6rem);
`;

const spanStyle = css`
  content: "";
  position: absolute;
  z-index: 0;
  left: 55%;
  top: 0%;
  width: 25rem;
  height: 32rem;
  background-repeat: no-repeat;
  background-position: 100%;
  background-size: contain;
  background-image: url(/images/circled.svg);
`;

// const spanBeforeStyle = css`
//   ::before {
//     box-sizing: border-box;
//   }
// `;

const Header = () => (
  <header className={tw(headerStyle)}>
    <div className={tw(`lg:flex lg:flex-row`)}>
      <div className={tw(`max-w-6xl px-14 sm:px-6 lg:py-24 lg:pl-32 2xl:py-48 lg:justify-center lg:max-w-3xl 2xl:max-w-5xl`)}>
        <h1
          className={tw(
            `font-sans font-bold text-4xl md:text-5xl lg:text-7xl 2xl:text-8xl leading-snug text-gray-800`
          )}
        >
          Het eerste papa handboek
        </h1>
        <div className={tw(`max-w-xl lg:max-w-2xl  `)}>
          <p
            className={tw(
              `mt-10 text-gray-500 text-xl lg:text-2xl 2xl:text-3xl 2xl:leading-normal`
            )}
          >
            Leer alles wat je moet weten als vader voor, tijdens en na de
            geboorte van je baby
          </p>
        </div>
        <div
          className={tw(
            `mt-16 flex  items-center w-full  `
          )}
        >
          <Link href="/form">
            <Button primary>Koop het papa handboek</Button>
          </Link>
          <span className={tw(`mx-4`)}>or</span>
          <Button>Neem contact op</Button>
        </div>
      </div>
      <div className={tw(`flex`)}>
          <img
            src="/images/dadson.webp"
            className={tw(`p-16 h-full w-full object-cover `)}
          />
        </div>
    </div>
  </header>
);

export default Header;
