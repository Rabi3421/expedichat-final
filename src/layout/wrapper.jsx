import React, { useEffect } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
// middleware
gsap.registerPlugin(ScrollTrigger);
// internal
import ScrollToTop from "@/hooks/scroll-to-top";
import { animationCreate } from "../../utils/utils";
import { Toaster } from "sonner";

const Wrapper = ({ children }) => {
  useEffect(() => {
    // animation
    setTimeout(() => {
      animationCreate();
    }, 100);
  }, []);

  return (
    <>
      {children}
      <ScrollToTop />
      <Toaster position="top-right" />
    </>
  );
};

export default Wrapper;
