import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';


import Routes from './router';


const App: React.FC = () => {
    
    return (
        <div>
            <GlobalStyles />
            <Routes/>
        </div>
    );
}

export default App;