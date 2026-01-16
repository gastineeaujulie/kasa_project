// import { useState } from 'react'
import './styles/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Banner from './components/Banner.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Banner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
