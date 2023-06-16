import React from "react";

// style
import {
  Layout,
  ImageContainer,
  Image,
  ContentContainer,
  Title,
  Detail,
} from "./AboutHero.styled";

// Image
import ImageAbout from "assets/png/about.png";

//----------------------------------------------------

const About: React.FC = () => {
  return (
    <Layout id="about">
      <ImageContainer data-aos="fade-up">
        <Image src={ImageAbout} alt="about chainedx illsutration" />
      </ImageContainer>
      <ContentContainer>
        <Title data-aos="fade-up">
          About Chained<span>X</span>
        </Title>
        <Detail data-aos="fade-up">
          ChainedX is one of thhe most transformative techhnologies since the
          invention of the Internet. ChainedX stands firmly in support of
          financial freedom and the liberty that Bitcoin provides globally for
          anyone to voluntarily participate in a permissionless and
          decentralized work.
        </Detail>
        <Detail data-aos="fade-up">
          Which empowers people to not be marginalized by governments and
          financial institutions. Bitcoin is freedom. If you are going to use a
          passage of Loreum Ipsum, you need to be sure there isn’t anything
          embarrassing hidden in the middle of the text.
        </Detail>
      </ContentContainer>
    </Layout>
  );
};

export default About;
