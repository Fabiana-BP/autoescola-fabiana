import React from "react";
import { FaCar, FaKey, FaMapMarkedAlt, FaAccessibleIcon } from "react-icons/fa";
import { Link } from "react-router-dom";

import Hero from "components/molecules/Hero";
import Heading from "components/atoms/Heading";
import Button from "components/atoms/Button";
import Feature from "components/atoms/Feature";
import Grid from "components/atoms/Grid";
import Section from "components/molecules/Section";
import Footer from "components/organisms/Footer";
import ProductGrid from "components/organisms/ProductGrid";
import Accordion, { AccordionGroup } from "components/atoms/Accordion";

import HeroImage from "assets/hero.webp";
import AboutVideo from "assets/about.mp4";
import Serv01 from "assets/moto_carro.jpeg";
import Serv02 from "assets/carro.webp";
import Serv03 from "assets/moto.webp";
import Serv04 from "assets/caminhao.webp";
import Serv05 from "assets/avulsa.webp";

const products = [
  {
    id: 1,
    title: "Primeira Habilitação Carro e Moto",
    summary:
      "Proident nulla dolor consequat eu reprehenderit voluptate commodo.",
    image: Serv01,
  },
  {
    id: 2,
    title: "Primeira Habilitação Carro",
    summary:
      "Proident nulla dolor consequat eu reprehenderit voluptate commodo.",
    image: Serv02,
  },
  {
    id: 3,
    title: "Primeira Habilitação Moto",
    summary:
      "Proident nulla dolor consequat eu reprehenderit voluptate commodo.",
    image: Serv03,
  },
  {
    id: 4,
    title: "Mudança de Categoria Caminhão",
    summary:
      "Proident nulla dolor consequat eu reprehenderit voluptate commodo.",
    image: Serv04,
  },
  {
    id: 5,
    title: "Aulas Avulsas",
    summary:
      "Proident nulla dolor consequat eu reprehenderit voluptate commodo.",
    image: Serv05,
  },
];

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
        <ProductGrid products={products} />
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
            <Button as={Link} to="/sobre" color="primary">
              Saiba mais
            </Button>
          </div>
        </div>
        <div>
          <video
            src={AboutVideo}
            width="100%"
            autoPlay
            playsInline
            loop
            muted
          />
        </div>
      </Grid>
    </Section>
    <Section inverse>
      <Heading>
        <h2>Dúvidas recorrentes</h2>
      </Heading>
      <AccordionGroup>
        <Accordion title="Como eu renovo minha CNH?">
          <p>
            Adipisicing aliquip incididunt quis in elit cillum. Veniam amet
            pariatur aliqua do. Reprehenderit ex do est id. Magna in Lorem sit
            eiusmod. Enim proident irure occaecat laboris ex voluptate consequat
            pariatur. Non do sit do tempor consequat aliquip et excepteur
            eiusmod. Excepteur enim do reprehenderit sint sunt minim.
          </p>
        </Accordion>
        <Accordion title="Como faço a mudança de categoria?">
          <p>
            Adipisicing aliquip incididunt quis in elit cillum. Veniam amet
            pariatur aliqua do. Reprehenderit ex do est id. Magna in Lorem sit
            eiusmod. Enim proident irure occaecat laboris ex voluptate consequat
            pariatur. Non do sit do tempor consequat aliquip et excepteur
            eiusmod. Excepteur enim do reprehenderit sint sunt minim.
          </p>
        </Accordion>
        <Accordion title="Fui multado, e agora?">
          <p>
            Adipisicing aliquip incididunt quis in elit cillum. Veniam amet
            pariatur aliqua do. Reprehenderit ex do est id. Magna in Lorem sit
            eiusmod. Enim proident irure occaecat laboris ex voluptate consequat
            pariatur. Non do sit do tempor consequat aliquip et excepteur
            eiusmod. Excepteur enim do reprehenderit sint sunt minim.
          </p>
        </Accordion>
      </AccordionGroup>
    </Section>
    <Footer />
  </>
);

export default Home;
