import React, { useState } from 'react';
import { useNavigate  } from 'react-router-dom';
import Button from '../../components/Button';
import Input from '../../components/Input';
import api from '../../services/api';
import { Aside, AsideA, AsideTitle, BoxLogin, Container, Form, Main, Texta, Textp, TextTitles } from './styles';

const Register: React.FC = () => {

    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    async function handleRegister(e: any){
        e.preventDefault();

        const date = {
            email,
            password,
            name
        };

        try {

            const response = await api.post('user', date);
            navigate("/");
            alert("Salvo com sucesso!")

        }catch(err) {
            alert("Deu erro")
        }
    }

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
                        <Form onSubmit={handleRegister}>
                        <Input
                         type="text"
                         placeholder="Seu nome"
                         required
                         onChange={e => setName(e.target.value)}
                         />
                        <Input
                         type="email"
                         placeholder="Seu email"
                         required
                         onChange={e => setEmail(e.target.value)}
                         />
                        <Input
                        type="password"
                        placeholder="Crie uma senha"
                        required
                        onChange={e => setPassword(e.target.value)}
                        />
                        <Button>Registrar</Button>
                        </Form>
                    </BoxLogin>
                </Main>
            </Container>
        </div>
    );
}

export default Register;