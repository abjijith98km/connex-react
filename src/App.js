// import './App.css';
import { BrowserRouter, Routes, Route  ,Navigate , Outlet} from "react-router-dom";
import Press from './pages/Press';
import PressDetails from './pages/PressDetails';
import BlogDetail from './pages/BlogDetail';
import BlogListing from './pages/BlogListing';
import Home from './pages/Home';
import Header from './includes/Header';
import Footer from './includes/Footer';
import BecomeBuyer from './pages/BecomeBuyer';
import BecomeSeller from './pages/BecomeSeller';
import AboutUs from "./pages/AboutUs";
import TermsAndCondition from "./pages/TermsAndCondition";
import ReturnPolicy from "./pages/ReturnPolicy";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Careers from "./pages/Careers";
import FAQ from "./pages/FAQ";
function App() {

  return (
    <BrowserRouter>
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/press' element={<Press/>} />
        <Route path='/press-details' element={<PressDetails/>} />
        <Route path='/blog-details' element={<BlogDetail/>} />
        <Route path='/blog-listing' element={<BlogListing/>} />
        <Route path='/become-buyer' element={<BecomeBuyer/>} />
        <Route path='/become-seller' element={<BecomeSeller/>} />
        <Route path='/about-us' element={<AboutUs/>} />
        <Route path='/terms' element={<TermsAndCondition/>} />
        <Route path='/return' element={<ReturnPolicy/>} />
        <Route path='/privacy' element={<PrivacyPolicy/>} />
        <Route path='/careers' element={<Careers/>} />
        <Route path='/faq' element={<FAQ/>} />
      </Routes>
<Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
