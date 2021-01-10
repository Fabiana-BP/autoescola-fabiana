import React from "react";
import { actions } from "@storybook/addon-actions";
import Button from "./Button";
import styled from "styled-components";

const story = {
  title: "Components/Atoms/Button",
  component: Button,
};

export default story;

const events = actions({ onClick: "clicked" });

const Toolbar = styled.div`
  & > * {
    margin: 2px 8px;
  }
`;

export const usage = () => (
  <div>
    <p>Enable:</p>
    <Toolbar>
      <Button {...events}>Default</Button>
      <Button {...events} color="primary">
        Primary
      </Button>
      <Button {...events} color="danger">
        Danger
      </Button>
    </Toolbar>
    <p>Disabled:</p>
    <Toolbar>
      <Button disabled {...events}>
        Default
      </Button>
      <Button disabled {...events} color="primary">
        Primary
      </Button>
      <Button disabled {...events} color="danger">
        Danger
      </Button>
    </Toolbar>
  </div>
);

export const outlined = () => (
  <div>
    <p>Enable:</p>
    <Toolbar>
      <Button variant="outlined" {...events}>
        Default
      </Button>
      <Button variant="outlined" {...events} color="primary">
        Primary
      </Button>
      <Button variant="outlined" {...events} color="danger">
        Danger
      </Button>
    </Toolbar>
    <p>Disabled:</p>
    <Toolbar>
      <Button variant="outlined" disabled {...events}>
        Default
      </Button>
      <Button variant="outlined" disabled {...events} color="primary">
        Primary
      </Button>
      <Button variant="outlined" disabled {...events} color="danger">
        Danger
      </Button>
    </Toolbar>
  </div>
);

export const link = () => (
  <div>
    <p>Enable:</p>
    <Toolbar>
      <Button variant="link" {...events}>
        Default
      </Button>
      <Button variant="link" {...events} color="primary">
        Primary
      </Button>
      <Button variant="link" {...events} color="danger">
        Danger
      </Button>
    </Toolbar>
    <p>Disabled:</p>
    <Toolbar>
      <Button variant="link" disabled {...events}>
        Default
      </Button>
      <Button variant="link" disabled {...events} color="primary">
        Primary
      </Button>
      <Button variant="link" disabled {...events} color="danger">
        Danger
      </Button>
    </Toolbar>
  </div>
);
