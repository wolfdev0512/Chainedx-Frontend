import styled from "styled-components";
import { Link } from "react-router-dom";

//-----------------------------------------

export const Layout = styled.div`
  position: relative;

  width: 100vw;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: white;
`;

export const Image = styled.img`
  width: 400px;

  @media screen and (max-width: 768px) {
    width: 250px;
  }
`;
export const Text = styled.div`
  font-family: "Cherry Bomb One", cursive;
  font-size: 25px;
  width: 500px;
  text-align: center;
  @media screen and (max-width: 768px) {
    width: 300px;
    font-size: 18px;
  }
`;
export const Button = styled(Link)`
  margin-top: 20px;
  font-family: "Cherry Bomb One", cursive;
  font-size: 25px;
  text-align: center;

  width: 200px;
  height: 50px;
  border: 3px solid #2f5aa2;
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 768px) {
    width: 150px;
    height: 40px;
    font-size: 18px;
  }
`;
