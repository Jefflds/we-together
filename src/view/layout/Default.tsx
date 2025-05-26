import { Footer } from "./footer/Footer";
import { Header } from "./header/Header";

export function DefaultLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
