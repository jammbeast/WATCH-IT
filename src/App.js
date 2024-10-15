import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';

import Home from './pages/home';
import About from './pages/terms-of-service';
import Auth from './pages/auth';
import './index.css'; 




  function App() {
    return (
    <BrowserRouter>
      
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/auth" element={<Auth/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;