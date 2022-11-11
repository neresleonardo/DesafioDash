import React from 'react';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Register from './pages/Register';
import SignIn from './pages/SignIn';
import GlobalStyles from './styles/GlobalStyles';

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      {/* <SignIn/>
      <Register/> */}
      <Layout/>
    </div>
  );
}

export default App;
