"use client";

import React, { useState } from "react";
import { PropsToShoot, ShootWrapper, TowerWrapper } from "./style";

const TowerGround = () => {
  const [anima, setAnima] = useState<PropsToShoot>({
    top: 0,
    left: 0,
    shoot: 1,
  });
  const props = anima;

  return (
    <TowerWrapper
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
