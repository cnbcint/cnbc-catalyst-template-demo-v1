import React from "react";
import VimeoPlayer from "../components/common/VimeoPlayer";
import useAnimation from "../hooks/useAnimation";

export default function Landing() {
  const { ref: refTitle } = useAnimation({
    animationName: "fadeInDown",
    duration: 500,
    delay: 0,
    loop: false,
    autoStart: true,
  });

  const { ref: refCopy } = useAnimation({
    animationName: "fadeIn",
    duration: 500,
    delay: 500,
    loop: false,
    autoStart: true,
  });

  return (
    <div className="demo_advertorial__landing">
      <h1 ref={refTitle}>Welcome to CNBC Catalyst™</h1>
      <div className="demo_advertorial__landing__video">
        <VimeoPlayer videoID="350988305" />
      </div>
      <p ref={refCopy}>
        We can connect you to the most powerful people on the planet.
      </p>
    </div>
  );
}
