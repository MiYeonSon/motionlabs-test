import React from 'react';
import styled from 'styled-components';

const Template = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 3%;
`;

const ContentTemplate = ({children}) => {
    return (
        <Template>
            {children}
        </Template>
    );
};

export default ContentTemplate;
