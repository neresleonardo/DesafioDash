import React, { useState } from 'react';
import { Container } from './styles';
import Toggle from '../../components/Toggle'
import { useTheme } from '../../hooks/theme';

const Config: React.FC = () => {

    const { toggleTheme, theme } = useTheme();

    const [darkTheme, setDarkTheme] = useState(() => theme.title === 'dark' ? true : false);

    const handleChangeTheme = () => {
        setDarkTheme(!darkTheme);
        toggleTheme();
    }

    return (
        <div>
            <Container>
                <Toggle 
                labelLeft="Claro"
                labelRight="Escuro"
                checked={darkTheme}
                onChange={handleChangeTheme}
                />
            </Container>

          
        </div>
    );
}

export default Config;