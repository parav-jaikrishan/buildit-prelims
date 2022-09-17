import './App.css';
import { Home } from './pages/Home';
import { Shopping } from './pages/Shopping';
import { Maps } from './pages/Maps';
import { Pokedex } from './pages/Pokedex';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/shop" element={<Shopping/>}/>
        <Route path="/maps" element={<Maps/>}/>
        <Route path="/pokedex" element={<Pokedex/>}/>
      </Routes>
    </Router>
  );
}

export default App;