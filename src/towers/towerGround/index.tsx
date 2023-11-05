"use client";

import React, { useState } from "react";
import { PropsToShoot, ShootWrapper, TowerWrapper } from "./style";

const TowerGround = ({ opa }: { opa: any }) => {
  const [anima, setAnima] = useState<PropsToShoot>({
    top: 0,
    left: 0,
    shoot: 1,
  });
  const props = anima;

  const handleClick = () => {
    opa();

    setAnima((old) => ({
      shoot: old.shoot === 1 ? 0 : 1,
      top: 100,
      left: 0,
    }));
  };

  return (
    <TowerWrapper onClick={handleClick}>
      <ShootWrapper {...props} />
      <h2>{`${anima.shoot}`}</h2>
    </TowerWrapper>
  );
};

export default TowerGround;
