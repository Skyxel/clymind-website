import PageWrapper from './components/layout/PageWrapper';
import HomePage from './pages/HomePage';
import PartnersPage from './pages/PartnersPage';
import './styles/globals.css';

const ROUTES = {
  '/': HomePage,
  '/partners': PartnersPage,
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
