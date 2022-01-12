import React from 'react';
import styled from "styled-components";

const LineStyled = styled.div`
  box-sizing: border-box;
  background-color: black;
  width: ${props => props.width};
  height: 2px;
  transform-origin: 0 0;
  transform: ${props => props.angle};
`;

const Line = ({width, angle}) => {
    return (
        <LineStyled width={width} angle={angle} />
    );
};

export default Line;
