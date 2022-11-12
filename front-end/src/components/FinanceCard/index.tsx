
import React from 'react';

import { Container}  from './styles';

interface IFinanceCard {
    title: string;
    description: string;
    amont: number;
}


const FinanceCard: React.FC<IFinanceCard> = ({
    title, description, amont
}) => (
    <Container>
        <div>
            <span>{title}</span>
            <small>{description}</small>
        </div>        
        <h3>{amont}</h3>

        
        
    </Container>
    
);


export default FinanceCard;