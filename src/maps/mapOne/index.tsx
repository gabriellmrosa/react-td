"use client";

import { useEffect, useRef } from "react";
import { MapOneWrapper } from "./style";
import { useSelector } from "react-redux";
import TowerGround from "@/towers/towerGround";
import { RootState } from "@/configureStore";
import { useDispatch } from "react-redux";
import Alien from "@/enemy/alien";
import { v4 as uuidv4 } from "uuid";
import { refreshPositions } from "@/enemy/enemySlice";

const MapOne = () => {
  const { aliens } = useSelector((state: RootState) => state);
  const dispatch = useDispatch();

  const aliensRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const aliensPositions = aliensRef.current.map((element, index) => ({
      top: element.getBoundingClientRect().top,
      left: element.getBoundingClientRect().left,
      index: index,
      life: 10,
    }));
    dispatch(refreshPositions(aliensPositions));
  }, [dispatch]);

  const starAnimation = () => {
    aliensRef.current.forEach((element, index) => {
      element.style.animation = `alienWalk 10s infinite both linear ${index}s`;
    });
  };

  return (
    <MapOneWrapper>
      <h2 style={{ color: "red" }}>{aliens[0].life}</h2>
      {aliens.map((element, index) => (
        <Alien
          key={uuidv4()}
          delay={index}
          myRef={(ref: HTMLDivElement) =>
            aliensRef.current ? (aliensRef.current[index] = ref) : null
          }
        />
      ))}
      <TowerGround opa={starAnimation} />
    </MapOneWrapper>
  );
};

export default MapOne;
