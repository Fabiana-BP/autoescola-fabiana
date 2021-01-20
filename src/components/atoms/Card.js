import React from "react";
import PropTypes from "prop-types";

import styled from "styled-components";

//#region CardBody

const StyledBody = styled.div`
  padding: 16px;

  h6 {
    margin-top: 0;
  }
`;

export const CardBody = ({ children }) => <StyledBody>{children}</StyledBody>;

CardBody.propTypes = {
  children: PropTypes.node,
};

CardBody.defaultProps = {
  children: undefined,
};

//#endregion

//#region CardMedia

const StyledMedia = styled.div`
  display: flex;
  background-image: url(${(props) => props.image});
  background-position: center center;
  background-size: cover;
  height: 270px;
`;

export const CardMedia = ({ image, children }) => (
  <StyledMedia image={image}>{children}</StyledMedia>
);

CardMedia.propTypes = {
  image: PropTypes.string,
  children: PropTypes.node,
};

CardMedia.defaultProps = {
  image: undefined,
  children: undefined,
};

//#endregion

//#region CardMediaDescription
const StyledMediaDescription = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  padding: 0px 16px;
  color: #fff;
  align-self: flex-end;
  flex: 1;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
  }
`;

export const CardMediaDescription = ({ children }) => (
  <StyledMediaDescription>{children}</StyledMediaDescription>
);

CardMediaDescription.propTypes = {
  children: undefined,
};

CardMediaDescription.defaultProps = {
  children: PropTypes.node,
};

//#endregion

//#region Card
const StyledCard = styled.div`
  background-color: #fff;
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme.colors.border};
  overflow: hidden;
`;

const Card = ({ children }) => <StyledCard>{children}</StyledCard>;

Card.propTypes = {
  children: PropTypes.node,
};

Card.defaultProps = {
  children: undefined,
};
//#endregion

export default Card;
