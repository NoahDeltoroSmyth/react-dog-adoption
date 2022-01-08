import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import DogEdit from './DogEdit';

it('should render a dogs info in the form', async () => {
  //render
  const { container } = render(
    <MemoryRouter initialEntries={['/dogs/21/edit']}>
      <Route path="/dogs/:id/edit" component={DogEdit} />
    </MemoryRouter>
  );
  //wait for load
  await screen.findByDisplayValue('Anna');
  //take screen shot
  expect(container).toMatchSnapshot();
});
