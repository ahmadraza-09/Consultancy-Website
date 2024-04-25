import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import OppeningJobs from './pages/oppeningjobs';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route  path="/" element={<Home/>}/>
          <Route  path="/oppeningjobs" element={<OppeningJobs/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
