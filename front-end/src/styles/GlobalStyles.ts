import { createGlobalStyle } from 'styled-components';


// Estilo Global
export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;  // borda na caixa( dentro da caixa), não fora! 
    }
    html, body, #root {
        height: 100%;
    }
    *, button, input {
        border: 0;
        outline: 0;
        font-family: 'Roboto', sans-serif;
    }
    button {
        cursor: pointer;
    }
    .react-modal-overlay {
        background: RGB(90, 77, 123,0.1);
        backdrop-filter: blur(5px);
        -webkit-backdrop-filter: blur(5px);
        position: fixed;
        top:0;
        bottom: 0;
        right: 0;
        left:0;
        display:flex;
        align-items: center;
        justify-content: center;
    }
    .react-modal-content {
        width: 100%;
        max-width:576px;
        background: #f7f7f7;
        padding: 3rem;
        position: relative;
        border-radius: 0.25rem;
    }
`;