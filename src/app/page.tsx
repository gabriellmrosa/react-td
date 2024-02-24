"use client";

import Alien from "@/enemy/alien";
import MapOne from "@/maps/mapOne";
import TowerGround from "@/towers/towerGround";
import React, { useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { PropMapContextProvider } from '../maps/mapOne/context'

export default function Home() {
  const [allInformation, setAllInformation] = useState({})
  const aliensRef = useRef<HTMLDivElement[]>([]);
  const towerOne = useRef<HTMLDivElement>(null);
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

    // setInterval(() => {
    //   setPositions()
    // }, 3000)
  }, [aliens.aliensOne.length]);


  const setPositions = () => {
    //first pcture towers position
    const towerOnePositions = {
      top: towerOne.current?.getBoundingClientRect().top,
      left: towerOne.current?.getBoundingClientRect().left,
      bottom: towerOne.current?.getBoundingClientRect().bottom,
      right: towerOne.current?.getBoundingClientRect().right
    }
    //first picture aliens positions
    const aliensObjectBorn = aliensRef.current.map(element => ({
      top: element.getBoundingClientRect().top,
      left: element.getBoundingClientRect().left,
      bottom: element.getBoundingClientRect().bottom,
      right: element.getBoundingClientRect().right
    }))

    setAllInformation(old => ({ ...old, towerOnePositions, aliensObjectBorn }))
  }

  return (
    <PropMapContextProvider>
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
    </PropMapContextProvider>


  );
}
