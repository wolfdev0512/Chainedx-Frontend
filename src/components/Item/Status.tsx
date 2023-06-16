import React from "react";

// styled system
import styled from "styled-components";

// Image
import CardImage from "assets/png/card.png";

// type
interface StatusItemProps {
  title: string;
  text: string;
  flag: boolean;
}

// styeld component
const Container = styled.div`
  position: relative;

  width: 150px;
  height: 150px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-size: cover;
  color: white;
`;
const Title = styled.div`
  font-size: 24px;
`;
const Text = styled.div`
  margin-top: 5px;
  font-size: 14px;
`;

const Image = styled.div<{ flag: boolean }>`
  width: 100%;
  height: 100%;
  background: url(${CardImage});
  transform: ${({ flag }) => (flag ? "rotate(180deg)" : "")};

  background-size: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`;

// --------------------------------------------------------

const StatusItem: React.FC<StatusItemProps> = ({ title, text, flag }) => {
  return (
    <>
      <Container data-aos="flip-up">
        <Image flag={flag} />
        <Title>{title}</Title>
        <Text>{text}</Text>
      </Container>
    </>
  );
};
export default StatusItem;
