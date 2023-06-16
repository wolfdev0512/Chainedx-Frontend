import React from "react";

// style
import {
  Layout,
  Title,
  Detail,
  Image,
  Position1,
  Position2,
  Position3,
  Position4,
  Position5,
  Position6,
} from "./RoadmapHero.styled";

import RoadmapItem from "components/Item/Roadmap";

//----------------------------------------------------

const Roadmap: React.FC = () => {
  return (
    <Layout id="roadmap">
      <Title data-aos="fade-up">
        Roadma<span>p</span>
      </Title>
      <Detail data-aos="fade-up">
        The use of crypto-currencies has become more widespread, and they are
        now increasingly accepted as a legitimate currency for transactions.
      </Detail>
      <Image>
        <div style={{ position: "relative" }}>
          <Position1>
            <RoadmapItem
              image={0}
              title="April 2018"
              text="Inotial Coin Distribution & marketing"
            />
          </Position1>
          <Position2>
            <RoadmapItem
              image={1}
              title="March 2018"
              text="BTC mode of payment in ChainedX"
            />
          </Position2>
          <Position3>
            <RoadmapItem
              image={2}
              title="October 2018"
              text="Coin Marketcap, World coin index"
            />
          </Position3>
          <Position4>
            <RoadmapItem
              image={3}
              title="February 2018"
              text="Exchange ChainedX to Bitcoin"
            />
          </Position4>
          <Position5>
            <RoadmapItem
              image={4}
              title="June 2018"
              text="Send-Receive coin ChainedX & mobile"
            />
          </Position5>
          <Position6>
            <RoadmapItem
              image={5}
              title="December 2018"
              text="Online, Trading ICO Token Sale"
            />
          </Position6>
        </div>
      </Image>
    </Layout>
  );
};

export default Roadmap;
