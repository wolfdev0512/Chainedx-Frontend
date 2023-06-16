import styled from "styled-components";

//-----------------------------------------

export const Layout = styled.div`
  position: relative;

  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 80px 0px;

  .accordion {
    background: black;
  }
  .accordion-item {
    background: black;
    color: white;
  }
  .accordion-header {
    background: black;
    color: white;
  }
  .accordion-button {
    background: black;
    color: white;
  }
`;

export const Container = styled.div`
  margin-top: 50px;
  width: 90%;
`;
export const Title = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 45px;
  letter-spacing: 4px;
  line-height: 50px;
  color: white;
  text-align: left;
  margin-bottom: 30px;
  span {
    color: #c28a24;
  }
`;
