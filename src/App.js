import './App.css';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Shopping } from './pages/Shopping';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/shop" element={<Shopping/>}/>
      </Routes>
    </Router>
  );
}

export default App;