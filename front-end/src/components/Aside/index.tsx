
import React, {useState} from 'react';

import {
    MdDashboard,
    MdExitToApp,
} from 'react-icons/md';
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
}  from './styles';

  export function Aside() {

    const { signOut } = useAuth();
    const [toggleMenuIsOpened, ] = useState(false);

    return (
        <Container menuIsOpen={toggleMenuIsOpened}>
            <Header>

                <LogImg>

                </LogImg>
                <ProfileName>
                    <ProfileNameText>Leonardo </ProfileNameText>
                    <ProfileNameP>Programador</ProfileNameP>
                </ProfileName>
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