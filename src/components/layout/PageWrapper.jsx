import Navbar from './Navbar';
import BackToTop from '../common/BackToTop';

export default function PageWrapper({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <BackToTop />
    </>
  );
}
