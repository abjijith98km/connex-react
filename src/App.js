// import './App.css';
import {useEffect , useState} from 'react'
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
import SupplierAbout from './pages/SupplierAbout';
function App() {
  const [data, setdata] = useState()
  useEffect(() => {
    // fetch('https://safqat.pixelflames.net/wp-json/acf/v3/pages?slug[]=press')
    // .then(response => response.json())
    // .then(json => {setdata(json) ;})
  }, []);
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
        <Route path='/supplier-about' element={<SupplierAbout/>} />
      </Routes>
<Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
