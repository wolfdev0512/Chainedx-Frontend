import React from "react";

import { MDBAccordion, MDBAccordionItem, MDBContainer } from "mdb-react-ui-kit";

// style
import { Layout, Container, Title } from "./FaqHero.styled";

//----------------------------------------------------

const Status: React.FC = () => {
  return (
    <Layout id="faq">
      <Title data-aos="fade-up">
        FA<span>Q</span>
      </Title>
      <Container data-aos="fade-up">
        <MDBContainer
          className="mt-5"
          style={{ maxWidth: "1000px", padding: "0px" }}
        >
          <MDBAccordion alwaysOpen initialActive={1}>
            <MDBAccordionItem collapseId={1} headerTitle="Question #1">
              <strong>Answer</strong> It is shown by default, until the collapse
              plugin adds the appropriate classes that we use to style each
              element. These classes control the overall appearance, as well as
              the showing and hiding via CSS transitions. You can modify any of
              this with custom CSS or overriding our default variables. It's
              also worth noting that just about any HTML can go within the{" "}
              <code>.accordion-body</code>, though the transition does limit
              overflow.
            </MDBAccordionItem>
            <MDBAccordionItem collapseId={2} headerTitle="Question #2">
              <strong>This is the second item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </MDBAccordionItem>
            <MDBAccordionItem collapseId={3} headerTitle="Question #3">
              <strong>This is the third item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </MDBAccordionItem>
          </MDBAccordion>
        </MDBContainer>
      </Container>
    </Layout>
  );
};

export default Status;
