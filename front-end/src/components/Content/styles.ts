import styled from 'styled-components';

export const Container = styled.div`
    background-color: ${props => props.theme.colors.secondary};
    grid-area: CT;
    color: white;
    padding: 25px;  
    height: calc(100vh - 70px); 
    overflow-y: scroll;
    ::-webkit-scrollbar {
        width: 10px;
    }
    ::-webkit-scrollbar-thumb {
        background-color: white;
        border-radius: 10px;
    }
    ::-webkit-scrollbar-track {
        background-color: white;
    }
`;