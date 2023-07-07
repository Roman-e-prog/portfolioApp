import React from 'react';
import './app.scss';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/home/Home';
import Uebermich from './pages/uebermich/Uebermich';
import Referenzen from './pages/referenzen/Referenzen';
import Lebenslauf from './pages/lebenslauf/Lebenslauf';
import Sprachen from './pages/sprachen/Sprachen';
import Kontakt from './pages/kontakt/Kontakt';
import Dashboard from './pages/dashboard/Dashboard';
import Login from './pages/login/Login';
import BerufsstationenEdit from './pages/dashboard/berufsstationenEdit/BerufsstationenEdit';
import UeberMichEdit from './pages/dashboard/ueberMichEdit/UeberMichEdit';
import ReferenzenEdit from './pages/dashboard/referenzenEdit/ReferenzenEdit';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/uebermich" element={<Uebermich/>}/>
          <Route path="/Projekte" element={<Referenzen/>}/>
          <Route path="/Lebenslauf" element={<Lebenslauf/>}/>
          <Route path="/Skills" element={<Sprachen/>}/>
          <Route path="/Kontakt" element={<Kontakt/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/login" element={<Login/>}/>
          {/* Edit */}
          <Route path="/berufsstationenEdit/:id" element={<BerufsstationenEdit/>}/>
          <Route path="/ueberMichEdit/:id" element={<UeberMichEdit/>}/>
          <Route path="/referenzenEdit/:id" element={<ReferenzenEdit/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
