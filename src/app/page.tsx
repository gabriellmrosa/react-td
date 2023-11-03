"use client";

import Alien from "@/enemy/alien";
import MapOne from "@/maps/mapOne";
import TowerGround from "@/towers/towerGround";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function Home() {
  const [aliens, setAliens] = useState({
    aliensOne: Array(5).fill({
      life: 100,
    }),
  });

  return (
    <MapOne>
      <TowerGround />
      {aliens.aliensOne.map((element, index) => {
        return <Alien key={uuidv4()} delay={index} />;
      })}
    </MapOne>
  );
}
