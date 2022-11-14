import React from 'react';

import { Button, Container, Description, HeaderNote, Texth1 }  from './styles'
import {
    MdDelete
} from 'react-icons/md';

const Note: React.FC = () => (
    <Container>
        <div>
        <HeaderNote>
            <Texth1>
                Título
            </Texth1>
            <Button>
               <MdDelete></MdDelete>
            </Button>
        </HeaderNote>
        <Description>
            <Texth1>
                ola amigos fsdafasdf sad fdsaf das fasd f dsf dsaf dasf adsf sdaf sd fds sfd d sf sdaf sdf sadf sda fasd fds fasd fd sf dsaf dsf 
            </Texth1>
        </Description>
        </div>
    </Container>
);

export default Note;