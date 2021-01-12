import React from "react";

import Accordion from "./Accordion";
import AccordionGroup from "./AccordionGroup";

const story = {
  title: "Components/Atoms/Accordion",
  component: Accordion,
};
export default story;

export const usage = () => (
  <>
    <Accordion title="Como eu renovo minha CNH?">
      <p>
        Adipisicing aliquip incididunt quis in elit cillum. Veniam amet pariatur
        aliqua do. Reprehenderit ex do est id. Magna in Lorem sit eiusmod. Enim
        proident irure occaecat laboris ex voluptate consequat pariatur. Non do
        sit do tempor consequat aliquip et excepteur eiusmod. Excepteur enim do
        reprehenderit sint sunt minim.
      </p>
    </Accordion>
    <Accordion title="Como faço a mudança de categoria?">
      <p>
        Adipisicing aliquip incididunt quis in elit cillum. Veniam amet pariatur
        aliqua do. Reprehenderit ex do est id. Magna in Lorem sit eiusmod. Enim
        proident irure occaecat laboris ex voluptate consequat pariatur. Non do
        sit do tempor consequat aliquip et excepteur eiusmod. Excepteur enim do
        reprehenderit sint sunt minim.
      </p>
    </Accordion>
    <Accordion title="Fui multado, e agora?">
      <p>
        Adipisicing aliquip incididunt quis in elit cillum. Veniam amet pariatur
        aliqua do. Reprehenderit ex do est id. Magna in Lorem sit eiusmod. Enim
        proident irure occaecat laboris ex voluptate consequat pariatur. Non do
        sit do tempor consequat aliquip et excepteur eiusmod. Excepteur enim do
        reprehenderit sint sunt minim.
      </p>
    </Accordion>
  </>
);

export const withGroup = () => (
  <AccordionGroup>
    <Accordion title="Como eu renovo minha CNH?">
      <p>
        Adipisicing aliquip incididunt quis in elit cillum. Veniam amet pariatur
        aliqua do. Reprehenderit ex do est id. Magna in Lorem sit eiusmod. Enim
        proident irure occaecat laboris ex voluptate consequat pariatur. Non do
        sit do tempor consequat aliquip et excepteur eiusmod. Excepteur enim do
        reprehenderit sint sunt minim.
      </p>
    </Accordion>
    <Accordion title="Como faço a mudança de categoria?">
      <p>
        Adipisicing aliquip incididunt quis in elit cillum. Veniam amet pariatur
        aliqua do. Reprehenderit ex do est id. Magna in Lorem sit eiusmod. Enim
        proident irure occaecat laboris ex voluptate consequat pariatur. Non do
        sit do tempor consequat aliquip et excepteur eiusmod. Excepteur enim do
        reprehenderit sint sunt minim.
      </p>
    </Accordion>
    <Accordion title="Fui multado, e agora?">
      <p>
        Adipisicing aliquip incididunt quis in elit cillum. Veniam amet pariatur
        aliqua do. Reprehenderit ex do est id. Magna in Lorem sit eiusmod. Enim
        proident irure occaecat laboris ex voluptate consequat pariatur. Non do
        sit do tempor consequat aliquip et excepteur eiusmod. Excepteur enim do
        reprehenderit sint sunt minim.
      </p>
    </Accordion>
  </AccordionGroup>
);
