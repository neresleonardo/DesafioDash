import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex: 1;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    @media(max-width: 600px){
        flex-direction: column;
    }
`

export const Aside = styled.aside`
    height: 100vh;
    width: 50%;
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #5531f3;
    border-top-right-radius: 70px;
    border-bottom-right-radius: 70px;
    @media(max-width: 600px){
        width: 100%;
        border-top-right-radius: 0px;
        border-bottom-right-radius: 50px;
        border-bottom-left-radius: 50px;
    }
`
export const Form = styled.form`
    display: flex;
    flex-direction: column;
`

export const AsideTitle = styled.text`
    font-size: 5rem;
    font-weight: bold;
    color: white;
    padding: 10px;
`

export const AsideA = styled.text`
    font-size: 1rem;
    color: white;
    padding: 10px;
    @media(max-width: 600px){
        font-size: 0.7rem;
    }
`

export const Main = styled.main`
    height: 100vh;
    width: 50%;
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    @media(max-width: 600px){
        width: 100%;
    }
`

export const BoxLogin = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    @media(max-width: 600px){
        width: 80%;
    }
`

export const TextTitles = styled.text`
    font-size: 1.5rem;
    font-weight: bold;
    padding: 10px;
    color: #090748;
`
export const Textp = styled.text`
    font-size: 1rem;
    padding: 10px;
    color: #c6c6c6;
`

export const Texta = styled.text`
    font-size: 1rem;
    padding: 10px;
    color: #c6c6c6;
    cursor: pointer;
`

