import { tw } from "twind";
import FeatureSvg from "@/constants/svg/growthhacking.svg";
import React, { useState } from "react";

const SignUp = () => {
  const [email, setEmail] = React.useState<string>("");
  const [name, setName] = React.useState<string>("");

  const handleClick = async () => {
    const res = await fetch("api/checkout", {
      method: "POST",
      body: JSON.stringify({
        email: email,
        name: name,
      }),
      headers: {
        "content-type": "application/json",
      },
    });
    if (res.status !== 200) {
      //error
      alert(await res.text());
    } else {
      window.location.replace((await res.json()).url);
    }
  };

  return (
    <section className={tw(`lg:py-16 pt-16 overflow-hidden`)}>
      <div className={tw(`max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 bg-white`)}>
        <div className={tw(`mb-8 `)}>
          <p
            className={tw(
              `mt-2 pb-4 text-3xl lg:text-5xl font-bold tracking-tight text-gray-900`
            )}
          >
            Koop hier het papa handboek
          </p>
        </div>

        <form action="/create-checkout-session" method="POST">
          <div className={tw(`flex flex-wrap -mx-8 items-center`)}>
            <div className={tw(`w-full lg:w-1/2 px-8`)}>
              <div className={tw(`w-full lg:w-full mt-12 lg:mt-0`)}>
                <div className={tw(`border border-gray-400 rounded py-5 px-4`)}>
                  <div className={tw(`mb-8`)}>
                    <h4 className={tw(`text-sm uppercase  mb-3`)}>
                      Je volledige naam
                    </h4>
                    <div className={tw(`flex w-full`)}>
                      <input
                        name="full_name"
                        aria-label="full name"
                        type="text"
                        className={tw(
                          `border border-gray-300 bg-gray-100 min-w-0 w-full rounded text-gray-800 py-2 px-3 mr-2`
                        )}
                        placeholder="Jan Doen"
                        value={name}
                        onChange={(event) => {
                          setName(event.currentTarget.value);
                        }}
                      />
                    </div>
                  </div>
                  <div className={tw(`mb-8`)}>
                    <h4 className={tw(`text-sm uppercase  mb-3`)}>
                      Je email adres
                    </h4>
                    <div className={tw(`flex w-full`)}>
                      <input
                        name="email"
                        aria-label="email address"
                        type="text"
                        className={tw(
                          `border border-gray-300 bg-gray-100 min-w-0 w-full rounded text-gray-800 py-2 px-3 mr-2`
                        )}
                        placeholder="jan.doen@gmail.com"
                        value={email}
                        onChange={(event) => {
                          setEmail(event.currentTarget.value);
                        }}
                      />
                    </div>
                  </div>

                  <div className={tw(`mb-8`)}>
                    <h4 className={tw(`text-sm uppercase  mb-3`)}>
                      Kies jouw product
                    </h4>
                    <div className={tw(`flex w-full`)}>
                      <select
                        aria-label="Vul je telefoonnummer in"
                        className={tw(
                          `border border-gray-300 bg-gray-100 min-w-0 w-full rounded text-gray-800 py-2 px-3 mr-2`
                        )}
                        placeholder="papa handboek"
                      >
                        <option value="papa handboek" selected>
                          Het papa handboek
                        </option>
                      </select>
                    </div>
                  </div>
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
        </form>
      </div>

      <button role="link" onClick={handleClick}>
        Betalen
      </button>
    </section>
  );
};

export default SignUp;
