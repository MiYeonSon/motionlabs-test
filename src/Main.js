import React from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";
import PageLayout from "./layout/PageLayout";

const StyledUl = styled.ul`
  box-sizing: border-box;
  padding: 20px 30px;
  
  color: black;
  font-weight: 700;
  
  li {
    margin: 40px;
  }
  
  a{
    color: black;
  }
`;

const Main = () => {
    return (
        <PageLayout>
            <StyledUl>
                <li>
                    <Link to={"/report"}>레포트</Link>
                </li>
                <li>
                    <Link to={"/passenger"}>승객목록</Link>
                </li>
            </StyledUl>
        </PageLayout>
    );
};

export default Main;
