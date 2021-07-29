import '../styles/globals.css'
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;


// library.add(fab, faCoffee)

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
