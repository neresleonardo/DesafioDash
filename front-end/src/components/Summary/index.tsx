import React, { useMemo } from 'react';
import CountUp from 'react-countup';
import { Container }  from './styles';

interface ISummart {
    title: string;
    label: string;
}

const Summart: React.FC<ISummart> = ({
    title,
    label,
}) => {

    return (
        <Container>
            <span>{title}</span>
            <h1>
                <strong>R$ 1000 </strong>
            </h1>
            <small>{label}</small>
        </Container>
    );
}

export default Summart;