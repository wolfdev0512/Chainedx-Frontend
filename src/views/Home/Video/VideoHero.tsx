import React, { useState, useEffect, useRef } from "react";

// style
import { Layout, Container, Title } from "./VideoHero.styled";
import "video-react/dist/video-react.css"; // import css

// Component

import { Player, ControlBar } from "video-react";

// API
import { getVideo } from "api/video";

//----------------------------------------------------

const Status: React.FC = () => {
  const [video, setVideo] = useState("");
  const videoRef = useRef<any>();

  useEffect(() => {
    (async () => {
      const data = await getVideo();
      console.log(data.status.video[0]);
      setVideo(data.status.video[0]);
    })();
  }, []);

  return (
    <Layout ref={videoRef}>
      <Title data-aos="fade-up">
        Video<span>s</span>
      </Title>
      <Container data-aos="fade-up">
        <Player autoPlay>
          {video !== "" && <source src={video} />}
          <ControlBar autoHide={false} />
        </Player>
      </Container>
    </Layout>
  );
};

export default Status;
