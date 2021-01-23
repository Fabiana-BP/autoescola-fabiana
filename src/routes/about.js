import React from "react";

import AboutPage from "components/pages/About";

import { useScroolToTop } from "hooks/scroll";

const About = () => {
  useScroolToTop();
  return <AboutPage />;
};

export default About;
