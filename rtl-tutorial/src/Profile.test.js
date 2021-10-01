import React from 'react';
import { render } from '@testing-library/react';
import Profile from './Profile';

describe('<Profile />', () => {
    it('matches snapshot', () => {
        const utils = render(<Profile username="sky21kr" name="신승민"/> )
        expect(utils.container).toMatchSnapshot();
    });
    it('shows the props correctly', () => {
        const utils = render(<Profile username="sky21kr" name="신승민"/>)
        utils.getByText('sky21kr');
        utils.getByText('(신승민)');
        utils.getByText(/신/);
    })
})