import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './style.css';
import Landing from './pages/Landing';
import JourneyPage from './pages/JourneyPage';
import SolutionPage from './pages/SolutionPage';
import DemoPage from './pages/DemoPage';
import TeamPage from './pages/TeamPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/journey" element={<JourneyPage />} />
        <Route path="/solution" element={<SolutionPage />} />
        <Route path="/demo" element={<DemoPage />} />
        <Route path="/team" element={<TeamPage />} />
      </Routes>
    </BrowserRouter>
  );
}

createRoot(document.getElementById('app')!).render(<App />);
