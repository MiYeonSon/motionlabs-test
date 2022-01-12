import React, {useEffect, useState} from 'react';
import styled, {css} from "styled-components";
import Line from "./Line";

const LineChartTemplate = styled.div`
  box-sizing: border-box;

  margin: 30px 50px;
  height: 150px;

  color: #707070;
  font-size: 12px;
  font-weight: 700;
`;

const Box = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;

  &&& {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
  }
`;

const LineChartElem = styled.div`
  box-sizing: border-box;
  width: fit-content;
  height: fit-content;
  text-align: center;
  
  position: relative;
  bottom: ${props => props.bottom};
`;

const Dot = styled.div`
  box-sizing: border-box;
  background-color: black;
  margin: ${props => props.margin || '5px auto 8px'};
  width: ${props => props.size || '7px'};
  height: ${props => props.size || '7px'};
  border-radius: 50px;
`;

const StyledCycle = styled.div`
  ${props =>
          props.cycle >= 100 &&
          css`
            color: red;
          `};
`;

const LineChart = ({data}) => {
    const [max, setMax] = useState(-1);
    const [elemList, setElemList] = useState([]);
    const [ready, setReady] = useState(false);
    const [lineWidthList, setLineWidthList] = useState([]);
    const [angleList, setAngleList] = useState([]);

    let xPoint = [];
    let yPoint = [];

    let lineWidth = [];
    let angle = [];

    (function () {
        data.map(data => (
            max < data.cycle && setMax(data.cycle)
        ))
    })();

    useEffect(() => {
        setElemList(document.getElementsByClassName('chartElem'));
    }, []);

    useEffect(() => {
        if (elemList.length !== 0) {
            let i = 0;
            while (i < elemList.length) {
                xPoint = [...xPoint, Number(elemList[i].offsetLeft)];
                yPoint = [...yPoint, Number(elemList[i].offsetTop)];
                i += 1;
            }
            getLine(xPoint, yPoint);
        }
    }, [elemList]);


    const getLine = (xPoint, yPoint) => {
        let i = 0;
        while (i < data.length - 1) {
            let x = xPoint[i + 1] - xPoint[i];
            let y = yPoint[i + 1] - yPoint[i];

            lineWidth = lineWidth.concat(Math.sqrt((x * x) + (y * y)) - 6);
            angle = angle.concat(Math.atan2(y, x) * 180 / Math.PI);

            i += 1;
        }
        setLineWidthList(lineWidth);
        setAngleList(angle);
        setReady(true);
    };

    return (
        <LineChartTemplate>
            <Box>
                {
                    data.map((unit, index) => (
                        <LineChartElem className={'chartElem'}
                                       bottom={`${unit.cycle / max * 100 - 100}px`}
                                       key={unit.startDate}
                        >
                            {
                                ready && (
                                    <div>
                                        <StyledCycle cycle={unit.cycle}>{unit.cycle}일</StyledCycle>
                                            <Dot>
                                                {
                                                    index < data.length - 1 && <Line width={`${lineWidthList[index]}px`}
                                                                                     angle={`rotate(${angleList[index]}deg)`}/>
                                                }
                                            </Dot>
                                    </div>
                                )
                            }
                        </LineChartElem>
                    ))
                }
            </Box>

        </LineChartTemplate>
    );
};

export default LineChart;
