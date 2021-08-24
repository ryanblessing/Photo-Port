import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..'

//clear memory after each test
afterEach(cleanup);

describe('Nav components', () => {
    //baseline/ first Nav test
    it('renders', () => {
        render(<Nav />);
    })
    //second test- snapshot test
    it('matches snapshot', () => {
        const { asFragment } = render(<Nav />);
        
        //assert value comparison
        expect(asFragment()).toMatchSnapshot();
    });
});

describe('emoji is visible', () => {
    it('inserts emoji into the h2', () => {
        const { getByLabelText } = render(<Nav />);
       
        expect(getByLabelText('camera')).toHaveTextContent('📷')
    });
});

describe('links are visible', () => {
    it('inserts test into the links', () => {
        //arrange
        const { getByTestId } = render(<Nav />);
        //assert
        expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
        expect(getByTestId('about')).toHaveTextContent('About me')
    });
});