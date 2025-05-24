import React, { useState, useEffect } from "react";
import SignUpMobile from "./SignUpMobile";
import SignUpDesktop from "./SignUpDesktop";

const SignUpWrapper = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile ? <SignUpMobile /> : <SignUpDesktop />;
};

export default SignUpWrapper;
