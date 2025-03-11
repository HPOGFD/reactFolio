// src/App.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/HeaderComponent';
import Footer from './components/FooterComponent';
import { Container } from 'react-bootstrap';

function App() {
  console.log('App.js is running');
  return (
    <div className="bg-dark text-white min-vh-100 d-flex flex-column">
      <Header />
      <Container as="main" className="flex-grow-1 py-5">
        <Outlet />
      </Container>
      <Footer />
    </div>
  );
}

export default App;