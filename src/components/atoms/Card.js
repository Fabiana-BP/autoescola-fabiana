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
  background-image: url(${(props) => props.image});
  background-position: center center;
  background-size: cover;
  height: 270px;
`;

export const CardMedia = ({ image }) => <StyledMedia image={image} />;

CardMedia.propTypes = {
  image: PropTypes.string,
};

CardMedia.defaultProps = {
  image: undefined,
};

//#endregion

//#region Card
const StyledCard = styled.div`
  background-color: #fff;
  border-radius: 4px;
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
