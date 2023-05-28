import logo from './logo.svg';
import './App.css';
import Header from './component/landingPage/header';
import BodySection from './component/landingPage/BodySection';
import Advertisement from './component/landingPage/Advertisement';
import Footer from './component/landingPage/Footer';
import Products from './component/landingPage/Products';
import Testamonial from './component/landingPage/Testamonial';
function App() {
  return (
    <>
<Header />  
<BodySection />
<Products />
<Testamonial />
<Advertisement />
<Footer />
</>
  );
}

export default App;
