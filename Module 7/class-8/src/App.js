import React from 'react';

import Navigation from './components/Navigation/Navigation';
import Header from './components/Header/Header';
import Offer from './components/Offre/Offer';
import Recomendation from './components/Recommendation/Recomendation';

function App() {
  return (
    <div>
      <Navigation/>
      <Header/>
      <Offer/>
      <Recomendation/>
    </div>
  );
}

export default App;
