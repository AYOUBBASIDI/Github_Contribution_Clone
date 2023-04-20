import './App.css';
import React, { useState , useEffect } from 'react';
import Loading from './components/loading';
import Contribution from './components/contribution.js';

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="App">
      {loading && <Loading />}
      {!loading && <Contribution />}
    </div>
  );
}

export default App;
