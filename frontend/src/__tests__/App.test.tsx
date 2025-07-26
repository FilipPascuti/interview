import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App Component', () => {
    it('renders hello world', () => {
        render(<App />);
        const h5 = screen.queryByText('Search for a location:');

        expect(h5).toBeInTheDocument();
    });
});
