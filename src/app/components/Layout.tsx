import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="site-layout">
      <Header />
      <main id="main-content" role="main" className="site-main">
        {children}
      </main>
      <Footer />
    </div>
  );
}