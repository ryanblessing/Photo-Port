import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '..';

//clears memory after each test!
afterEach(cleanup);

describe('About component', () => {
    //render about test
    //first test
it('renders', () => {
    render(<About />);
})
    //second test
    it('matches snapshot DOM node structure', () => {
        //render about
        const { asFragment } = render(<About />);

        expect(asFragment()).toMatchSnapshot();
    })
})