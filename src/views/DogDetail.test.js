import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import DogDetail from './DogDetail';

it('should render a bio', async () => {
  //render
  const { container } = render(
    <MemoryRouter initialEntries={['/dogs/24']}>
      <Route path="/dogs/:id" component={DogDetail} />
    </MemoryRouter>
  );
  //wait for load
  await screen.findByText(
    'Loving and friendly, but will throw down to protect and break a finger if need be'
  );
  //take screen shot
  expect(container).toMatchSnapshot();
});
