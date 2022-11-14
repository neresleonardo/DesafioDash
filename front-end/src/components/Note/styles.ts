import styled from 'styled-components';

export const Container = styled.div`
    width: 30%;
    height: 250px;
    margin: 10px;
    border-radius: 20px;
    background-color: ${props => props.theme.colors.primary};
    display: flex;
    flex-direction: column;
    @media(max-width: 900px){
        width: 100vw;
        display: flex;
        flex-direction: column;
    }
    @media(max-width: 600px){
        display: flex;
        flex-direction: column;
    }
`;

export const HeaderNote = styled.div`
    width:100%;
    height: 40px;
    padding: 20px;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
`;

export const Button = styled.button`
    background-color: transparent;
    color: ${props => props.theme.colors.box};
`;

export const Texth1 = styled.text`
    font-size: 1rem;
    font-weight: bold;
    color: ${props => props.theme.colors.white};
`;

export const Description = styled.div`
    font-size: 1rem;
    font-weight: bold;
    padding: 20px;
    max-width: 400px;
    color: ${props => props.theme.colors.white};
`;