import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import DogList from './DogList';

it('should render a list of dogs', async () => {
  //render
  const { container } = render(
    <MemoryRouter>
      <DogList />
    </MemoryRouter>
  );
  //load
  await screen.findByText('Dixie');
  //snapshot
  expect(container).toMatchSnapshot();
});
