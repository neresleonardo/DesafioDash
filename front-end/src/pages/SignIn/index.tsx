import React from 'react';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { Aside, AsideA, AsideTitle, BoxLogin, Container, Main, Texta, Textp, TextTitles } from './styles';

const SignIn: React.FC = () => {
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
                            Seja bem-vindo(a)
                        </TextTitles>
                        <Textp>
                            flexível e gratuita de organizar planos, projetos e mais.
                        </Textp>
                        <Input
                         type="email"
                         placeholder="E-mail"
                         required
                         />
                        <Input
                        type="password"
                        placeholder="Senha"
                        required
                        />
                        <Button>Entrar</Button>
                        <Texta>
                            Esqueceu sua senha?
                        </Texta>
                    </BoxLogin>
                </Main>
            </Container>
        </div>
    );
}

export default SignIn;