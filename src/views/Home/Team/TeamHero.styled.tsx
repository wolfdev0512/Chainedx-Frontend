import styled from "styled-components";

//-----------------------------------------

export const Layout = styled.div`
  position: relative;

  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 100px 0px;

  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
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
