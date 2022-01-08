import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import DogList from './DogList';

it('should render a list of dogs 1', async () => {
  //render
  const { container } = render(
    <MemoryRouter>
      <DogList />
    </MemoryRouter>
  );
  //load
  await screen.findByText('French Bulldog');
  //snapshot
  expect(container).toMatchSnapshot();
});
