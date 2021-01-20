import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { breakAt, BreakpointSizes } from "styles/Breakpoints";

//#region CalloutBody
const StyledCalloutBody = styled.div`
  flex: 1;
  h6,
  p {
    margin: 0 0 8px;
  }
`;

export const CalloutBody = ({ children }) => (
  <StyledCalloutBody>{children}</StyledCalloutBody>
);

CalloutBody.propTypes = {
  children: PropTypes.node,
};

CalloutBody.defautProps = {
  children: undefined,
};

//#endregion

//#region CalloutActions
const StyledCalloutActions = styled.div`
  padding-top: 8px;
`;

export const CalloutActions = ({ children }) => (
  <StyledCalloutActions>{children}</StyledCalloutActions>
);

CalloutActions.propTypes = {
  children: PropTypes.node,
};

CalloutActions.defautProps = {
  children: undefined,
};

//#endregion

//#region CalloutMedia
const StyledCalloutMedia = styled.div`
  width: 30%;
  display: none;
  ${breakAt(BreakpointSizes.md)} {
    display: flex;
  }

  svg {
    color: ${(props) => props.theme.colors.primary.main};
    width: 100%;
    height: 100%;
    max-height: 200px;
  }
`;

export const CalloutMedia = ({ children }) => (
  <StyledCalloutMedia>{children}</StyledCalloutMedia>
);

CalloutMedia.propTypes = {
  children: PropTypes.node,
};

CalloutMedia.defautProps = {
  children: undefined,
};

//#endregion
//#region Callout

const StyledCallout = styled.div`
  display: flex;
  background-color: #fff;
  border: 1px solid ${(props) => props.theme.colors.border};
  border-left: 3px solid ${(props) => props.theme.colors.primary.main};
  border-radius: 4px;
  padding: 16px;
`;

const Callout = ({ children }) => <StyledCallout>{children}</StyledCallout>;

Callout.propTypes = {
  children: PropTypes.node,
};

Callout.defautProps = {
  children: undefined,
};

export default Callout;

//#endregion
