import React, {useState} from 'react';
import styled from "styled-components";

const BarChartTemplate = styled.div`
  box-sizing: border-box;
  margin: 10px 50px;
  height: 150px;
  display: flex;
  justify-content: space-between;
  align-items: end;
  color: #555555;
  font-weight: 600;
  font-size: 12px;
`;

const BarChartElem = styled.div`
  box-sizing: border-box;
  text-align: center;
`;

const Bar = styled.div`
  box-sizing: border-box;
  background-color: black;
  margin: ${props => props.margin || '2px auto 8px'};
  width: 30px;
  height: ${props => props.size || '7px'};
  border-radius: 10px;
`;

const BarChart = ({data}) => {
    const [max, setMax] = useState(-1);

    (function () {
        data.map(data => (
            max < data.period && setMax(data.period)
        ))
    })();

    return (
        <BarChartTemplate>
            {
                data.map(data => (
                    <BarChartElem key={data.startDate}>
                        <div>
                            <div>{data.period} 일</div>
                            <Bar size={`${100/max * data.period}px`}/>
                        </div>
                        <div>{`${data.startDate.split('-')[1]}/${data.startDate.split('-')[2]}`}</div>
                    </BarChartElem>
                ))
            }
        </BarChartTemplate>
    );
};

export default BarChart;
