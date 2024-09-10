import './app.css'
import Nav from './components/nav'
import About from './routes/About';
import Home from './routes/Home';
import { useState } from 'preact/hooks';

import { Router, Link } from 'preact-router';



export function App() {

  const [currentUrl, setCurrentUrl] = useState('');

  const handleRoute = (e) => {
    console.log(e.url)
    setCurrentUrl(e.url);
  };

  return (
    <>
      <div class="flex">
      <Nav/>
      <Router onChange={handleRoute}>
        <Home path="/" />
        <About path="/about" />
      </Router>

      </div>

    </>
  )
}
