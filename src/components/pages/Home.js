import React from "react";
import PropTypes from "prop-types";
import { FaCar, FaKey, FaMapMarkedAlt, FaAccessibleIcon } from "react-icons/fa";

import Hero from "components/molecules/Hero";
import Heading from "components/atoms/Heading";
import Button from "components/atoms/Button";
import Feature from "components/atoms/Feature";
import Grid from "components/atoms/Grid";
import Section from "components/molecules/Section";
import Footer from "components/organisms/Footer";

import HeroImage from "assets/hero.webp";
import AboutVideo from "assets/about.mp4";

const Home = () => (
  <>
    <Hero image={HeroImage}>
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
      <Grid sm={2} md={4}>
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
    <Section inverse>
      <Heading>
        <h2>Conheça nossos serviços</h2>
      </Heading>
    </Section>
    <Section>
      <Grid md={2}>
        <div>
          <Heading>
            <h2>Barreto Auto Escola</h2>
          </Heading>
          <p>
            Voluptate fugiat ex dolor amet enim occaecat duis laboris dolore
            velit qui sunt culpa. Ut exercitation culpa reprehenderit ad Lorem
            pariatur consequat et ex reprehenderit. Anim aute cupidatat eu
            aliqua qui labore enim nisi.
          </p>
          <div>
            <Button color="primary">Saiba mais</Button>
          </div>
        </div>
        <div>
          <video src={AboutVideo} width="100%" autoPlay loop />
        </div>
      </Grid>
    </Section>
    <Section inverse>
      <Heading>
        <h2>Dúvidas recorrentes</h2>
      </Heading>
    </Section>
    <Footer />
  </>
);

Home.defaultProps = {};
Home.propTypes = {};

export default Home;
