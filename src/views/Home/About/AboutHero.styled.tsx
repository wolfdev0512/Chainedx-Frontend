import styled from "styled-components";

//-----------------------------------------

export const Layout = styled.div`
  position: relative;

  width: 90%;

  display: flex;
  align-items: center;
`;

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Image = styled.img`
  width: 400px;
`;
export const ContentContainer = styled.div`
  margin-left: 30px;
`;
export const Title = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 44px;
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
