import './App.css';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
    </Router>
  );
}

export default App;