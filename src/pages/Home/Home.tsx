import React, { useState, useEffect } from "react";

// style
import { Layout, SectionsContainer, BackContainer } from "./Home.styled";

// components
import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";
import {
  Hero,
  Status,
  About,
  How,
  Video,
  TokenSale,
  Roadmap,
  Community,
  Team,
  FAQ,
} from "views/Home";

// API
import { getStatus } from "api/status";

//----------------------------------------------

const Home: React.FC = () => {
  const [status, setStatus] = useState({
    buyToken: "0",
    docs: "0",
    faq: "0",
    team: "0",
    video: "0",
    whitepaper: "0",
  });
  useEffect(() => {
    (async () => {
      const data = await getStatus();
      setStatus(data.status);
    })();
  }, []);

  return (
    <Layout>
      <Header showTeam={status.team === "1"} showDocs={status.docs === "1"} />
      <SectionsContainer>
        <div>
          <Hero white={status.whitepaper === "1"} />
          <Status />
        </div>
        <BackContainer>
          <About />
          <How />
        </BackContainer>
        {status.video === "1" && <Video />}
        <TokenSale />
        <Roadmap />
        <Community />
        {status.team === "1" && <Team />}
        {status.faq === "1" && <FAQ />}
      </SectionsContainer>
      <Footer />
    </Layout>
  );
};

export default Home;
