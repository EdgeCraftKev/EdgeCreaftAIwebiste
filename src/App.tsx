import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { 
  Heart, 
  Video, 
  Camera, 
  Users, 
  Sparkles, 
  ArrowRight, 
  Check,
  DollarSign,
  Building2,
  Linkedin
} from 'lucide-react';
import Header from './components/Header';
import LegalPage from './components/LegalPage';
import HomePage from './components/HomePage';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/legaldocuments" element={<LegalPage />} />
    </Routes>
  );
};

export default App;
