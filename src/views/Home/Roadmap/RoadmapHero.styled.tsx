import styled from "styled-components";

//image
import ImageRoadmap from "assets/png/roadmap.png";

//-----------------------------------------

export const Layout = styled.div`
  position: relative;

  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 80px;

  padding-bottom: 500px;
`;

export const Title = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 45px;
  letter-spacing: 2px;
  line-height: 50px;
  color: white;
  text-align: right;
  margin-bottom: 30px;
  span {
    color: #c28a24;
  }
`;
export const Detail = styled.div`
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0.02em;
  color: white;
  text-align: center;
  margin-bottom: 20px;
  width: 500px;
`;
export const Image = styled.div`
  position: absolute;
  width: 100%;
  height: 100px;

  top: 50%;

  background: url(${ImageRoadmap});
  background-repeat: repeat-x;
  background-size: 100% 100%;
`;

export const Position1 = styled.div`
  position: absolute;

  top: -130px;
  left: 8%;
`;
export const Position2 = styled.div`
  position: absolute;
  top: 120px;
  left: 23%;
`;
export const Position3 = styled.div`
  position: absolute;
  top: -130px;
  left: 38%;
`;
export const Position4 = styled.div`
  position: absolute;
  top: 120px;
  left: 53%;
`;
export const Position5 = styled.div`
  position: absolute;
  top: -130px;
  left: 68%;
`;
export const Position6 = styled.div`
  position: absolute;
  top: 120px;
  left: 83%;
`;
