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
