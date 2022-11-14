import React from 'react';

import { Button, Container, Description, HeaderNote, Texth1 } from './styles'
import {
    MdDelete
} from 'react-icons/md';

interface INote {
    id: string;
    title: string;
    description: string;
}

const Note: React.FC<INote> = ({
    title, description, id
}) => {
    return (
        <Container>
            <div>
                <HeaderNote>
                    <Texth1>
                        {title}
                    </Texth1>
                    <Button onClick={() => id}>
                        <MdDelete></MdDelete>
                    </Button>
                </HeaderNote>
                <Description>
                    <Texth1>
                       {description}
                    </Texth1>
                </Description>
            </div>
        </Container>
    );
}

export default Note;