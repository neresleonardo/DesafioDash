import React from 'react';
import { Container } from './styles';

import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Input from '../../components/Input';
import Button from '../../components/Button';

const Config: React.FC = () => {

    const [open, setOpen] = React.useState(false);

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div>
            <Container>
                
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
                    <Input placeholder='Titulo'/>
                    <Input type="text" placeholder='Descrição'/>
                    <Button onClick={handleClose} >Salvar anotação</Button>
                </DialogContent>
            </Dialog>
        </div>
    );
}

export default Config;