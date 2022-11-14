import React from 'react';
import FinanceCard from '../../components/FinanceCard';
import HeaderCreate from '../../components/HeaderCreate';
import { Container, Content } from './styles';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Note from '../../components/Note';
import api from '../../services/api';

const Annotation: React.FC = () => {

    const [annotations, setAnnotations] = React.useState([]);

    const getdataTransaction = () => {
        api.get("annotations").then((response) => {
            setAnnotations(response.data);
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
    };
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
                    <Input placeholder='Titulo'/>
                    <Input type="text" placeholder='Descrição'/>
                    <Button onClick={handleClose} >Salvar anotação</Button>
                </DialogContent>
            </Dialog>
        </div>
    );
}

export default Annotation;