import React, { useState } from 'react';
import Header from './components/header';
import Main from './components/Main';

const App = () => {
  const [activeSection, setActiveSection] = useState('yo');

  return (
    <div className="app">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <Main activeSection={activeSection} />
    </div>
  );
};

export default App;
