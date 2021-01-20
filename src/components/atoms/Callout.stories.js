import React from "react";
import Callout, { CalloutBody, CalloutActions, CalloutMedia } from "./Callout";
import Button from "components/atoms/Button";

import SpeedImage from "draws/Speed";

const story = {
  title: "Components/Atoms/Callout",
  component: Callout,
  subcomponents: { CalloutBody, CalloutActions, CalloutMedia },
};

export default story;

export const usage = () => (
  <Callout>
    <CalloutBody>
      <h6>Faça sua matrícula agora</h6>
      <p>
        Enim nulla culpa reprehenderit esse aute in voluptate nisi qui est
        cupidatat incididunt cupidatat. Elit deserunt reprehenderit anim fugiat
        deserunt laboris est ea voluptate elit nisi. Labore ullamco occaecat ea
        consectetur deserunt ad elit incididunt reprehenderit amet nisi aliqua
        cupidatat. Sint ex ipsum aute tempor duis incididunt commodo et labore
        Lorem nulla sint. Et ullamco consequat dolore duis nisi ex ad excepteur
        qui. Aliqua commodo et nostrud aliquip aliquip non aute aute veniam
        proident enim.
      </p>
      <CalloutActions>
        <Button color="primary">Matricular</Button>
      </CalloutActions>
    </CalloutBody>
    <CalloutMedia>
      <SpeedImage />
    </CalloutMedia>
  </Callout>
);
