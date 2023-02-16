import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './pages/Footer';
import Home from './pages/Home';
import Navbar from './pages/Navbar';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />

      </Routes>
      <Footer />
    </Router>

  );
}

export default App;
