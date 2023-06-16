import React, { useCallback, useState } from "react";

// style
import {
  Layout,
  Title,
  Detail,
  ChartContainer,
  ButtonBox,
  Button,
  Container,
} from "./TokenSaleHero.styled";
import { PieChart, Pie, Cell, Sector } from "recharts";

const DATA = [
  { name: "Presale", value: 30 },
  { name: "Airdrop", value: 5 },
  { name: "Staking", value: 5 },
  { name: "Project Operations", value: 20 },
  { name: "Lock Up", value: 40 },
];

const COLORS = ["#4C91D0", "#C90000", "#6E2E9D", "#FBBD00", "#00AD4E"];

const renderActiveShape = (props: any) => {
  const RADIAN = Math.PI / 180;
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
    value,
  } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? "start" : "end";

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        stroke={fill}
        fill="none"
      />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        textAnchor={textAnchor}
        fill="#333"
      >{`PV ${value}`}</text>
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        dy={18}
        textAnchor={textAnchor}
        fill="#999"
      >
        {`${percent * 100}%`}
      </text>
    </g>
  );
};
//----------------------------------------------------

const About: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const [chartData, setChartData] = useState(DATA);

  const [chartColor, setChartColor] = useState(COLORS);

  const onPieEnter = useCallback(
    (_: any, index: React.SetStateAction<number>) => {
      setActiveIndex(index);
    },
    [setActiveIndex]
  );

  const changeChart = (key: number) => {
    if (key === 10) {
      setChartColor(COLORS);
      setChartData(DATA);
    } else {
      setChartColor([COLORS[key], "white"]);
      setChartData([DATA[key], { name: "", value: 100 - DATA[key].value }]);
    }
  };

  return (
    <Layout id="token">
      <Title data-aos="fade-up">
        Token Sale Proceed<span>s</span>
      </Title>
      <Detail data-aos="fade-up">
        Token sales are process of generating are selling cryptographically
        generated tokens.
      </Detail>
      <Container data-aos="fade-up">
        <ChartContainer>
          <PieChart width={500} height={500}>
            <Pie
              activeIndex={activeIndex}
              activeShape={renderActiveShape}
              data={chartData}
              cx={250}
              cy={250}
              innerRadius={80}
              outerRadius={120}
              fill="red"
              dataKey="value"
              onMouseEnter={onPieEnter}
            >
              {chartData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={chartColor[index % chartColor.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </ChartContainer>
        <ButtonBox>
          <Button
            onClick={() => {
              changeChart(10);
            }}
            data-aos="fade-up"
          >
            <span>Click!</span>
            <span>All process</span>
          </Button>
          {DATA.map((item, key) => (
            <Button
              key={key}
              color={COLORS[key]}
              onClick={() => {
                changeChart(key);
              }}
              data-aos="fade-up"
            >
              <span>Click!</span>
              <span>{item.name + " - " + item.value + "%"}</span>
            </Button>
          ))}
        </ButtonBox>
      </Container>
    </Layout>
  );
};

export default About;
