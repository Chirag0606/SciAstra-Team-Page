import React from 'react';
import './index.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './Components/Navbar';
import Uni from './Components/Uni';
import Mentors from './Components/Mentors';
import Advisor from './Components/Advisor';
import Footer from './Components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Uni />
      <Mentors />
      <Advisor />
      <Footer />
    </>
  );
}

export default App;
