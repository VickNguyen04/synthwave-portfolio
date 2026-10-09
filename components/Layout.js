import Nav from './Nav';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <div className="shell">
      <div className="crt-overlay" />
      <Nav />
      <main className="content">{children}</main>
      <Footer />
    </div>
  );
}
