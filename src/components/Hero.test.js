import React from 'react';
import { render } from '@testing-library/react';

import Hero from './Hero';

test("renders Hero with children",() => {
  const {debug, getByText} = render(
    <Hero>
      <p>Fabiana Barreto Pereira</p>
    </Hero>
  );
  debug();

  expect(getByText("Fabiana Barreto Pereira")).toBeInTheDocument();
});

test("renders image background",() => {
  const image = "http://test/image.jpg";
  const {getByTestId} = render(<Hero image={image}/>);

  expect(getByTestId("hero")).toHaveStyleRule({
    backgroundImage: image,
  });
});


