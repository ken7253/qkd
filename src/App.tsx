import React from 'react';
import Contents from './components/Contents';
import Footer from './components/Footer';
import Header from './components/Header';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Contents />
      <Footer />
    </>
  );
};

export default App;
