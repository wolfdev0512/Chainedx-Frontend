import React, { useState, useEffect } from "react";

// style
import {
  Layout,
  ImageContainer,
  Image,
  ContentContainer,
  Title,
  Detail,
  AddressBox,
  Address,
  CopyButton,
  Container,
} from "./CommunityHero.styled";

// Image
import ImageCommunity from "assets/png/community.png";

import { RiFileCopy2Line } from "react-icons/ri";

import { CopyToClipboard } from "react-copy-to-clipboard";

//----------------------------------------------------

const About: React.FC = () => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (copied) {
      setTimeout(() => {
        setCopied(false);
      }, 5000);
    }
  }, [copied]);

  return (
    <Layout id="community">
      <ContentContainer>
        <Title data-aos="fade-up">
          Communit<span>y</span>
        </Title>
        <Detail data-aos="fade-up">
          If you’d like to donate to the Devs, send ETH, SHIB, LEASH, or BONE
          here. Thank you for your support! WOOF!
        </Detail>
        <Container data-aos="fade-up">
          <AddressBox>
            <Address href="https://bscscan.com/address/0xc351155C80aCD043BD5F8FE7ffc8536af1fF9375">
              0xc351155C80aCD043BD5F8FE7ffc8536af1fF9375
            </Address>
            <CopyButton flag={copied}>
              <CopyToClipboard
                text={"0xc351155C80aCD043BD5F8FE7ffc8536af1fF9375"}
                onCopy={() => setCopied(true)}
              >
                <div>
                  <RiFileCopy2Line /> <span>{copied ? "Copied" : "Copy"}</span>
                </div>
              </CopyToClipboard>
            </CopyButton>
            <Detail>
              You can see all the end-to-end transactions about our token here.
            </Detail>
          </AddressBox>
        </Container>
        <Detail data-aos="fade-up">
          Our community grows stronger every day. Please follow our social
          platforms to get the most up-to-date, accurate ChainedX information.
        </Detail>
        <Detail data-aos="fade-up">
          Using the links below, you can join our various groups alongside the
          1M+ other members of the ChainedXperts.
        </Detail>
      </ContentContainer>
      <ImageContainer data-aos="fade-up">
        <Image src={ImageCommunity} alt="about chainedx illsutration" />
      </ImageContainer>
    </Layout>
  );
};

export default About;
