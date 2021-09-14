import { tw } from "twind";
import Button from "@/components/button";

const productLinks = [`Customers`, `Pricing`, `What's new?`];
const aboutLinks = [`About Us`, `Careers`, `Blog`, `Events`, `Press`];
const resourceLinks = [
  `Get started`,
  `Guides`,
  `Tools`,
  `Case studies`,
  `Training`,
];

const Footer = () => (
  <footer className={tw(`bg-white border-t border-gray-400 pt-14 pb-16`)}>
    <div
      className={tw(
        `max-w-7xl mx-auto text-gray-400 px-8 lg:px-0 flex justify-center`
      )}
    >
      {/* <div className={tw(`w-full lg:w-1/2`)}>
        <ul className={tw(`text-lg font-light flex flex-wrap w-full`)}>
          <li className={tw(`w-1/2 md:w-1/3 lg:w-1/3`)}>
            <div>
              <h4 className={tw(`text-gray-900 text-base font-bold mb-1`)}>Product</h4>
              <ul>
                {productLinks.map((link) => (
                  <li className={tw(`text-gray-800 text-sm font-medium leading-6`)} key={link}>
                    <a href="/">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
          <li className={tw(`w-1/2 md:w-1/3 lg:w-1/3`)}>
            <div>
              <h4 className={tw(`text-gray-900 text-base font-bold mb-1`)}>Resources</h4>
              <ul>
                {resourceLinks.map((link) => (
                  <li className={tw(`text-gray-800 text-sm font-medium leading-6`)} key={link}>
                    <a href="/">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
          <li className={tw(`w-1/2 md:w-1/3 lg:w-1/3`)}>
            <div>
              <h4 className={tw(`text-gray-900 text-base font-bold mb-1`)}>About Us</h4>
              <ul>
                {aboutLinks.map((link) => (
                  <li className={tw(`text-gray-800 text-sm font-medium leading-6`)} key={link}>
                    <a href="/">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div> */}
      <div className={tw(`w-full lg:w-1/2 mt-12 lg:mt-0`)}>
        <div className={tw(`border border-gray-400 rounded py-5 px-4`)}>
          <h4 className={tw(`font-mono text-sm uppercase text-gray-500 mb-3`)}>
            Schrijf je in voor onze nieuwsbrief
          </h4>
          <div className={tw(`flex w-full`)}>
            <input
              aria-label="email address"
              type="text"
              className={tw(
                `border border-gray-300 bg-gray-100 min-w-0 w-full rounded text-gray-800 py-2 px-3 mr-2`
              )}
              placeholder="Enter your email"
            />
            <Button>Subscribe</Button>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
