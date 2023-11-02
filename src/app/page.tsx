"use client";

import Alien from "@/enemy/alien";
import MapOne from "@/maps/mapOne";
import TowerGround from "@/towers/towerGround";
import React, { RefObject, useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function Home() {
  const aliensRef = useRef<HTMLDivElement[]>([]);

  const towerOne = useRef(null);

  const [aliens, setAliens] = useState({
    aliensOne: Array(5).fill({
      life: 100,
    }),
  });

  useEffect(() => {
    (async () => {
      for (let i = 0; i < aliens.aliensOne.length; i++) {
        aliensRef.current[i].style.cssText =
          "animation:alienWalk 10s linear infinite both; opacity:1;";
        await new Promise((res) => setTimeout(res, 800));
      }
    })();

    console.log(aliensRef);
  }, [aliens.aliensOne.length]);

  return (
    <MapOne>
      <TowerGround refi={towerOne} />
      {aliens.aliensOne.map((element, index) => {
        return (
          <Alien
            key={uuidv4()}
            refi={(ref: any) =>
              ref === null ? null : (aliensRef.current[index] = ref)
            }
          />
        );
      })}
    </MapOne>
  );
}
