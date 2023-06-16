import styled from "styled-components";

//-----------------------------------------

export const Layout = styled.div`
  position: relative;

  width: 90%;

  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 50px;
`;

export const Container = styled.div`
  width: 100%;
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
  margin-right: 100px;
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
export const Detail = styled.div`
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0.02em;
  color: white;
  text-align: left;
  margin-bottom: 20px;
`;
export const Button = styled.div`
  width: 120px;
  height: 40px;

  background: #c28a24;
  border-radius: 5px;

  display: flex;
  justify-content: center;
  align-items: center;

  color: white;
  font-size: 14px;

  span {
    margin-right: 5px;
  }
`;
export const ItemContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ItemBox = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  margin-top: 50px;
`;
