/* eslint-disable no-undef */
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import Component from './HeaderItems';

describe('HeaderItems', () => {
  it('renders header items', () => {
    render(
      <BrowserRouter>
        <Component />
      </BrowserRouter>
    );
    const component = screen.getByTestId('header-item');
    expect(component).toBeInTheDocument();
  });

  it('activate current link', () => {
    render(
      <MemoryRouter initialEntries={['/campaign']}>
        <Component />
      </MemoryRouter>
    );
    const campaignTag = screen.getByRole('Campaigns');
    const overviewTag = screen.getByRole('Overview');
    expect(campaignTag).toHaveClass('text-blue-900');
    expect(campaignTag).not.toHaveClass('text-gray-700');
    expect(overviewTag).not.toHaveClass('text-blue-900');
    expect(overviewTag).toHaveClass('text-gray-700');
  });

  it('should navigate correctly', () => {
    render(
      <MemoryRouter initialEntries={['/campaign']}>
        <Component />
      </MemoryRouter>
    );
    const overviewTag = screen.getByRole('Overview');
    // overview is deactive
    expect(overviewTag).not.toHaveClass('text-blue-900');
    expect(overviewTag).toHaveClass('text-gray-700');
    fireEvent.click(overviewTag);
    // overview is deactive
    expect(overviewTag).toHaveClass('text-blue-900');
    expect(overviewTag).not.toHaveClass('text-gray-700');
  });
});
