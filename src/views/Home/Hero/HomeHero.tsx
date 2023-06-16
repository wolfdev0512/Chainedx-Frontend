import React, { useState, useEffect } from "react";

// style
import {
  Layout,
  Title,
  Container,
  SubTitle,
  TimerContainer,
  Miner,
  Timer,
  CountDownContainer,
  Positions,
  Point,
  ProgressContainer,
  Progress,
  Pointer1,
  Mark,
  Pointer2,
  ButtonBox,
  Button,
  TimerItem,
  Number,
  Text,
} from "./HomeHero.styled";

// Image
import { FileIcon, RingIcon } from "assets/icon";
import ImageMiner from "assets/png/miner.png";

// count
import Countdown from "react-countdown";

// API
import { getWhite } from "api/white";
import { getTimer } from "api/timer";

//---------------------------------------------------

const timerList = ["DAYS", "HOURS", "MINUTES", "SECONDS"];

interface timerProps {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  completed: boolean;
}

const Home: React.FC<{ white: boolean }> = ({ white }) => {
  const [percentage, setPercentage] = useState(0);
  const [whitepaper, setWhitepaper] = useState("");
  const [timer, setTimer] = useState("2023/6/5");

  useEffect(() => {
    (async () => {
      const data = await getTimer();
      setTimer(data.status.timer);
    })();
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => setPercentage(50), 4000);
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  useEffect(() => {
    if (white) {
      (async () => {
        const data = await getWhite();
        setWhitepaper(data.status.white[0]);
      })();
    }
  }, [white]);

  const renderer = ({
    days,
    hours,
    minutes,
    seconds,
    completed,
  }: timerProps) => {
    if (completed) {
      return (
        <>
          {timerList.map((list, index) => (
            <TimerItem key={index}>
              <Number>
                <span>00</span>
              </Number>
              <Text>{list}</Text>
            </TimerItem>
          ))}
        </>
      );
    } else {
      return (
        <>
          <TimerItem>
            <Number>
              <span>{days < 10 ? `0${days}` : days}</span>
            </Number>
            <Text>DAYS</Text>
          </TimerItem>
          <TimerItem>
            <Number>
              <span>{hours < 10 ? `0${hours}` : hours}</span>
            </Number>
            <Text>HOURS</Text>
          </TimerItem>
          <TimerItem>
            <Number>
              <span>{minutes < 10 ? `0${minutes}` : minutes}</span>
            </Number>
            <Text>MINUTES</Text>
          </TimerItem>
          <TimerItem>
            <Number>
              <span>{seconds < 10 ? `0${seconds}` : seconds}</span>
            </Number>
            <Text>SECONDS</Text>
          </TimerItem>
        </>
      );
    }
  };
  return (
    <Layout id="home">
      <Title data-aos="fade-up">
        A <span>DECENTRALIZED</span> MEME TOKEN THAT EVOLVED INTO A VIBRANT
        ECOSYSTEM.
      </Title>
      <Container data-aos="fade-up">
        <SubTitle data-aos="fade-up">
          The mining starts immediately after confirmed payment. First payouts
          within <span>24 hours</span>.
        </SubTitle>
        <TimerContainer data-aos="fade-up">
          <Miner src={ImageMiner} alt="Hero abstraction" />
          <Timer>
            <CountDownContainer>
              <Countdown date={new Date(timer)} renderer={renderer} />
            </CountDownContainer>
            <Positions>
              <Point>Sale Raised</Point>
              <Point>Soft-caps</Point>
            </Positions>
            <ProgressContainer>
              <Progress percentage={percentage} />
              <Pointer1>
                <Mark></Mark>
                <span>46,000 BBC</span>
              </Pointer1>
              <Pointer2>
                <Mark></Mark>
                <p>96,000 BBC</p>
              </Pointer2>
            </ProgressContainer>
          </Timer>
        </TimerContainer>
      </Container>
      <ButtonBox data-aos="fade-up">
        {white ? (
          <Button flag={true} href={whitepaper} target="_blank">
            <FileIcon />
            <span>Whitepaper</span>
          </Button>
        ) : (
          <Button flag={true}>
            <FileIcon />
            <span>Whitepaper</span>
          </Button>
        )}

        <Button>
          <RingIcon />
          <span>Buy Token</span>
        </Button>
      </ButtonBox>
    </Layout>
  );
};

export default Home;
