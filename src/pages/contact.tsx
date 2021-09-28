import { NextSeo } from "next-seo";
import Page from "@/components/page";
import { useForm } from "react-hook-form";
import { tw } from "twind";
import { useState } from "react";
import { useRouter } from "next/router";


interface IFormInputs {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

export default function Contact() {
  const router = useRouter();

  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormInputs>();

  async function onSubmitForm() {
    const res = await fetch("api/contact-request", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        name: name,
        message: message,
      }),
    });
    if (res.status !== 200) {
      alert(await res.text());
    } else {
      reset();
      router.push("/success");
    }
  }

  return (
    <Page>
      <NextSeo title="Papa Handboek" description="contact" />

      <div className={tw(`px-4 sm:px-6 flex justify-center items-center `)}>
        <div className={tw(`border border-gray-400 rounded py-5 px-4 min-w-full lg:min-w-1/4 mb-48`)}>
          <main>
            <h1
              className={tw(
                `font-sans font-bold text-4xl md:text-2xl lg:text-2xl 2xl:text-2xl leading-snug text-gray-800 mb-8`
              )}
            >
              Stel ons een vraag
            </h1>
            <form onSubmit={handleSubmit(onSubmitForm)}>
              <div>
                <div className={tw(`font-sans uppercase text-sm mb-3`)}>
                  <label>Naam</label>
                </div>

                <input
                  className={tw(
                    `border border-gray-300 bg-white-100 w-full rounded text-gray-800 py-2 px-3 mr-2 mb-4`
                  )}
                  type="text"
                  {...register("firstName", { required: true })}
                  placeholder="bv. Patrick Appa"
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
              <div>
              <div className={tw(`font-sans uppercase text-sm mb-3`)}>
                  <label>Email</label>
                </div>
                <input
                  className={tw(
                    `border border-gray-300 bg-white-100 min-w-0 w-full rounded text-gray-800 py-2 px-3 mr-2 mb-4`
                  )}
                  type="text"
                  {...register("email", {
                    required: true,
                    pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  })}
                  value={email}
                  placeholder="bv. p.appa@gmail.com"
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
              <div>
              <div className={tw(`font-sans uppercase text-sm mb-3`)}>
                  <label>Bericht</label>
                </div>
                <textarea
                  {...register("message", {
                    required: true,
                  })}
                  className={tw(`border border-gray-300 bg-white-100 min-w-0 w-full rounded text-gray-800 pb-8 pt-2 px-3 mb-4 mr-2
                  `)}
                  placeholder="Typ hier je bericht"
                  value={message}
                  onChange={(event) => {
                    setMessage(event.currentTarget.value);
                  }}
                ></textarea>
                <span className="text-red-400 text-sm py-2">
                  {errors?.message?.message}
                </span>
              </div>
              <div>
                <button
                  type="submit"
                  className={tw(
                    `font-sans font-medium py-2 lg:py-4 px-8 lg:px-12 border rounded bg-dad-blue text-white border-dad-blue hover:bg-dad-blue-dark`
                  )}
                >
                  Verzenden
                </button>
              </div>
            </form>
          </main>
        </div>
      </div>
      </Page>
  );
}
