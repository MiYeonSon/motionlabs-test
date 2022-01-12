import React, {useEffect, useState} from 'react';
import PageLayout from "../layout/PageLayout";
import ContentTemplate from "../layout/ContentTemplate";
import styled from 'styled-components';
import LineChart from "./LineChart";
import BarChart from "./BarChart";
import axios from "axios";

const GraphChart = styled.div`
  box-sizing: border-box;
  padding: 12px;
  border-radius: 10px;
  border: 1px solid #EAEAEA;
`;

const Label = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: end;
  align-items: center;
  font-size: 10px;
  font-weight: 400;
`;

const LabelElem = styled.div`
  box-sizing: border-box;
  background-color: black;
  margin : 0 5px 0 15px;
  width: ${props => props.size};
  height: 7px;
  border-radius: 50px;
`;

const ReportPage = () => {
    const [response, setResponse] = useState();

    useEffect(async () => {
        let res = await axios.get('https://motionz-kr.github.io/playground/apis/report.json');
        setResponse(res.data.data);
    }, []);

    return (
        <PageLayout>
            <ContentTemplate>
                <h2>User Report</h2>

                <GraphChart>
                    <Label>
                        <LabelElem size={'7px'} /> 활동 주기
                        <LabelElem size={'20px'} /> 활동 기간, 시작일
                    </Label>
                    {
                        response !== undefined && (
                            <div>
                                <LineChart data={response}/>
                                <BarChart data={response}/>
                            </div>
                        )
                    }
                </GraphChart>
            </ContentTemplate>
        </PageLayout>
    );
};

export default ReportPage;
