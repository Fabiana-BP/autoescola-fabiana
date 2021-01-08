import React from "react";

import Card, { CardBody, CardMedia } from "./Card";
import Section from "components/molecules/Section";
import Heading from "components/atoms/Heading";
import Button from "components/atoms/Button";

import PlaceholderImage from "stories/assets/carro.jpeg";

export default {
  title: "Components/Atoms/Card",
  component: Card,
  subcomponents: { CardBody, CardMedia },
};

export const usage = () => (
  <Section inverse>
    <Card>
      <CardBody>
        <Heading>
          <h6>Título</h6>
        </Heading>
        <p>
          Proident nulla dolor consequat eu reprehenderit voluptate commodo.
        </p>
        <Button color="primary" variant="link">
          Saiba mais
        </Button>
      </CardBody>
    </Card>
  </Section>
);

export const withMedia = () => (
  <Section inverse>
    <Card>
      <CardMedia image={PlaceholderImage} />
      <CardBody>
        <Heading>
          <h6>Título</h6>
        </Heading>
        <p>
          Proident nulla dolor consequat eu reprehenderit voluptate commodo.
        </p>
        <Button color="primary" variant="link">
          Saiba mais
        </Button>
      </CardBody>
    </Card>
  </Section>
);
