import styled from "styled-components";

//-----------------------------------------

export const Layout = styled.div`
  position: relative;

  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  background: #2a2f35;

  padding-top: 80px;
`;

export const Title = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 45px;
  letter-spacing: 1px;
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
  text-align: right;
  margin-bottom: 20px;
`;

export const ChartContainer = styled.div`
  flex: 1;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ButtonBox = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 300px;
`;
export const Button = styled.div<{ color?: string }>`
  position: relative;

  width: 70%;
  height: 40px;

  border-radius: 5px;
  padding: 10px 25px;

  color: #fff;
  font-family: "Lato", sans-serif;
  line-height: 42px;
  font-weight: 500;

  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;

  display: inline-block;

  outline: none;

  border: none;
  box-shadow: none;

  -webkit-perspective: 230px;

  perspective: 230px;

  span {
    background: ${({ color }) =>
      color
        ? color
        : " linear-gradient(0deg, rgba(0,172,238,1) 0%, rgba(2,126,251,1) 100%);"};
    display: block;
    position: absolute;
    width: 80%;
    height: 40px;
    box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
      7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    margin: 0;
    text-align: center;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
  }
  span:nth-child(1) {
    box-shadow: -7px -7px 20px 0px #fff9, -4px -4px 5px 0px #fff9,
      7px 7px 20px 0px #0002, 4px 4px 5px 0px #0001;
    -webkit-transform: rotateX(90deg);
    -moz-transform: rotateX(90deg);
    transform: rotateX(90deg);
    -webkit-transform-origin: 50% 50% -20px;
    -moz-transform-origin: 50% 50% -20px;
    transform-origin: 50% 50% -20px;
  }
  span:nth-child(2) {
    -webkit-transform: rotateX(0deg);
    -moz-transform: rotateX(0deg);
    transform: rotateX(0deg);
    -webkit-transform-origin: 50% 50% -20px;
    -moz-transform-origin: 50% 50% -20px;
    transform-origin: 50% 50% -20px;
  }
  &:hover span:nth-child(1) {
    box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
      7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);
    -webkit-transform: rotateX(0deg);
    -moz-transform: rotateX(0deg);
    transform: rotateX(0deg);
  }
  &:hover span:nth-child(2) {
    box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
      7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);
    color: transparent;
    -webkit-transform: rotateX(-90deg);
    -moz-transform: rotateX(-90deg);
    transform: rotateX(-90deg);
  }
`;
export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
