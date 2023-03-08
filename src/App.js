import { BrowserRouter as Router } from 'react-router-dom'

import Navbar from './pages/Navbar';
import Footer from './pages/Footer';
import AnimatedLink from './components/AnimatedLink';


function App() {
  return (

    <Router>
      <Navbar />

      <AnimatedLink />
      <Footer />
    </Router>


  );
}

export default App;
