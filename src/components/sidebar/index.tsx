import { tw, css } from "twind/css";
import { useSession } from "next-auth/client";
import Link from "next/link";

export default function SideBar() {
  const [session] = useSession();

  return (
    <div
      className={tw(
        `min-h-screen flex flex-col flex-shrink-0 antialiased bg-gray-50 text-gray-800`
      )}
    >
      <div
        className={tw(
          `fixed flex flex-col top-0 left-0 w-64 bg-gray-900 h-full shadow-lg`
        )}
      >
        <div className={tw(`flex items-center h-24 border-b border-gray-800`)}>
          {/*<img*/}
          {/*              className={tw(`ml-6 w-12 h-12 rounded-2xl `)}*/}
          {/*              src={session.user.image}*/}
          {/*            />*/}
          <img
            src="https://scontent.fmnl13-1.fna.fbcdn.net/v/t1.0-9/117334168_2606581056324669_4951020710334194218_o.jpg?_nc_cat=101&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeFo4bRKc5SfTQvzhwotnTaOfj1P6rO41HF-PU_qs7jUcU1pCerqu3HUsOB0yKyJQwnrgz8Au7GZADcpedo6WgM4&_nc_ohc=DWpkI3p4RSUAX_hKF_Y&_nc_ht=scontent.fmnl13-1.fna&oh=c13c63ee952123b14f0da72b99ccecc8&oe=6087FEC5"
            alt=""
            className="rounded-full h-10 w-10 flex items-center justify-center mr-3 border-2 border-purple-500"
          />
          <div className={tw(`ml-1`)}>
            <p
              className={tw(
                `text-md font-medium tracking-wide truncate text-gray-100 font-sans`
              )}
            >
              Het Papa Handboek
            </p>

            <div className={tw(`badge`)}>
              <span
                className={tw(
                  `px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-purple-800 bg-purple-100 rounded-full`
                )}
              >
                {session?.user.name}
              </span>
            </div>
          </div>
        </div>
        <div className={tw(`overflow-y-auto overflow-x-hidden flex-grow`)}>
          <ul className={tw(`flex flex-col py-6 space-y-1`)}>
            <li className={tw(`px-5`)}>
              <div className={tw(`flex flex-row items-center h-8`)}>
                <div
                  className={tw(
                    `flex font-semibold text-lg text-gray-300 my-4 font-sans uppercase`
                  )}
                >
                  Hoofdstukken
                </div>
              </div>
            </li>
            <Link href="/intro">
              <li>
                <a
                  href="#"
                  className={tw(
                    `relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-700 text-gray-200 hover:text-gray-200 border-l-4 border-transparent hover:border-purple-500 pr-6`
                  )}
                >
                  <span
                    className={tw(
                      `inline-flex justify-center items-center ml-4`
                    )}
                  >
                    {/* <svg className={tw(`w-5 h-5`)} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg> */}
                  </span>
                  <span
                    className={tw(
                      `ml-2 font-semibold text-sm tracking-wide truncate font-sans`
                    )}
                  >
                    Introductie
                  </span>
                </a>
              </li>
            </Link>
            <li className={tw(`px-5`)}>
              <div className={tw(`flex flex-row items-center h-8`)}>
                <div
                  className={tw(
                    `flex font-semibold text-sm text-gray-300 my-4 font-sans uppercase`
                  )}
                >
                  Voor de bevalling
                </div>
              </div>
            </li>
            <Link href="/eerste-week">
              <li>
                <a
                  href="#"
                  className={tw(
                    `relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-700 text-gray-200 hover:text-gray-200 border-l-4 border-transparent hover:border-purple-500 pr-6`
                  )}
                >
                  <span
                    className={tw(
                      `inline-flex justify-center items-center ml-4`
                    )}
                  >
                    {/* <svg className={tw(`w-5 h-5`)} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"></path></svg> */}
                  </span>
                  <span
                    className={tw(
                      `ml-2 font-semibold text-sm tracking-wide truncate font-sans`
                    )}
                  >
                    De eerste week
                  </span>
                  {/* <span className={tw(`px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-purple-500 bg-purple-100 rounded-full`)}>New</span> */}
                </a>
              </li>
            </Link>
            <li className={tw(`px-5`)}></li>
            <li>
              <a
                href="#"
                className={tw(
                  `relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-700 text-gray-200 hover:text-gray-200 border-l-4 border-transparent hover:border-purple-500 pr-6`
                )}
              >
                <span
                  className={tw(`inline-flex justify-center items-center ml-4`)}
                >
                  {/* <svg className={tw(`w-5 h-5`)} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg> */}
                </span>
                <span
                  className={tw(
                    `ml-2 font-semibold text-sm tracking-wide truncate font-sans`
                  )}
                >
                  Vaderschapsverlof
                </span>
              </a>
            </li>
            <li className={tw(`px-5`)}>
              <div className={tw(`flex flex-row items-center h-8`)}>
                <div
                  className={tw(
                    `flex font-semibold text-sm text-gray-300 my-4 font-sans uppercase`
                  )}
                >
                  Tijdens de bevalling
                </div>
              </div>
            </li>
            <li>
              <a
                href="#"
                className={tw(
                  `relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-700 text-gray-200 hover:text-gray-200 border-l-4 border-transparent hover:border-purple-500 pr-6`
                )}
              >
                <span
                  className={tw(`inline-flex justify-center items-center ml-4`)}
                >
                  {/* <svg className={tw(`w-5 h-5`)} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg> */}
                </span>
                <span
                  className={tw(
                    `ml-2 font-semibold text-sm tracking-wide truncate font-sans`
                  )}
                >
                  Settings
                </span>
              </a>
            </li>
            <li className={tw(`px-5`)}>
              <div className={tw(`flex flex-row items-center h-8`)}>
                <div
                  className={tw(
                    `flex font-semibold text-sm text-gray-300 my-4 font-sans uppercase`
                  )}
                >
                  Na de bevalling
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
