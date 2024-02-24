"use client";

import React, { RefObject, useState } from "react";
import { PropsToShoot, ShootWrapper, TowerWrapper } from "./style";

type Props = {
  refi: RefObject<HTMLDivElement>;
}


const TowerGround = ({ refi }: Props) => {

  const [shoot, setShoot] = useState<PropsToShoot>({
    top: 10,
    left: 0,
    shoot: 1,
  });
  const props = shoot;

  return (
    <TowerWrapper ref={refi}>
      <ShootWrapper {...props} />
      <h2>{`${shoot.shoot}`}</h2>
    </TowerWrapper>
  );
};

export default TowerGround;
