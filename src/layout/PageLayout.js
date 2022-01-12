import React from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";

const Template = styled.div`
  background-color: white;
  box-sizing: border-box;
  margin: 0 auto;
  width: 600px;
  min-height: 100vh;
`;

const Header = styled.div`
  background-color: black;
  box-sizing: border-box;
  width: 100%;
  height: fit-content;

  padding: 18px 20px;
  font-size: 24px;
  font-weight: bolder;
  color: white;

  a {
    color: white;
    text-decoration-color: blue;
  }
`;

const Content = styled.div`
  box-sizing: border-box;
  height: 100%;
  background-color: white;
`;

const PageLayout = ({children}) => {
    return (
            <Template>
                <Header>
                    <Link to="/">MotionLabs</Link>
                </Header>

                <Content>
                    {children}
                </Content>

            </Template>
    );
};

export default PageLayout;
