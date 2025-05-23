import React, { useState, useEffect } from "react";
import SignInMobile from "./SignInMobile";
import SignInDesktop from "./SignInDesktop";

const SignInWrapper = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile ? <SignInMobile /> : <SignInDesktop />;
};

export default SignInWrapper;
