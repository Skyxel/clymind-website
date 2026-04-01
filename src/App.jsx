import PageWrapper from './components/layout/PageWrapper';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import PartnersPage from './pages/PartnersPage';
import AboutPage from './pages/AboutPage';
import './styles/globals.css';

const ROUTES = {
  '/': HomePage,
  '/product': ProductPage,
  '/partners': PartnersPage,
  '/about': AboutPage,
};

export default function App() {
  const path = window.location.pathname;
  const Page = ROUTES[path] ?? HomePage;

  return (
    <PageWrapper>
      <Page />
    </PageWrapper>
  );
}
