import styled from "styled-components";

//-----------------------------------------

export const Layout = styled.div`
  position: relative;

  width: 100vw;

  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 80px;
`;

export const Title = styled.div`
  width: 1000px;
  font-size: 36px;
  color: white;
  text-align: center;

  span {
    font-weight: 800;
  }
`;
export const Container = styled.div`
  margin-top: 40px;

  width: 700px;

  background: #2a2f35;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 30px 20px 60px 20px;
  border-radius: 20px;
`;
export const SubTitle = styled.div`
  width: 100%;
  font-size: 20px;
  font-weight: 500;
  color: white;
  text-align: center;
  span {
    color: #c28a24;
  }
`;
export const TimerContainer = styled.div`
  display: flex;
  width: 100%;
  margin-top: 30px;
`;
export const Miner = styled.img`
  width: 200px;
  height: 185px;
`;
export const Timer = styled.div`
  width: 100%;
`;
export const CountDownContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;
export const Positions = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  margin-top: 20px;
`;
export const Point = styled.div`
  font-size: 15px;
  line-height: 20px;
  letter-spacing: 0.02em;
  font-weight: 600;
  color: white;
`;

export const ProgressContainer = styled.div`
  margin-top: 15px;

  position: relative;

  height: 10px;
  border-radius: 20px;
  background-color: #3b4046;
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.15);

  &::after,
  &::before {
    content: "";
    box-sizing: border-box;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 10px solid #fff;
    background-color: #3b4046;
    position: absolute;
    z-index: 1;
  }

  &::before {
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  }

  &::after {
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    border-color: #3b4046;
    background-color: #fff;
  }

  &[data-after="active"]::after {
    background-color: #3b4046;
    border-color: #fff;
  }
`;
export const Progress = styled.div<{ percentage: number }>`
  height: 10px;
  background: #fff;
  border-radius: 20px;
  transition: width 250ms linear;
  position: relative;
  width: ${({ percentage }) => (percentage ? percentage : 0)}%;

  &::after {
    content: "${({ percentage }) => (percentage ? percentage : 0)}%";
    box-sizing: border-box;
    height: 50px;
    width: fit-content;
    border-radius: 30px;
    border: 10px solid #fff;
    background-color: #3b4046;
    position: absolute;
    z-index: 1;
    padding: 5px 20px;
    right: 0;
    top: 50%;
    transform: translate(50%, -50%);
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    color: #ffffff;
    text-align: center;
  }
`;
export const Pointer1 = styled.div`
  position: absolute;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  top: 0;
  left: 25%;
  transform: translateX(-50%);
  transition: left 300ms ease-in-out;

  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0.02em;
  color: white;
`;
export const Mark = styled.div`
  width: 20px;
  height: 20px;
  background: #ffffff;
  border: 2px solid #c28a24;
  box-sizing: border-box;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  transform: rotate(-45deg) translateY(-30%);
  margin-bottom: 10px;
`;
export const Pointer2 = styled.div`
  position: absolute;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  top: 0;
  left: 75%;
  transform: translateX(-50%);
  transition: left 300ms ease-in-out;

  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0.02em;
  color: white;
`;
export const ButtonBox = styled.div`
  width: 500px;
  display: flex;
  justify-content: space-around;
  margin-top: 40px;
`;
export const Button = styled.a<{ flag?: boolean }>`
  width: 150px;
  height: 40px;

  display: flex;
  justify-content: center;
  align-items: center;

  background: ${({ flag }) => (flag ? "#c28a24" : "none")};

  border: 1px solid #c28a24;
  border-radius: 5px;
  color: white;
  span {
    margin-left: 10px;
  }
`;
export const TimerItem = styled.div`
  width: 70px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const Number = styled.div`
  background: #3b4046;
  padding: 10px 15px;
  border-radius: 10px;
  span {
    font-size: 36px;
    font-weight: 700;
    background: linear-gradient(
      95.43deg,
      #c28a24 0%,
      #fed154 47.9%,
      #c28a24 100%
    );
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  }
`;
export const Text = styled.div`
  font-size: 14px;
  line-height: 30px;
  font-weight: 500;
  letter-spacing: 0.02em;
  color: white;
`;
