import React from "react";

// style
import {
  Layout,
  Copy,
  Container,
  ContentContainer,
  Image,
  Text,
  Social,
  Title,
  ItemList,
  Item,
} from "./Footer.styled";

// Image
import ImageLogo from "assets/png/Main-Logo.png";

import { FaTelegramPlane } from "react-icons/fa";
import { RiFacebookFill } from "react-icons/ri";
import {
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineTwitter,
} from "react-icons/ai";
import { SiDiscord } from "react-icons/si";
//----------------------------------------------------

const Footer: React.FC = () => {
  return (
    <Layout>
      <Container>
        <ContentContainer>
          <Image src={ImageLogo} alt="No Image" />
          <Text>
            ChainedX stands firmly in support of financial freedow and thhe
            liberty that bitcoin provides globally for anyone to voluntarily
            participate in a permissionless and decentralized network.
          </Text>
        </ContentContainer>
        <Social>
          <Title>Social media</Title>
          <ItemList>
            <Item>
              <AiOutlineInstagram />
            </Item>
            <Item>
              <AiOutlineLinkedin />
            </Item>
            <Item>
              <FaTelegramPlane />
            </Item>
            <Item>
              <AiOutlineTwitter />
            </Item>
            <Item>
              <RiFacebookFill />
            </Item>
            <Item>
              <SiDiscord />
            </Item>
          </ItemList>
        </Social>
      </Container>
      <Copy>Copyright 2023 All Rights Reserved.</Copy>
    </Layout>
  );
};

export default Footer;
