import React from 'react';
import Register from './pages/Register';
import SignIn from './pages/SignIn';
import GlobalStyles from './styles/GlobalStyles';

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      {/* <SignIn/> */}
      <Register/>
    </div>
  );
}

export default App;
