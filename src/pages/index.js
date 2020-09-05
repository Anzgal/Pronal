import React from "react";
import Hero from "../sections/landing1/Hero";
import Clients from "../sections/landing1/Clients";
import Feature from "../sections/landing1/Feature";
import Content1 from "../sections/landing1/Content1";
import Content2 from "../sections/landing1/Content2";
import Testimonial from "../sections/landing1/Testimonial";
import Testimonials2 from "../sections/landing1/Testimonials2";

import CTA from "../sections/landing1/CTA";
import PageWrapper from "../components/PageWrapper";

const IndexPage = () => {
  return (
    <>
      <PageWrapper>
        <Hero />
        {/* <Clients /> */}
        <Feature />
        <Content1 />
        <Content2 />
        <Testimonial />
        <Testimonials2 />
        {/* <CTA /> */}
      </PageWrapper>
    </>
  );
};
export default IndexPage;
