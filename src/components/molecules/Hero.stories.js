import React from "react";
import { text } from "@storybook/addon-knobs";

import Hero from "./Hero";
import BgHighWayImage from "stories/assets/bg-highway.jpg";
import BgCarImage from "stories/assets/bg-car.webp";
import Heading from "components/atoms/Heading";
import Button from "components/atoms/Button";

const story = { title: "Components/Molecules/Hero", component: Hero };

export default story;

export const usage = () => (
  <Hero image={BgCarImage}>
    <Heading>
      <h1>
        Ganhe sua <strong>liberdade</strong>
        <br />
        para ir e vir
      </h1>
    </Heading>
    <p>{text("Text", "A auto escola lider em aprovação")}</p>
    <Button variant="outlined" color="primary">
      Matricule-se agora
    </Button>
  </Hero>
);

export const withList = () => (
  <Hero image={BgHighWayImage}>
    <Heading>
      <h1>{text("Title", "Ganhe sua liberdade para ir e vir")}</h1>
    </Heading>
    <ul>
      <li>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </li>
      <li>It is a long established fact that a reader will be distracted.</li>
      <li>
        All the Lorem Ipsum generators on the Internet tend to repeat predefined
        chunks as necessary.
      </li>
    </ul>
    <Button variant="outlined" color="primary">
      Matricule-se agora
    </Button>
  </Hero>
);
