import React from "react";
import styled from "styled-components";
// import PropTypes from "prop-types";
import Hero from "components/molecules/Hero";
import Heading from "components/atoms/Heading";
import Section from "components/molecules/Section";
import Grid from "components/atoms/Grid";
import Footer from "components/organisms/Footer";

import HeroImage from "assets/hero.webp";
import AboutImage from "draws/About";

const ImageContainer = styled.div`
  svg {
    width: 100%;
    height: auto;
    max-width: 380px;
    color: ${(props) => props.theme.colors.primary.main};
  }
`;

const About = () => (
  <>
    <Hero image={HeroImage}>
      <Heading>
        <h1>Barreto Auto Escola</h1>
      </Heading>
    </Hero>
    <Section>
      <Grid md={2}>
        <div>
          <p>
            Sunt aliquip elit elit minim do consequat. Laborum ad minim ullamco
            laborum. Id veniam ipsum dolore aute sit quis. Dolore tempor quis
            amet aliquip minim non aliqua culpa ipsum ex commodo.
          </p>
          <p>
            Occaecat exercitation reprehenderit cupidatat dolore nostrud non ex
            eu cillum velit duis occaecat qui in. Excepteur ex eiusmod elit
            voluptate consectetur aliqua esse eiusmod mollit dolore. Aute aliqua
            dolore dolor elit culpa veniam Lorem eiusmod pariatur exercitation
            nulla. Magna Lorem laborum qui aliqua ut. Dolore occaecat ipsum
            dolor dolor Lorem non aliqua nisi deserunt qui nulla. Velit proident
            excepteur esse velit sint. Velit reprehenderit irure adipisicing eu
            id consectetur amet.
          </p>
          <p>
            Magna aute anim culpa nostrud laborum anim incididunt duis ullamco
            anim eiusmod voluptate. Consectetur qui et veniam do laborum tempor
            mollit sint ipsum. Nulla amet nostrud veniam proident veniam eu ea
            et. Ex dolore cupidatat fugiat et qui consequat velit. Laboris culpa
            fugiat deserunt officia voluptate culpa reprehenderit dolor Lorem
            culpa esse consectetur.
          </p>
          <ul>
            <li>Incididunt enim anim elit culpa aute eiusmod Lorem.</li>
            <li>Incididunt enim anim elit culpa aute eiusmod Lorem.</li>
            <li>Incididunt enim anim elit culpa aute eiusmod Lorem.</li>
            <li>Incididunt enim anim elit culpa aute eiusmod Lorem.</li>
            <li>Incididunt enim anim elit culpa aute eiusmod Lorem.</li>
          </ul>
        </div>
        <div>
          <p>
            Dolore non irure laborum incididunt consectetur sit duis incididunt
            aute magna ex cupidatat elit. Ad ad id in est voluptate magna culpa
            nostrud aliqua excepteur pariatur. Cupidatat velit culpa tempor elit
            ex non eiusmod consectetur qui dolore. Id veniam ipsum et cillum
            consectetur ullamco dolore occaecat ad minim pariatur ipsum cillum
            anim. Aliqua aliquip sit aliquip do pariatur aliqua.
          </p>
          <center>
            <ImageContainer>
              <AboutImage />
            </ImageContainer>
          </center>
        </div>
      </Grid>
    </Section>
    <Section inverse>
      <Grid md={2}>
        <div>
          <h4>Missão</h4>
          <p>
            Mollit ut labore dolore aliqua nisi nulla nulla adipisicing. Lorem
            ut aliquip aliquip eiusmod ullamco laboris aliqua cillum. Ea officia
            eu fugiat dolore ea.
          </p>
        </div>
        <div>
          <h4>Visão</h4>
          <p>
            Mollit ut labore dolore aliqua nisi nulla nulla adipisicing.
            Deserunt laboris consectetur consectetur commodo esse eu. Nulla
            cupidatat deserunt Lorem eiusmod est amet.
          </p>
        </div>
      </Grid>
    </Section>
    <Section>
      <Heading>
        <h2>Conheça nosso professores</h2>
      </Heading>
    </Section>
    <Footer />
  </>
);

About.defaultProps = {};
About.propTypes = {};

export default About;
