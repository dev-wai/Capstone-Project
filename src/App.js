import './App.css';
import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Main from './components/Main';
import Footer from './components/Footer/Footer';
import About from './components/About';

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Main />
      <Footer />
    </>
  );
}

export default App;