import React from "react";
import BreadCrumb from "./BreadCrumb";

const story = {
  title: "Components/Atoms/BreadCrumb",
  component: BreadCrumb,
};

export default story;

const items = [{ label: "Início", link: "/" }, { label: "Sobre" }];

export const usage = () => <BreadCrumb items={items} />;
