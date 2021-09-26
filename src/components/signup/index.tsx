import { tw } from "twind";
import FeatureSvg from "@/constants/svg/growthhacking.svg";
import React, { useState } from "react";
import Button from "@/components/button";
import { useForm } from "react-hook-form";

interface IFormInputs {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

const SignUp = () => {
  const [email, setEmail] = React.useState<string>("");
  const [name, setName] = React.useState<string>("");

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormInputs>();

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

        <form onSubmit={handleSubmit(handleClick)}>
          <div className={tw(`flex flex-wrap -mx-8 items-center`)}>
            <div className={tw(`w-full lg:w-1/2 px-8`)}>
              <div className={tw(`w-full lg:w-full mt-12 lg:mt-0`)}>
                <div className={tw(`border border-gray-400 rounded py-5 px-4`)}>
                  <div className={tw(`mb-8`)}>
                    <h4 className={tw(`text-sm uppercase  mb-3`)}>
                      Je volledige naam
                    </h4>
                    <div className={tw(`flex w-full flex-col`)}>
                      <input
                        className={tw(
                          `border border-gray-300 bg-gray-100 min-w-0 w-full rounded text-gray-800 py-2 px-3 mr-2`
                        )}
                        {...register("firstName", { required: true })}
                        placeholder="bv. Daniel Verburgh"
                        value={name}
                        onChange={(event) => {
                          setName(event.currentTarget.value);
                        }}
                      />
                      {errors.firstName?.type === "required" && (
                        <div className={tw(`text-red-600 py-2`)}>
                          Whoepsie! Vul hier je voor en achternaam in.
                        </div>
                      )}
                    </div>
                  </div>
                  <div className={tw(`mb-8`)}>
                    <h4 className={tw(`text-sm uppercase  mb-3`)}>
                      Je email adres
                    </h4>
                    <div className={tw(`flex w-full flex-col`)}>
                      <input
                        className={tw(
                          `border border-gray-300 bg-gray-100 min-w-0 w-full rounded text-gray-800 py-2 px-3 mr-2`
                        )}
                        type="text"
                        {...register("email", {
                          required: true,
                          pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                        })}
                        placeholder="bv. d_verburgh@gmail.com"
                        value={email}
                        onChange={(event) => {
                          setEmail(event.currentTarget.value);
                        }}
                      />
                      {errors.email && errors.email.type === "required" && (
                        <div className={tw(`text-red-600 py-2`)}>
                          Owjee, vul hier een geldig emailadres in!
                        </div>
                      )}
                      {errors?.email?.type === "pattern" && (
                        <div className={tw(`text-red-600 py-2`)}>
                          Je email lijkt niet het correcte format te hebben.
                        </div>
                      )}
                    </div>
                  </div>

                  <button
                    className={tw(
                      `font-sans font-medium py-2 lg:py-4 px-8 lg:px-12 border rounded bg-indigo-600 text-white border-indigo-500 hover:bg-indigo-700`
                    )}
                    type="submit"
                  >
                    Betalen met iDEAL
                  </button>

                  {/* <div className={tw(`mb-8`)}>
                    <h4 className={tw(`text-sm uppercase  mb-3`)}>
                      Kies jouw product
                    </h4>
                    <div className={tw(`flex w-full`)}>
                      <select
                        aria-label="product"
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
                  </div> */}
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
    </section>
  );
};

export default SignUp;
