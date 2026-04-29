import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MobileFrame } from './ui/components/MobileFrame';
import { ToastContainer } from './ui/components/ToastContainer';
import { EntryPage } from './ui/pages/EntryPage';
import { MapPage } from './ui/pages/MapPage';

function App() {
  return (
    <BrowserRouter>
      <MobileFrame>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<EntryPage />} />
          <Route path="/map" element={<MapPage />} />
        </Routes>
      </MobileFrame>
    </BrowserRouter>
  );
}

export default App;
