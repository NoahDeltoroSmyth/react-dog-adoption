import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { DogProvider } from '../Context/DogContext';
import DogAdmin from './DogAdmin';

it('should render h1 text', async () => {
  //render
  const { container } = render(
    <MemoryRouter>
      <DogProvider>
        <DogAdmin />
      </DogProvider>
    </MemoryRouter>
  );
  //wait for load
  await screen.findByText('Dog Information');
  //take screen shot
  expect(container).toMatchSnapshot();
});
