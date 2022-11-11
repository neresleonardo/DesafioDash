import styled from 'styled-components';

export const Container = styled.div`
    grid-area: CT;
    color: white;
    background-color: white;
    padding: 25px;  
    height: calc(100vh - 70px); 
    overflow-y: scroll;
    ::-webkit-scrollbar {
        width: 10px;
    }
    ::-webkit-scrollbar-thumb {
        background-color: blue;
        border-radius: 10px;
    }
    ::-webkit-scrollbar-track {
        background-color: blue;
    }
`;