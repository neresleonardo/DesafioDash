import styled from "styled-components"

export const Container = styled.div`
    grid-area: MH;
    background-color: ${props => props.theme.colors.primary};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
`;

export const Profile = styled.div`
    color: black;
    font-weight: bold;
    font-size: 1.4rem;
    font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
`;

export const Welcome = styled.h3``;

export const UserName = styled.span``;