import React from 'react';
import { FaCar, FaKey, FaMapMarkedAlt, FaAccessibleIcon} from 'react-icons/fa';

import Grid from "components/atoms/Grid";
import Feature from "./Feature";


export default {
  title: "Components/Atoms/Feature",
  component: Feature,
};

export const usage = () => (
  <Feature 
    icon={<FaCar/>}
    title="Título"
    >
      <p>Et consectetur nostrud aliqua aliqua.</p>
  </Feature>
);

export const withGrid = () => (
  <Grid sm={2} md={4}>
    <Feature 
    icon={<FaCar/>}
    title="Maior e melhor frota"
    >
      <p>Et consectetur nostrud aliqua aliqua.</p>
    </Feature>

    <Feature 
    icon={<FaKey/>}
    title="Habilitação mais rápida"
    >
      <p>Et consectetur nostrud aliqua aliqua.</p>
    </Feature>

    <Feature 
    icon={<FaMapMarkedAlt/>}
    title="Excelente localização"
    >
      <p>Et consectetur nostrud aliqua aliqua.</p>
    </Feature>

    <Feature 
    icon={<FaAccessibleIcon/>}
    title="Acessibilidade"
    >
      <p>Et consectetur nostrud aliqua aliqua.</p>
   </Feature>
  </Grid>
);



