import React from "react";
import { Lottie } from "./lazy";
import alien from "@/components/animation/alien.json";
export default function Footer() {
  return (
    <footer className=" px-4 py-8 text-center text-foreground border-t-white border-t w-full">
      <small className="mb-2 block text-xs">
        &copy; 2030 Paras. All rights reserved.
      </small>
    </footer>
  );
}
