import CTA from "@/components/CTA";
import Container from "@/components/Container";
import Hero from "@/components/Hero";
import Subscribe from "@/components/Subscribe";
import Why from "@/components/Why";

import React from "react";

export default async function Home() {
  return (
    <div className="px-4 lg:px-0">
      <Container>
        <div>
          <Hero />
          <CTA />
          <Why />
          <Subscribe />
        </div>
      </Container>
    </div>
  );
}
