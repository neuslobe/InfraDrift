// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders InfraDrift title', () => {
    render(<App />);
    const titleElement = screen.getByText(/InfraDrift/i);
    expect(titleElement).toBeInTheDocument();
});
