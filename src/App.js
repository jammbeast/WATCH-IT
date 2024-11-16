import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/home';
import About from './pages/terms-of-service';
import Auth from './pages/auth';
import EmailAuth from './pages/emailAuth'; // Страница для почты и пароля
import EmailConfirm from './pages/emailConfirm'; // Страница подтверждения
import './index.css'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/email" element={<EmailAuth />} /> {/* Страница авторизации с email и паролем */}
        <Route path="/email/confirm" element={<EmailConfirm />} /> {/* Страница подтверждения почты */}
      </Routes>
    </Router>
  );
}

export default App;
