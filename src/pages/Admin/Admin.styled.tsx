import styled from "styled-components";

//-----------------------------------------

export const Layout = styled.div`
  position: relative;

  width: 100vw;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SectionsContainer = styled.div`
  padding-top: 80px;

  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1440px;

  padding-bottom: 80px;

  & > div:nth-child(odd) {
    background: none !important;
  }
  & > div:nth-child(even) {
    background: #2a2f35 !important;
  }
`;

export const BackContainer = styled.div`
  background: #2a2f35;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px 0px;

  margin-top: 80px;
`;

export const Title = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 44px;
  color: white;
  text-align: left;
  margin-bottom: 30px;
  span {
    color: #c28a24;
  }
`;

export const Button = styled.div`
  width: 150px;
  height: 40px;

  display: flex;
  align-items: center;
  justify-content: center;

  background: #c28a24;
  color: white;
`;
