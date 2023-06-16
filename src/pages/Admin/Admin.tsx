import React, { useEffect, useState } from "react";

// style
import {
  Layout,
  SectionsContainer,
  BackContainer,
  Title,
  Button,
} from "./Admin.styled";

// components
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

import axios from "axios";

// @React-Notification
import "react-notifications/lib/notifications.css";
import { NotificationManager } from "react-notifications";

//----------------------------------------------

const Home: React.FC = () => {
  const [team, setTeam] = useState({
    team: "0",
    buyToken: "0",
    docs: "0",
    faq: "0",
  });
  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/status/projectStatus`)
      .then((response: any) => {
        setTeam(response.data.status);
      })
      .catch((error: any) => {});
  }, []);

  const changeTeam = () => {
    NotificationManager.info("Please wait");
    axios
      .put("http://localhost:4000/api/status/projectStatus", {
        team: team.team === "1" ? "0" : "1",
        buyToken: team.buyToken,
        docs: team.docs,
        faq: team.faq,
      })
      .then((response: any) => {
        NotificationManager.success("Success message", "Success");
        console.log(response);
        setTeam(response.data.status);
      })
      .catch((error: any) => {
        console.log(error);
      });
  };

  return (
    <Layout>
      <Title>
        Tea<span>m</span>
      </Title>
      <Button
        onClick={() => {
          changeTeam();
        }}
      >
        {team.team === "0" ? "Show" : "Hidden"}
      </Button>
    </Layout>
  );
};

export default Home;
