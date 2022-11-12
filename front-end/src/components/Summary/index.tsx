import React, { useMemo } from 'react';
import CountUp from 'react-countup';

// img
import dolarImg from '../../assets/dollar.svg';
import arrowUpImg from '../../assets/arrow-up.svg';
import arrowDownImg from '../../assets/arrow-down.svg';


import { Container }  from './styles';


const Summart: React.FC<any> = ({
}) => {


    return (
        <Container>
            <span>Saldo</span>
            <h1>
                <strong>R$ 1000 </strong>
            </h1>
            <small>Gaste menos</small>
            {/* <img src={iconSelected} alt={title} /> */}
        </Container>
    );
}

export default Summart;