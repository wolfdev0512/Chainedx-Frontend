import React from "react";

// style
import { Layout, Image, Text, Button } from "./Lost.styled";

// image
import Image404 from "assets/png/404.png";

//----------------------------------------------------

const Lost: React.FC = () => {
  return (
    <Layout>
      <Image src={Image404} alt="No Image" />
      <Text>You are seeing this because you are headed into abyss!</Text>
      <Button to={"/"}>Go Home</Button>
    </Layout>
  );
};

export default Lost;
