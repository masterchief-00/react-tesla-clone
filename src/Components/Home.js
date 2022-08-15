import React from "react";
import styled from "styled-components";
import Section from "./Section";

function Home() {
  return (
    <Container>
      <Section
        title="Model S"
        description="Order Online for touchless delivery"
        backgroundImg="model-s.jpg"
        rightButtonText="Custom Order"
        leftButtonText="Existing Inventory"
      />
      <Section
        title="Model Y"
        description="Order Online for touchless delivery"
        backgroundImg="model-y.jpg"
        rightButtonText="Custom Order"
        leftButtonText="Existing Inventory"
      />
      <Section
        title="Model 3"
        description="Order Online for touchless delivery"
        backgroundImg="model-3.jpg"
        rightButtonText="Custom Order"
        leftButtonText="Existing Inventory"
      />
      <Section
        title="Model X"
        description="Order Online for touchless delivery"
        backgroundImg="model-x.jpg"
        rightButtonText="Custom Order"
        leftButtonText="Existing Inventory"
      />
      <Section
        title="Lowest cost solar panels in America"
        description="Money back guarantee"
        backgroundImg="solar-panel.jpg"
        rightButtonText="Order Now"
        leftButtonText="Learn more"
      />
      <Section
        title="Solar for New Roofs"
        description="Solar Roof costs less than a new roof plus solar panels"
        backgroundImg="solar-roof.jpg"
        rightButtonText="Order-now"
        leftButtonText="Learn More"
      />
      <Section
        title="Accessories"
        description=""
        backgroundImg="accessories.jpg"
        leftButtonText="Shop Now"
      />
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
`;
export default Home;
