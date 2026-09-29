import "./globals.css";
import { StoreProvider } from "./store";
import { Footer, Header, Search } from "./components";

export const metadata = {
  title: "AB Collection — Pakistani Fashion, Thoughtfully Made",
  description: "Discover AB Collection: considered fragrances and bags for every occasion.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body><StoreProvider><Header />{children}<Footer /><Search /></StoreProvider></body>
    </html>
  );
}
