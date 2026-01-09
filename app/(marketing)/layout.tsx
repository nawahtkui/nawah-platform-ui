import MarketingNavbar from "../components/MarketingNavbar";
import Footer from "../components/Footer";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <MarketingNavbar />
      {children}
      <Footer />
    </>
  );
}
