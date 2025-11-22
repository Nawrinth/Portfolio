import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import './index.css';
import App from './App.jsx';
import DetailsProject from './pages/DetailsProject.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/projects/:id" element={<DetailsProject />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
