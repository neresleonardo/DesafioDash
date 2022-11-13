import { useNavigate  } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import { ButtonDelete, Container, Row}  from './styles';

import {
    MdDelete
} from 'react-icons/md';

interface IFinanceCard {
    id: string;
    title: string;
    description: string;
    amont: number;
}

async function handleDelete(id:string){
    try {

        const response = await api.delete(`deletetransaction/${id}`);

    }catch(err) {
        alert("Deu erro ao deletar")
    }
}

const FinanceCard: React.FC<IFinanceCard> = ({
    title, description, amont, id
}) => {

    return(
    <Container>
        <div >
            <span>{title}</span>
            <small>{description}</small>
        </div>
        <Row>
        <h3>R$ {amont}</h3>
        <ButtonDelete onClick={() => handleDelete(id)}>
            <MdDelete/>
        </ButtonDelete>
        </Row>      
    </Container>
    
);}

export default FinanceCard;