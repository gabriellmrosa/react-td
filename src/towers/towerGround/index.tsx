"use client";

import React, { RefObject, useState } from "react";
import { PropsToShoot, ShootWrapper, TowerWrapper } from "./style";

const TowerGround = ({ refi }: { refi: RefObject<HTMLDivElement> }) => {
  const [anima, setAnima] = useState<PropsToShoot>({
    top: 0,
    left: 0,
    shoot: 1,
  });
  const props = anima;

  return (
    <TowerWrapper
      ref={refi}
      onClick={() =>
        setAnima((old) => ({
          shoot: old.shoot === 1 ? 0 : 1,
          top: 100,
          left: 0,
        }))
      }
    >
      <ShootWrapper {...props} />
      <h2>{`${anima.shoot}`}</h2>
    </TowerWrapper>
  );
};

export default TowerGround;
