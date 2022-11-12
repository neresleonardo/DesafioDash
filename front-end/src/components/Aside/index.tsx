
import React, {useState} from 'react';

import {
    MdDashboard,
    MdArrowDownward,
    MdArrowUpward,
    MdExitToApp,
} from 'react-icons/md';

import { 
    Container,
    Header,
    Title,
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

                <MenuItemLink href="/">
                    <MdDashboard />
                    Configurações
                </MenuItemLink>

                <MenuItemButton>
                    <MdExitToApp />
                    Sair
                </MenuItemButton>
            </MenuContainer>

        </Container>
    );
}