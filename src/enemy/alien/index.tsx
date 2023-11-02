"use client";

import Image from "next/image.js";
import { AlienWrapper } from "./style";

const Alien = ({ refi }: { refi: any }) => {
  return (
    <AlienWrapper ref={refi}>
      <span className="life w-100"></span>
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
