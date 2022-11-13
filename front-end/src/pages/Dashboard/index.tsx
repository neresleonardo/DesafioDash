import React, { useEffect, useState } from 'react';
import FinanceCard from '../../components/FinanceCard';
import HeaderCreate from '../../components/HeaderCreate';
import { Container, Content, Form } from './styles';

import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Input from '../../components/Input';
import Button from '../../components/Button';
import api from '../../services/api';
import { useNavigate } from 'react-router-dom';

const Dashboard: React.FC = () => {

    const navigate = useNavigate();
    const [post, setPost] = React.useState([]);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState('');
    const [id, setId] = useState('');

    async function handleRegister(e: any){
        e.preventDefault();
    
        const date = {
            title,
            description,
            amount,
            id
        };
    
        try {
    
            const response = await api.post('transaction', date);
            navigate("/");
    
        }catch(err) {
            alert("Deu erro")
        }
    }
    
    const getdataTransaction = () => {
            api.get("transaction").then((response) => {
              setPost(response.data);
            });
    }

    React.useEffect(() => {
        getdataTransaction()
    })


    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        getdataTransaction();
    };
    return (
        <div>
            <Container>
                <Content>
                    <HeaderCreate handleClickOpen={handleClickOpen} titulo="Ganhos e dívidas" />
                </Content>
                <Content>
                {post.map(post => (
                    <FinanceCard
                    id={post['id']}
                    key={post['id']}
                    title={post['title']}
                    description={post['description']}
                    amont={post['amount']}
                    ></FinanceCard>
                ))}
                </Content>
            </Container>

            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="draggable-dialog-title"
            >
                <DialogContent>
                    <DialogTitle>
                        Registrando uma transação
                    </DialogTitle>
                    <Form onSubmit={handleRegister}>
                        <Input 
                        placeholder='Titulo'
                        onChange={e => setTitle(e.target.value)}
                        />
                        <Input
                        placeholder='Descrição'
                        onChange={e => setDescription(e.target.value)}
                        />
                        <Input 
                        placeholder='Valor' 
                        type="number"
                        onChange={e => setAmount(e.target.value)}
                        />
                        <Button type='submit' onClick={handleClose} >Salvar</Button>
                    </Form>
                </DialogContent>
            </Dialog>
        </div>
    );
}

export default Dashboard;