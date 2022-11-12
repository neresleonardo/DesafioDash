import { useNavigate  } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import { Container}  from './styles';

interface IFinanceCard {
    title: string;
    description: string;
    amont: number;
}

const FinanceCard: React.FC<IFinanceCard> = ({
    title, description, amont
}) => {

    return(
    <Container>
        <div>
            <span>{title}</span>
            <small>{description}</small>
        </div>        
        <h3>{amont}</h3>

        
        
    </Container>
    
);}

export default FinanceCard;