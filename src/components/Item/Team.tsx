import React from "react";

// styled system
import styled from "styled-components";

// type
interface TeamItemProps {
  image: string;
  name: string;
  role: string;
}

// styeld component
const Container = styled.div`
  position: relative;

  width: 300px;

  display: flex;
  flex-direction: column;
  align-items: center;

  border: 2px solid #41474e;

  border-radius: 20px;

  color: white;

  background: #1e2328;

  padding: 50px 0px;

  transition: all 0.5s;

  &:hover {
    background: #c28a24;
  }
`;
const Title = styled.div`
  margin-top: 30px;
  width: 90%;
  font-size: 24px;
  font-weight: 900px;
  color: white;
  text-align: center;
  font-weight: 800;
`;

const Detail = styled.div`
  width: 90%;

  text-align: center;
  margin-top: 10px;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: 0.02em;
  color: white;
`;

const Image = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
`;

// --------------------------------------------------------

const TeamItem: React.FC<TeamItemProps> = ({ image, name, role }) => {
  return (
    <>
      <Container>
        <Image src={image} alt="No Image" />
        <Title>{name}</Title>
        <Detail>{role}</Detail>
      </Container>
    </>
  );
};
export default TeamItem;
