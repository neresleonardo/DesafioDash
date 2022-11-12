import styled, { keyframes } from 'styled-components';

export const Container = styled.li`
    width: 100% ;
    background-color: #40486d;
    color:white;
    list-style: none;
    border-radius: 10px;
    margin: 10px 0;
    padding: 12px 10px;
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
        font-size: 22px;
        font-weight: 500;
    }
    
    
`;