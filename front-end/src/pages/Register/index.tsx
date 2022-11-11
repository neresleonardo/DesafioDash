import React from 'react';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { Aside, AsideA, AsideTitle, BoxLogin, Container, Main, Texta, Textp, TextTitles } from './styles';

const Register: React.FC = () => {
    return(
        <div>
            <Container>
                <Aside>
                    <AsideTitle>
                        Dash.io
                    </AsideTitle>
                    <AsideA>
                        Flexível e gratuita de organizar planos, projetos e mais.
                    </AsideA>
                </Aside>
                <Main>
                    <BoxLogin> 
                        <TextTitles>
                            Registro
                        </TextTitles>
                        <Input
                         type="email"
                         placeholder="Crie um e-mail"
                         required
                         />
                        <Input
                        type="password"
                        placeholder="Crie uma senha"
                        required
                        />
                        <Input
                        type="password"
                        placeholder="Confirme sua senha"
                        required
                        />
                        <Button>Registrar</Button>
                    </BoxLogin>
                </Main>
            </Container>
        </div>
    );
}

export default Register;