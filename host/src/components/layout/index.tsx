import Link from 'next/link';
import Subnav from "./subnav";

const Header = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <i className="fas fa-bars fa-lg sidemenu-toggle-icon"></i>
    <Link href="/" className="navbar-brand">Microfrontend Site</Link>
  </nav>
);

const Footer = () => (
  <div className="text-center text-muted">
      Dream.mf - 2024
  </div>
)

interface LayoutProps {
  children: React.ReactNode
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <Subnav />
      <div className="container mt-4">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;