"use client";

import Image from "next/image.js";
import { AlienWrapper, Life } from "./style";
import { useEffect, useRef } from "react";

interface Props {
  delay: number;
}

const Alien = ({ delay }: Props) => {
  const towerDiv = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!(towerDiv.current === null)) {
      towerDiv.current.style.cssText = `animation:alienWalk 10s infinite both ${delay}s linear;`;

      // const { left, top } = towerDiv.current.getBoundingClientRect();

      // console.log("left top", left, top);
    }
  }, [delay]);

  return (
    <AlienWrapper ref={towerDiv}>
      <Life></Life>
      <Image
        width={100}
        height={100}
        src={
          "https://cdnb.artstation.com/p/assets/images/images/006/503/665/original/william-robinson-gun-alien-passive-gif.gif?1499108527"
        }
        alt={"Alien"}
      />
    </AlienWrapper>
  );
};

export default Alien;
