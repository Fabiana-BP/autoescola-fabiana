import React from "react";
import {
  FaPhone,
  FaBuilding,
  FaFacebook,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

import Container from "components/atoms/Container";
import Grid from "components/atoms/Grid";
import Heading from "components/atoms/Heading";
import styled from "styled-components";

const Root = styled.footer`
  background-color: #2a2a2a;
  color: #aaa;
  padding: 40px 0;

  h6 {
    color: #fff;
    margin-top: 0;
    text-transform: uppercase;
  }
`;

const IconContainer = styled.span`
  margin-right: 8px;
`;

const FooterLink = styled.a`
  color: ${(props) => props.theme.colors.primary.main};
  text-decoration: none;

  &:hover {
    color: ${(props) => props.theme.colors.primary.dark};
  }
`;

const Footer = () => (
  <Root>
    <Container>
      <Grid md={3}>
        <div>
          <Heading>
            <h6>Barreto Auto Escola</h6>
          </Heading>
          <p>
            Tempor est proident nulla duis mollit eu. Veniam dolor excepteur
            elit velit excepteur. Duis qui Lorem laborum ad.
          </p>
        </div>
        <div>
          <Heading>
            <h6>Contatos</h6>
          </Heading>
          <p>
            <IconContainer>
              <FaPhone />
            </IconContainer>
            (99) 99999-9999
          </p>
          <p>
            <IconContainer>
              <FaBuilding />
            </IconContainer>
            Mollit qui et excepteur in sunt mollit ex.
          </p>
        </div>
        <div>
          <Heading>
            <h6>Redes Sociais</h6>
            <p>
              <FooterLink target="_blank" href="https://www.facebook.com/">
                <IconContainer>
                  <FaFacebook />
                </IconContainer>
                Facebook
              </FooterLink>
            </p>
            <p>
              <FooterLink target="_blank" href="https://br.linkedin.com/">
                <IconContainer>
                  <FaLinkedinIn />
                </IconContainer>
                Linkedin
              </FooterLink>
            </p>
            <p>
              <FooterLink
                target="_blank"
                href="https://twitter.com/login?lang=pt"
              >
                <IconContainer>
                  <FaTwitter />
                </IconContainer>
                Twitter
              </FooterLink>
            </p>
          </Heading>
        </div>
      </Grid>
    </Container>
  </Root>
);

export default Footer;
