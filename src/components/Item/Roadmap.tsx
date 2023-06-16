import React from "react";

// styled system
import styled from "styled-components";

// Icon
import {
  RoadIcon1,
  RoadIcon2,
  RoadIcon3,
  RoadIcon4,
  RoadIcon5,
  RoadIcon6,
} from "assets/icon";

// type
interface StatusItemProps {
  title: string;
  text: string;
  image: number;
}

// styeld component
const Container = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-size: cover;
  color: white;
`;
const Title = styled.div`
  margin-top: 15px;
  font-size: 16px;
  margin-bottom: 15px;
`;
const Text = styled.div`
  font-size: 12px;
`;

// --------------------------------------------------------

const RoadmapItem: React.FC<StatusItemProps> = ({ title, text, image }) => {
  const Iconlist = [
    RoadIcon1,
    RoadIcon2,
    RoadIcon3,
    RoadIcon4,
    RoadIcon5,
    RoadIcon6,
  ];
  const IconComponent = Iconlist[image];

  return (
    <>
      <Container data-aos="fade-up">
        <IconComponent />
        <Title>{title}</Title>
        <Text>{text}</Text>
      </Container>
    </>
  );
};
export default RoadmapItem;
