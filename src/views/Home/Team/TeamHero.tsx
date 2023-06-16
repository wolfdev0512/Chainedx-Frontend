import React from "react";

// style
import { Layout, Container, Title } from "./TeamHero.styled";

// swiper
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination, Navigation } from "swiper";

import TeamItem from "components/Item/Team";

const TeamMembers = [
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/chainedx-9384d.appspot.com/o/93314018.jfif?alt=media&token=55bfc5cd-25f9-4d71-8689-2a9270e60622",
    name: "Developer1",
    role: "Full Stack Developer",
  },
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/chainedx-9384d.appspot.com/o/93314018.jfif?alt=media&token=55bfc5cd-25f9-4d71-8689-2a9270e60622",
    name: "Developer2",
    role: "Full Stack Developer",
  },
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/chainedx-9384d.appspot.com/o/93314018.jfif?alt=media&token=55bfc5cd-25f9-4d71-8689-2a9270e60622",
    name: "Developer3",
    role: "Full Stack Developer",
  },
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/chainedx-9384d.appspot.com/o/93314018.jfif?alt=media&token=55bfc5cd-25f9-4d71-8689-2a9270e60622",
    name: "Developer4",
    role: "Full Stack Developer",
  },
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/chainedx-9384d.appspot.com/o/93314018.jfif?alt=media&token=55bfc5cd-25f9-4d71-8689-2a9270e60622",
    name: "Developer5",
    role: "Full Stack Developer",
  },
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/chainedx-9384d.appspot.com/o/93314018.jfif?alt=media&token=55bfc5cd-25f9-4d71-8689-2a9270e60622",
    name: "Developer6",
    role: "Full Stack Developer",
  },
];

//----------------------------------------------------

const Status: React.FC = () => {
  return (
    <Layout id="team">
      <Title data-aos="fade-up">
        Team<span>s</span>
      </Title>
      <Container data-aos="fade-up">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
        >
          {TeamMembers.map((item, key) => (
            <SwiperSlide key={key}>
              <TeamItem image={item.image} name={item.name} role={item.role} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Layout>
  );
};

export default Status;
