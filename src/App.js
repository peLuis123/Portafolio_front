import React, { useState } from 'react';
import Header from './components/header/header';
import Main from './components/Main';


const App = () => {
  const [activeSection, setActiveSection] = useState('Inicio');

  return (
    <div className="app">
      <Main activeSection={activeSection} />
    </div>
  );
};

export default App;
