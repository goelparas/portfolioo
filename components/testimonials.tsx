"use client";

import React from "react";
import SectionHeading from "./common/section-heading";
import { TestimonialsDemo } from "./testimonials/TestimonailsDemo";
import { useSectionInView } from "@/lib/hooks";

const Testimonials = () => {
  const { ref } = useSectionInView("Testimonials", 0.5);
  return (
    <section
      className="h-full w-full py-20 flex flex-col justify-center items-center"
      ref={ref}
      id="testimonials"
    >
      <SectionHeading
        icon="😊"
        className="flex justify-center items-center px-0 w-full"
      >
        Mmmm, a little brag
      </SectionHeading>
      <TestimonialsDemo />
    </section>
  );
};

export default Testimonials;
