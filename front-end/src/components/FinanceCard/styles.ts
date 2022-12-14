import styled, { keyframes } from 'styled-components';

export const Container = styled.li`
    width: 100% ;
    background-color: ${props => props.theme.colors.primary};
    color:${props => props.theme.colors.white};
    list-style: none;
    border-radius: 10px;
    margin: 5px 0;
    padding: 8px 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    transition: all .3s;
    position: relative;
    > div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;    
        padding-left: 10px;    
    }
    > div span {
        font-size: 1rem;
        font-weight: 500;
    }
    
    
`;

export const Row = styled.div`
    display: flex !important;
    align-items: center;
    gap: 10px;
    flex-direction: row !important;
`;

export const ButtonDelete = styled.button`
    color:${props => props.theme.colors.warning};
    background-color: transparent;
`;