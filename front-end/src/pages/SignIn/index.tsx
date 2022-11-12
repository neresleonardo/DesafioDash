import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { useAuth } from '../../hooks/auth';
import { Aside, AsideA, AsideTitle, BoxLogin, Container, Form, Main, Texta, Textah, Textp, TextTitles } from './styles';

const SignIn: React.FC = () => {

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const { signIn } = useAuth();

    return (
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
                        <Form onSubmit={() => signIn(email, password)}>
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
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <Input
                                type="password"
                                placeholder="Senha"
                                required
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <Button type="submit">Entrar</Button>

                        </Form>
                        
                        <Textah href='/register'>
                        <Button type="submit">Criar uma conta</Button>
                        </Textah>
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