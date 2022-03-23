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
        <Route exact path='/' element={<Home/>} />

        <Route exact  path='/press' element={<Press/>} />
        <Route   path='/press-details/:press' element={<PressDetails/>} />
        
        <Route exact  path='/blog-listing' element={<BlogListing/>} />
        <Route   path='/blog-listing/:category' element={<BlogListing/>} />

        <Route   path='/blog-details/:blog' element={<BlogDetail/>} />
        <Route  exact path='/become-buyer' element={<BecomeBuyer/>} />
        <Route  exact path='/become-seller' element={<BecomeSeller/>} />
        <Route  exact  path='/about-us' element={<AboutUs/>} />
        <Route  exact path='/terms' element={<TermsAndCondition/>} />
        <Route  exact path='/return' element={<ReturnPolicy/>} />
        <Route  exact path='/privacy' element={<PrivacyPolicy/>} />
        <Route  exact path='/careers' element={<Careers/>} />
        <Route  exact path='/faq' element={<FAQ/>} />
      </Routes>
<Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
