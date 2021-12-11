import React from 'react';
import ReactDOM from 'react-dom';
import 'jest-extended'
import "@testing-library/jest-dom/extend-expect";
import { cleanup, fireEvent, render } from '@testing-library/react';
import TeamMember from '../TeamMember';
import { screen } from '@testing-library/dom'

// Note: running cleanup afterEach is done automatically for you in @testing-library/react@9.0.0 or higher
// unmount and cleanup DOM after the test is finished.
afterEach(cleanup);
describe('TeamMember', () => {

    it('TeamMember Should be in dom', () => {
        render(
            <TeamMember
                member={{
                    name: 'John Doe',
                    email: '',
                    phone: "",
                    website: "",
                    username: "",
                    key: 0,
                    loading: false,

                }}
                loading={false}
            />,
        );

        const divElement = screen.getByTestId("TeamMember");
        expect(divElement).toBeInTheDocument()

    });
    it('TeamMember renders props properly', () => {
        render(
            <TeamMember
                member={{
                    name: 'John Doe',
                    email: 'amanullah8225@gmail.com',
                    phone: "12123124",
                    website: "iamanullah.com",
                    username: "amanix007",
                    key: 0,
                    loading: false,

                }}
                loading={false}
            />,
        );

        const divElement = screen.getByTestId("TeamMember");

        expect(divElement).toHaveTextContent('John Doe');
        expect(divElement).toHaveTextContent('amanullah8225@gmail.com');
        expect(divElement).toHaveTextContent('12123124');

    });


});