import { render } from '@testing-library/react';
import Button from '.';


describe("text button", () => {
    test('button click', () => {
        const {debug, getByText} = render(
            <Button>
                Entrar
            </Button>
        )
    
        expect(getByText('Entrar')).toBeInTheDocument()
    
        debug()
    })
})