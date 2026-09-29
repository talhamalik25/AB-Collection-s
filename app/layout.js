import "./globals.css";
import { StoreProvider } from "./store";
import { Footer, Header, Search } from "./components";

export const metadata = {
  title: "Gulnaar Studio — Thoughtful pieces for everyday",
  description: "A love letter to getting dressed. Discover considered Pakistani fashion, made with care.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body><StoreProvider><Header />{children}<Footer /><Search /></StoreProvider></body>
    </html>
  );
}
