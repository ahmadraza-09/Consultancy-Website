import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import OppeningJobs from './pages/oppeningjobs';
import Service from './pages/service';
import IndustryPractice from './pages/industrypractice';
import Faq from './pages/faq';
import OurBranches from './pages/ourbranches';
import Contact from './pages/contact';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route  path="/" element={<Home/>}/>
          <Route  path="/oppeningjobs" element={<OppeningJobs/>}/>
          <Route  path="/services" element={<Service/>}/>
          <Route  path="/industrypractice" element={<IndustryPractice/>}/>
          <Route  path="/faq" element={<Faq/>}/>
          <Route  path="/ourbranches" element={<OurBranches/>}/>
          <Route  path="/contact" element={<Contact/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
