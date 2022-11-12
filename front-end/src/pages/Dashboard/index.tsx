import React from 'react';
import FinanceCard from '../../components/FinanceCard';
import HeaderCreate from '../../components/HeaderCreate';
import Summary from '../../components/Summary';
import { Container, Content } from './styles';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Input from '../../components/Input';
import Button from '../../components/Button';


const Dashboard: React.FC = () => {

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
                    <HeaderCreate handleClickOpen={handleClickOpen} titulo="Ganhos e dívidas" />
                </Content>
                <Content>
                    <Summary></Summary>

                    <Summary></Summary>

                    <Summary></Summary>
                </Content>
                <Content>
                    <FinanceCard></FinanceCard>
                    <FinanceCard></FinanceCard>
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
                    <Input placeholder='Titulo'/>
                    <Input placeholder='Descrição'/>
                    <Input placeholder='Valor' type="number"/>
                    <Button onClick={handleClose} >Salvar</Button>
                </DialogContent>
            </Dialog>
        </div>
    );
}

export default Dashboard;