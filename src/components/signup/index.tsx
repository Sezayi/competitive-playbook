import { tw } from "twind";
import FeatureSvg from "@/constants/svg/growthhacking.svg";
import Button from "@/components/button";

const SignUp = () => (
  <section className={tw(`lg:py-16 pt-16 overflow-hidden`)}>
    <div className={tw(`max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 bg-white`)}>
      <div className={tw(`mb-8 `)}>
        <p
          className={tw(
            `mt-2 pb-4 text-3xl lg:text-5xl font-bold tracking-tight text-gray-900`
          )}
        >
          Supercharge your business
        </p>
      </div>
      <div className={tw(`flex flex-wrap -mx-8 items-center`)}>
        <div className={tw(`w-full lg:w-1/2 px-8`)}>
          <div className={tw(`w-full lg:w-full mt-12 lg:mt-0`)}>
            <div className={tw(`border border-gray-400 rounded py-5 px-4`)}>
              <div className={tw(`mb-8`)}>
                <h4 className={tw(`text-sm uppercase  mb-3`)}>
                  Your full name
                </h4>
                <div className={tw(`flex w-full`)}>
                  <input
                    aria-label="full name"
                    type="text"
                    className={tw(
                      `border border-gray-300 bg-gray-100 min-w-0 w-full rounded text-gray-800 py-2 px-3 mr-2`
                    )}
                    placeholder="John Fire"
                  />
                </div>
              </div>
              <div className={tw(`mb-8`)}>
                <h4 className={tw(`text-sm uppercase  mb-3`)}>
                  Your email address
                </h4>
                <div className={tw(`flex w-full`)}>
                  <input
                    aria-label="email address"
                    type="text"
                    className={tw(
                      `border border-gray-300 bg-gray-100 min-w-0 w-full rounded text-gray-800 py-2 px-3 mr-2`
                    )}
                    placeholder="john@growthhacking.com"
                  />
                </div>
              </div>

              <div className={tw(`mb-8`)}>
                <h4 className={tw(`text-sm uppercase  mb-3`)}>
                  Your phone number
                </h4>
                <div className={tw(`flex w-full`)}>
                  <input
                    aria-label="course"
                    type="select"
                    className={tw(
                      `border border-gray-300 bg-gray-100 min-w-0 w-full rounded text-gray-800 py-2 px-3 mr-2`
                    )}
                    placeholder="+(31) 612345678"
                  />
                </div>
              </div>

              <div className={tw(`mb-8`)}>
                <h4 className={tw(`text-sm uppercase  mb-3`)}>
                  Choose your course
                </h4>
                <div className={tw(`flex w-full`)}>
                  <select
                    aria-label="Enter your phonenumber"
                    className={tw(
                      `border border-gray-300 bg-gray-100 min-w-0 w-full rounded text-gray-800 py-2 px-3 mr-2`
                    )}
                    placeholder="Enter your phonenumber"
                  >
                    <option value="volvo">Advanced SEO</option>
                    <option value="saab">Social ads</option>
                    <option value="vw">Intro to growthhacking</option>
                    <option value="Intro to growthhacking" selected>
                    Intro to growthhacking
                    </option>
                  </select>
                </div>
              </div>

              <Button primary modifier="mt-2">Subscribe</Button>
            </div>
          </div>
        </div>

        <div className={tw(`w-full lg:w-1/2 px-8`)}>
          <div
            className={tw(
              `lg:mb-12 lg:mb-0 pb-12 lg:pb-0 mt-16 lg:mt-0 mx-6 lg:mx-0`
            )}
          >
            <FeatureSvg width="100%" height="100%" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default SignUp;
