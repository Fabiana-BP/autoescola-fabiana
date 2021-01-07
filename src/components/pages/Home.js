import React from "react";
import PropTypes from "prop-types";
import { FaCar, FaKey, FaMapMarkedAlt, FaAccessibleIcon} from 'react-icons/fa';

import Hero from "components/molecules/Hero";
import Heading from "components/atoms/Heading";
import Button from "components/atoms/Button";
import BgCarImage from "assets/hero.webp";
import Feature from "components/atoms/Feature";
import Grid from "components/atoms/Grid";
import Section from "components/molecules/Section";

const Home = () => (
  <>
    <Hero image={BgCarImage}>
      <Heading>
        <h1>
          Ganhe sua <strong>liberdade</strong>
          <br />
          para ir e vir
        </h1>
      </Heading>
      <ul>
        <li>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </li>
        <li>It is a long established fact that a reader will be distracted.</li>
        <li>
          All the Lorem Ipsum generators on the Internet tend to repeat
          predefined chunks as necessary.
        </li>
      </ul>
      <Button variant="outlined" color="primary">
        Matricule-se agora
      </Button>
    </Hero>
    <Section>
      <Grid sm={2} md={3} xl={4}>
        <Feature icon={<FaCar />} title="Maior e melhor frota">
          <p>Et consectetur nostrud aliqua aliqua.</p>
        </Feature>

        <Feature icon={<FaKey />} title="Habilitação mais rápida">
          <p>Et consectetur nostrud aliqua aliqua.</p>
        </Feature>

        <Feature icon={<FaMapMarkedAlt />} title="Excelente localização">
          <p>Et consectetur nostrud aliqua aliqua.</p>
        </Feature>

        <Feature icon={<FaAccessibleIcon />} title="Acessibilidade">
          <p>Et consectetur nostrud aliqua aliqua.</p>
        </Feature>
      </Grid>
    </Section>
  </>
);

Home.defaultProps = {};
Home.propTypes = {};

export default Home;
