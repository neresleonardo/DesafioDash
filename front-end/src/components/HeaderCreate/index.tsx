import React, { ReactNode } from 'react';
import Input from '../../components/Input';
import { Aside, Container, TextH4, Textp, ButtonCreate } from './styles';

interface ICreate {
    titulo: string;
    handleClickOpen: () => void;
}

const HeaderCreate: React.FC<ICreate> = ({
    titulo, handleClickOpen
}) => {



    return(
        <Container>
            <Aside>
                <TextH4>{titulo}</TextH4>
                <Textp>É assim que você conhece exatamente a sua renda, os seus gastos e o que pode ser melhorado para sobrar mais dinheiro no fim do mês.</Textp>
            </Aside>
            <ButtonCreate onClick={() => handleClickOpen()}>Registrar</ButtonCreate>
        </Container>
    );
}

export default HeaderCreate;