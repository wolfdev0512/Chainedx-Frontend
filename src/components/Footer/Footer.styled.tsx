import styled from "styled-components";

//-----------------------------------------

export const Layout = styled.div`
  position: relative;

  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Copy = styled.div`
  width: 100vw;
  font-size: 14px;
  padding: 15px 15px;

  display: flex;
  justify-content: center;
  align-items: center;

  background: white;
`;

export const Container = styled.div`
  display: flex;

  width: 1440px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 100px 50px;
`;
export const ContentContainer = styled.div`
  flex: 1;
`;
export const Image = styled.img`
  width: 150px;
  height: 80px;
`;
export const Text = styled.div`
  width: 80%;
  margin-top: 30px;

  font-size: 18px;
  line-height: 30px;
  letter-spacing: 0.5px;
  font-weight: 500;
  color: white;
`;
export const Social = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Title = styled.div`
  font-size: 40px;

  font-weight: 800;
  color: white;
`;
export const ItemList = styled.div`
  margin-top: 50px;
  display: flex;

  width: 90%;
  justify-content: space-around;
`;
export const Item = styled.div`
  width: 55px;
  height: 55px;
  background: #c28a24;

  border-radius: 10px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 35px;
  color: white;

  transition: all 0.5s;

  &:hover {
    color: #c28a24;
    background: white;
    transform: scale(1.1);
  }
`;
