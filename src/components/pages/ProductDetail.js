import React from "react";
// import PropTypes from "prop-types";
import styled from "styled-components";
import { FaIdCard, FaHome, FaScroll } from "react-icons/fa";

import { useScroolToTop } from "hooks/scroll";

import Hero from "components/molecules/Hero";
import Heading from "components/atoms/Heading";
import Section from "components/molecules/Section";
import Footer from "components/organisms/Footer";
import Button from "components/atoms/Button";
import BreadCrumb from "components/atoms/BreadCrumb";

import SpeedImage from "draws/Speed";
import Callout, {
  CalloutBody,
  CalloutActions,
  CalloutMedia,
} from "components/atoms/Callout";
import HeroImage from "assets/hero.webp";

const PinnedList = styled.ul`
  list-style: none;
  padding-left: 0;
`;

const PinnedItem = styled.li`
  display: inline-block;
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 4px;
  padding: 8px 16px;
  margin: 0 16px 16px 0;

  svg {
    margin-right: 8px;
    vertical-align: middle;
  }
`;

const ProductDetail = () => {
  useScroolToTop();

  return (
    <>
      <Hero image={HeroImage}>
        <Heading>
          <h1>Nome do serviço</h1>
        </Heading>
        <BreadCrumb
          items={[
            { label: "Início", link: "/" },
            { label: "Serviços" },
            { label: "Nome do Serviço" },
          ]}
        />
      </Hero>
      <Section>
        <p>
          Cillum elit adipisicing laboris elit cillum ea. Consectetur qui ex
          exercitation reprehenderit Lorem anim sint eiusmod commodo minim id
          laborum. Cupidatat duis sunt officia incididunt. Veniam enim Lorem
          commodo qui labore incididunt sunt ut. Qui pariatur ex non cupidatat
          do aliqua eu tempor sunt elit elit eu do id.
        </p>
        <p>
          Cillum elit adipisicing laboris elit cillum ea. Consectetur qui ex
          exercitation reprehenderit Lorem anim sint eiusmod commodo minim id
          laborum. Cupidatat duis sunt officia incididunt. Veniam enim Lorem
          commodo qui labore incididunt sunt ut. Qui pariatur ex non cupidatat
          do aliqua eu tempor sunt elit elit eu do id.
        </p>
        <p>
          Cillum elit adipisicing laboris elit cillum ea. Consectetur qui ex
          exercitation reprehenderit Lorem anim sint eiusmod commodo minim id
          laborum. Cupidatat duis sunt officia incididunt. Veniam enim Lorem
          commodo qui labore incididunt sunt ut. Qui pariatur ex non cupidatat
          do aliqua eu tempor sunt elit elit eu do id.
        </p>
        <h5>Documentos necessários:</h5>
        <PinnedList>
          <PinnedItem>
            <FaIdCard />
            RG
          </PinnedItem>
          <PinnedItem>
            <FaIdCard />
            CPF
          </PinnedItem>
          <PinnedItem>
            <FaScroll />
            Certidão de casamento ou nascimento
          </PinnedItem>
          <PinnedItem>
            <FaHome />
            Comprovante de endereço
          </PinnedItem>
        </PinnedList>
      </Section>
      <Section inverse>
        <Callout>
          <CalloutBody>
            <h6>Faça sua matrícula agora</h6>
            <p>
              Enim nulla culpa reprehenderit esse aute in voluptate nisi qui est
              cupidatat incididunt cupidatat. Elit deserunt reprehenderit anim
              fugiat deserunt laboris est ea voluptate elit nisi. Labore ullamco
              occaecat ea consectetur deserunt ad elit incididunt reprehenderit
              amet nisi aliqua cupidatat. Sint ex ipsum aute tempor duis
              incididunt commodo et labore Lorem nulla sint. Et ullamco
              consequat dolore duis nisi ex ad excepteur qui. Aliqua commodo et
              nostrud aliquip aliquip non aute aute veniam proident enim.
            </p>
            <CalloutActions>
              <Button color="primary">Matricular</Button>
            </CalloutActions>
          </CalloutBody>
          <CalloutMedia>
            <SpeedImage />
          </CalloutMedia>
        </Callout>
      </Section>
      <Footer />
    </>
  );
};

ProductDetail.defaultProps = {};
ProductDetail.propTypes = {};

export default ProductDetail;
