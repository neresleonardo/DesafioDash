
import React, {useState} from 'react';

import {
    MdDashboard,
    MdExitToApp,
    MdClose,
    MdMenu,
} from 'react-icons/md';
import { json } from 'stream/consumers';
import { useAuth } from '../../hooks/auth';

import { 
    Container,
    Header,
    MenuContainer,
    MenuItemLink,
    MenuItemButton,
    MenuLabel,
    LogImg,
    ProfileName,
    ProfileNameText,
    ProfileNameP,
    ToggleMenu,
}  from './styles';

  export function Aside() {

    const { signOut } = useAuth();
    const [toggleMenuIsOpened, setToggleMenuIsOpened ] = useState(false);
    const data = JSON.parse(localStorage.getItem('@desafio-falife:client')!);
    console.log("data",data);
    
    
    

    const handleToggleMenu = () => {
        setToggleMenuIsOpened(!toggleMenuIsOpened);
    }

    return (
        <Container menuIsOpen={toggleMenuIsOpened}>
            <Header>

                <LogImg>

                </LogImg>
                <ProfileName>
                    <ProfileNameText>{data.name}</ProfileNameText>
                    <ProfileNameP>Programador</ProfileNameP>
                </ProfileName>

                <ToggleMenu onClick={handleToggleMenu}>
                { toggleMenuIsOpened ? <MdClose /> : <MdMenu /> }
                </ToggleMenu>
            </Header>

            <MenuContainer>

                <MenuLabel>Menu</MenuLabel>
                <MenuItemLink href="/">
                    <MdDashboard />
                    Dashboard
                </MenuItemLink>

                <MenuItemLink href="/annotation">
                    <MdDashboard />
                    Anotações
                </MenuItemLink>

                <MenuItemLink href="/config">
                    <MdDashboard />
                    Configurações
                </MenuItemLink>

                <MenuItemButton onClick={signOut}>
                    <MdExitToApp />
                    Sair
                </MenuItemButton>
            </MenuContainer>

        </Container>
    );
}