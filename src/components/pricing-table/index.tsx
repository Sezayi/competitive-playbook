import { tw } from 'twind';
import Check from '@/constants/svg/check.svg';
import Button from '@/components/button';

const features = [
  `Praktische video's voor elke fase`,
  `Anekdotes en praktijkervaringen`,
  `Een geupdate lijst met alle papa gear`,
  `Tips uit een community van vaders `,
  `Toegang tot de nieuwe papa's slack`,
];

const PricingTable = () => (
  <section className={tw(`bg-gradient-to-b from-gray-100 to-white shadow-inner pt-12`)}>
    <div className={tw(`relative max-w-7xl mx-auto mb-24`)}>
      <div className={tw(`overflow-hidden lg:max-w-none lg:flex`)}>
        <div className={tw(`py-8 px-6 md:px-0 lg:flex-shrink-1`)}>
          <h2 className={tw(`text-4xl lg:text-7xl font-bold text-gray-800 mb-12`)}>Klaar voor het vaderschap?</h2>
          <p className={tw(`mt-6 text-base leading-6 text-gray-500`)}>
            Als eerst, gefeliciteerd! Je bent waarschijnlijk op deze pagina terecht gekomen omdat jezelf, of een naaste, vader wordt. Super leuk, maar ook spannend! Geen zorgen. Deze cursus helpt je op weg en levert je praktische info vor het vaderschap.
          </p>
          <div className={tw(`mt-8`)}>
            <div className={tw(`flex items-center`)}>
              <h3
                className={tw(
                  `flex-shrink-0 pr-4 text-sm leading-5
                tracking-wider font-semibold uppercase text-indigo-600`,
                )}
              >
                Wat je allemaal krijgt
              </h3>
              <div className={tw(`flex-1 border-t-2 border-gray-200`)} />
            </div>
            <ul className={tw(`mt-8 lg:grid lg:grid-cols-2`)}>
              {features.map((feature) => (
                <li className={tw(`flex items-center lg:col-span-1`)} key={feature}>
                  <div className={tw(`flex-shrink-0`)}>
                    <Check className={tw(`h-8 w-8 mr-3 mb-1`)} />
                  </div>
                  <p className={tw(`text-gray-600`)}>{feature}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div
          className={tw(
            `py-8 px-6 text-center lg:flex-shrink-0
            lg:flex lg:flex-col lg:justify-center lg:p-12`,
          )}
        >
          <p className={tw(`text-lg font-medium text-gray-800`)}>Bestel het handboek, inclusief cursus</p>
          <div className={tw(`my-4 flex items-center justify-center text-6xl leading-none font-bold text-gray-800`)}>
            €49,-
          </div>
          <Button primary modifier="mt-6">
            Nu kopen
          </Button>
        </div>
      </div>
    </div>
  </section>
);

export default PricingTable;
