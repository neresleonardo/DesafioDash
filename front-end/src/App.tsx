import React from 'react';
import Dashboard from './pages/Dashboard';
import Register from './pages/Register';
import SignIn from './pages/SignIn';
import GlobalStyles from './styles/GlobalStyles';
import Routes from './router';

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Routes/>
    </div>
  );
}

export default App;
