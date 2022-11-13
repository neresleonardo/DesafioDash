import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;    
    @media(max-width: 620px){
        flex-direction: column;
       
    }
`;

export const Aside = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    margin-bottom: 25px; 
    @media(max-width: 620px){
        width: 100%;
        flex-direction: column;
        align-items: center;
    }
`;

export const TextH4 = styled.h4`
    font-size: 2rem;
    color: ${props => props.theme.colors.white};
    font-weight: bold;
    padding-bottom: 10px;
    @media(max-width: 620px){
        
       
    }
`

export const Textp = styled.p`
    font-size: 1rem;
    color: #a9aab1;
    font-weight: bold;
`

export const ButtonCreate = styled.button`
    width: 150px;
    height: 50px;
    font-size: 1rem;
    background-color: #884fff;
    color: white;
    font-weight: bold;
    transition: opacity .3s;
    &:hover{
        opacity: .7;
    }
    @media(max-width: 620px){
        width: 100%;
        flex-direction: row-reverse;
    }
`