import { AppProps } from 'next/app';
import '@/styles/global.css';
import '@fontsource/inter';
import { Provider } from 'next-auth/client'

import { setup } from 'twind';
import twindConfig from '../twind.config';

if (typeof window !== `undefined`) {
  setup(twindConfig);
}

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
  <Provider session={pageProps.session}>
    <Component {...pageProps}/>
  </Provider>
  )
}
