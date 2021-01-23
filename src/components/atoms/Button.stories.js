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

const ButtonsWrapper = (props) => (
  <div>
    <p>Enable:</p>
    <Toolbar>
      <Button {...props} {...events}>
        Default
      </Button>
      <Button {...props} {...events} color="primary">
        Primary
      </Button>
      <Button {...props} {...events} color="danger">
        Danger
      </Button>
    </Toolbar>
    <p>As a link</p>
    <Toolbar>
      <Button as="a" href="#" {...props} {...events}>
        Default
      </Button>
      <Button as="a" href="#" {...props} {...events} color="primary">
        Primary
      </Button>
      <Button as="a" href="#" {...props} {...events} color="danger">
        Danger
      </Button>
    </Toolbar>

    <p>Disabled:</p>
    <Toolbar>
      <Button disabled {...props} {...events}>
        Default
      </Button>
      <Button disabled {...props} {...events} color="primary">
        Primary
      </Button>
      <Button disabled {...props} {...events} color="danger">
        Danger
      </Button>
    </Toolbar>
  </div>
);

export const usage = () => <ButtonsWrapper />;

export const outlined = () => <ButtonsWrapper variant="outlined" />;

export const link = () => <ButtonsWrapper variant="link" />;
