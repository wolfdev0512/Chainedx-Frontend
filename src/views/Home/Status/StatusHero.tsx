import React from "react";

// style
import { Layout, Container } from "./StatusHero.styled";

// Component
import StatusItem from "components/Item/Status";

//----------------------------------------------------

const Status: React.FC = () => {
  return (
    <Layout>
      <Container className="mx pad">
        <StatusItem title={"$4M"} text={"Soft Cap"} flag={true} />
        <StatusItem title={"$4M"} text={"Hard Cap"} flag={false} />
        <StatusItem title={"46,000"} text={"Investors"} flag={true} />
        <StatusItem title={"4.1/5"} text={"ICO Track"} flag={false} />
        <StatusItem title={"4.1/5"} text={"ICO Ranker"} flag={true} />
        <StatusItem title={"4.1/5"} text={"ICO Holder"} flag={false} />
      </Container>
    </Layout>
  );
};

export default Status;
