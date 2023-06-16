import React from "react";

// style
import {
  Layout,
  ImageContainer,
  Image,
  ContentContainer,
  Title,
  Detail,
  Container,
  Button,
  ItemContainer,
  ItemBox,
} from "./HowHero.styled";

// Image
import ImageHow from "assets/png/how.png";
import { FaArrowRight } from "react-icons/fa";

// Components
import HowItem from "components/Item/How";

//----------------------------------------------------

const Status: React.FC = () => {
  return (
    <Layout id="how_it_work">
      <Container>
        <ContentContainer>
          <Title data-aos="fade-up">
            How it Works<span>?</span>
          </Title>
          <Detail data-aos="fade-up">
            Bitcoin Mining is a peer-to-peer computer process used to secure and
            verify bitcoin transactions-ayments from one user to another on a
            decentralized network.
          </Detail>
          <Button data-aos="fade-up">
            <span>Let's Start</span>
            <FaArrowRight />
          </Button>
        </ContentContainer>
        <ImageContainer data-aos="fade-up">
          <Image src={ImageHow} alt="about chainedx illsutration" />
        </ImageContainer>
      </Container>
      <ItemContainer>
        <ItemBox>
          <HowItem
            image={0}
            title="Download a Wallet"
            detail="Bitcoin Mining is a peer-to-peer computer process used to secure and verify bitcoin transactions-ayments from one user to another on a decentralized network."
          />
          <HowItem
            image={1}
            title="Safe & Secure"
            detail="Bitcoin Mining is a peer-to-peer computer process used to secure and verify bitcoin transactions-ayments from one user to another on a decentralized network."
          />
        </ItemBox>
        <ItemBox>
          <HowItem
            image={2}
            title="Buy & Sell"
            detail="Bitcoin Mining is a peer-to-peer computer process used to secure and verify bitcoin transactions-ayments from one user to another on a decentralized network."
          />
          <HowItem
            image={3}
            title="A Better User Interface"
            detail="Bitcoin Mining is a peer-to-peer computer process used to secure and verify bitcoin transactions-ayments from one user to another on a decentralized network."
          />
        </ItemBox>
      </ItemContainer>
    </Layout>
  );
};

export default Status;
