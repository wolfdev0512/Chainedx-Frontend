import styled from "styled-components";

//-----------------------------------------

export const Layout = styled.div`
  position: relative;

  width: 100%;

  display: flex;
  align-items: center;

  padding: 100px 70px;
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
  margin-right: 50px;
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
export const AddressBox = styled.div`
  width: 60%;
  background: #1e2329;
  border-radius: 5px;
  padding: 20px 30px 10px 30px;
  margin: 20px 0px 30px 0px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Address = styled.a`
  color: #c28a24;
  text-decoration: underline;
  font-size: 14px;
`;
export const CopyButton = styled.div<{ flag: boolean }>`
  width: 120px;
  border: 1px solid ${({ flag }) => (flag ? "green" : "white")};
  color: ${({ flag }) => (flag ? "green" : "white")};
  font-size: 18px;
  font-weight: 800;
  height: 40px;
  border-radius: 5px;

  display: flex;
  align-items: center;
  justify-content: center;

  margin: 30px 0px;

  transition: all 0.3s;

  &:hover {
    color: ${({ flag }) => (flag ? "green" : "#c28a24")};
    border: 1px solid ${({ flag }) => (flag ? "green" : "#c28a24")};
  }
`;

export const Container = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;
