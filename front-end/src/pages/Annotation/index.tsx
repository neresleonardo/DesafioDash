import React, { useState } from 'react';
import HeaderCreate from '../../components/HeaderCreate';
import { Container, Content, Form } from './styles';

import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Note from '../../components/Note';
import api from '../../services/api';
import { useNavigate } from 'react-router-dom';

const Annotation: React.FC = () => {

    const [annotations, setAnnotations] = React.useState([]);
    const navigate = useNavigate();
    const [post, setPost] = React.useState([]);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState('');
    const [open, setOpen] = React.useState(false);

    const getdataTransaction = () => {
        api.get("annotations").then((response) => {
            setAnnotations(response.data);
        });
}

React.useEffect(() => {
    getdataTransaction()
})


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    async function handleRegister(e: any){
        e.preventDefault();
    
        const date = {
            title,
            description,
            amount,
        };
    
        try {
    
            const response = await api.post('annotations', date);
            navigate("/annotation");
    
        }catch(err) {
            alert("Deu erro")
        }
    }

    return (
        <div>
            <Container>
                <Content>
                    <HeaderCreate handleClickOpen={handleClickOpen} titulo="Anotações" />
                </Content>
                <Content>
                    {annotations.map(annotations => (
                    <Note
                        id={annotations['id']}
                        key={annotations['id']}
                        title={annotations['title']}
                        description={annotations['description']}
                    />
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
                        Escreva uma anotação
                    </DialogTitle>
                    <Form onSubmit={handleRegister}>
                        <Input 
                        maxLength={25}
                        placeholder='Titulo'
                        onChange={e => setTitle(e.target.value)}
                        />
                        <Input
                        placeholder='Descrição'
                        maxLength={330}
                        onChange={e => setDescription(e.target.value)}
                        />
                        <Button type='submit' onClick={handleClose} >Salvar</Button>
                    </Form>
                </DialogContent>
            </Dialog>
        </div>
    );
}

export default Annotation;