import './App.css';
import { Home } from './pages/Home';
import { Shopping } from './pages/Shopping';
import { Maps } from './pages/Maps';
import { Gyms } from './pages/Gyms';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/shop" element={<Shopping/>}/>
        <Route path="/maps" element={<Maps/>}/>
        <Route path="/gyms" element={<Gyms/>}/>
      </Routes>
    </Router>
  );
}

export default App;