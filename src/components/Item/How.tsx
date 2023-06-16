import React from "react";

// styled system
import styled from "styled-components";

// Image
import { DownloadIcon, InterfaceIcon, LockIcon, CartIcon } from "assets/icon";

// type
interface HowItemProps {
  image: number;
  title: string;
  detail: string;
}

// styeld component
const Container = styled.div`
  position: relative;

  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  background-size: cover;
  color: white;
`;
const Title = styled.div`
  font-size: 20px;
  font-weight: 900px;
  color: white;

  margin-left: 15px;
`;

const Box = styled.div`
  display: flex;
  align-items: center;
`;
const Detail = styled.div`
  margin-top: 10px;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0.02em;
  color: white;
`;

// --------------------------------------------------------

const HowItem: React.FC<HowItemProps> = ({ image, title, detail }) => {
  const Iconlist = [DownloadIcon, InterfaceIcon, LockIcon, CartIcon];
  const IconComponent = Iconlist[image];

  return (
    <>
      <Container data-aos="fade-up">
        <Box>
          <IconComponent />
          <Title>{title}</Title>
        </Box>
        <Detail>{detail}</Detail>
      </Container>
    </>
  );
};
export default HowItem;
