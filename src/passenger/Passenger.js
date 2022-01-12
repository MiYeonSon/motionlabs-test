import React from 'react';
import styled from "styled-components";

const StyledLine = styled.hr`
  height: 1px;
  border: 0px;
  background-color : #F3F5FA;
`;

const Template = styled.div`
  box-sizing: border-box;
  padding: 15px 0;
  font-size: 14px;
`;

const PassengerHeader = styled.div`
  box-sizing: border-box;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 12px;
  font-weight: 600;
`;

const PassengerName = styled.div`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-size: 15px;
  font-weight: 700;
`;

const AirlineInfo = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  margin: 0;
  padding: 20px;
  font-weight: 400;
  background-color: #F0F0F0;
`;

const AirlineLogo = styled.img`
  box-sizing: border-box;
  margin-right: 10px;
  width: 80px;
`;

const Id = styled.div`
  box-sizing: border-box;
  margin: 15px 0 0;
  width: 100%;
  text-align: right;
  font-size: 12px;
  font-weight: 700;
  color: #D3D4D7;
`;

const Passenger = ({info}) => {
    return (
        <>
            <StyledLine />
            <Template>

                <PassengerHeader>
                    <PassengerName>{info.name}</PassengerName>
                    <div>{info.trips} trips</div>
                </PassengerHeader>

                <AirlineInfo>
                    <div>
                        <AirlineLogo src={info.airline[0].logo} alt="로고"/>
                    </div>

                    <div>
                        {info.airline[0].slogan}
                    </div>
                </AirlineInfo>

                <Id>{info._id}</Id>
            </Template>
        </>

    );
};

export default Passenger;
