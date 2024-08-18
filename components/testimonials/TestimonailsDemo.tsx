"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

export function TestimonialsDemo() {
  return (
    <div className="flex flex-col antialiased justify-center gap-6 min-w-full">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="fast"
      />
      <InfiniteMovingCards items={testimonials} direction="left" speed="fast" />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "🚀 The UI is sleek and responsive, making everything feel effortless.",
    username: "@aditya",
    name: "Aditya",
    linkedIn: "https://www.linkedin.com/in/jain-adi",
  },
  {
    quote:
      "💡 The design is intuitive, with attention to detail that stands out.",
    username: "@paras",
    name: "Paras",
    linkedIn: "https://www.linkedin.com/in/goelparas01",
  },
  {
    quote:
      "🔥 Fast, smooth, and visually stunning. A top-notch frontend experience!",
    username: "@armaan",
    name: "Armaan",
    linkedIn: "https://www.linkedin.com/in/armaanalam",
  },
  {
    quote: "⚙️ Everything works flawlessly across devices. Truly impressive.",
    username: "@piyush",
    name: "Piyush",
    linkedIn: "https://www.linkedin.com/in/piyush2818",
  },
  {
    quote: "🌟 The frontend is polished and user-friendly. A joy to navigate.",
    username: "@abhishek",
    name: "Abhishek",
    linkedIn: "https://www.linkedin.com/in/abhishek-chorotiya-7a1a0a222",
  },
  {
    quote:
      "💻 High-quality code and great performance. The UI is a pleasure to use.",
    username: "@thabish",
    name: "Thabish",
    linkedIn: "https://www.linkedin.com/in/thabish",
  },
  {
    quote:
      "🔧 The user interface is intuitive and works perfectly. Highly recommended!",
    username: "@manthan",
    name: "Manthan",
    linkedIn: "https://www.linkedin.com/in/manthan77",
  },
];
