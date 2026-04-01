import Navbar from './Navbar';
import Footer from './Footer';
import BackToTop from '../common/BackToTop';

export default function PageWrapper({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
      <BackToTop />
    </>
  );
}
