import GlobalStyles from './css/global';
import Header from './components/header';
import Client from './components/client';
import Integration from './components/integration';
import Contact from './components/contact';
import Newsletter from './components/newsletter';
import Footer from './components/footer';

function App() {
  return (
    <>
      <GlobalStyles/>
      <Header/>
      <Client/>
      <Integration />
      <Contact/>
      <Newsletter/>
      <Footer />
    </>
  );
}

export default App;