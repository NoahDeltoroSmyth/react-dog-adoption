import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import DogAdmin from './DogAdmin';

it('should render h1 text', async () => {
  //render
  const { container } = render(
    <MemoryRouter>
      <DogAdmin />
    </MemoryRouter>
  );
  //wait for load
  await screen.findByText('Dog Information');
  //take screen shot
  expect(container).toMatchSnapshot();
});
