import "@sneyed/zenith/zenith.css";
import "../styles/globals.css";
import { ThemeProvider } from "@sneyed/zenith";
import theme from "../styles/theme.module.css";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
