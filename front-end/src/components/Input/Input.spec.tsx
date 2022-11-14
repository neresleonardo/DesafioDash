import { render } from '@testing-library/react';
import Input from '.';



describe("Text Input", () => {
    test('Input ok', () => {
        const {debug, getByText,} = render(
            <Input placeholder='email'>

            </Input>
        )
    
        debug()
    })
})