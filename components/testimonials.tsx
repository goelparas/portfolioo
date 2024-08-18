"use client";

import React from "react";
import SectionHeading from "./common/section-heading";
import { TestimonialsDemo } from "./testimonials/TestimonailsDemo";
import { useSectionInView } from "@/lib/hooks";

const Testimonials = () => {
  const { ref } = useSectionInView("Testimonials", 0.5);
  return (
    <section
      className="h-screen w-full flex flex-col justify-center items-center"
      ref={ref}
      id="testimonials"
    >
      <SectionHeading>Testimonials</SectionHeading>
      <TestimonialsDemo />
    </section>
  );
};

export default Testimonials;
