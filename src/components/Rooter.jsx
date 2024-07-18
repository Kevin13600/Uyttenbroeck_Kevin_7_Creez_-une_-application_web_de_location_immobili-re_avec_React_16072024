import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Logement from '../pages/Logement';
import NotFound from '../pages/NotFound';
import About from '../pages/About';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/logement/:id" element={<Logement />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}