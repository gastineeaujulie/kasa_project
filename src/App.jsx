// import { useState } from 'react'
import './styles/App.scss';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Footer from './components/Footer.jsx';
import ErrorPage from './components/ErrorPage.jsx';
import Logement from './pages/Logement.jsx';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/error" element={<ErrorPage />} />
        <Route path="/logement/:id" element={<Logement />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
