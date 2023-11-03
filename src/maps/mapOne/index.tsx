"use client";

import { useEffect } from "react";
import { MapOneWrapper } from "./style";
import { useSelector } from "react-redux";
import TowerGround from "@/towers/towerGround";
import { RootState } from "@/configureStore";
import { useDispatch } from "react-redux";
import Alien from "@/enemy/alien";
import { v4 as uuidv4 } from "uuid";

const MapOne = () => {
  const { aliens } = useSelector((state: RootState) => state);
  const dispatch = useDispatch();

  useEffect(() => {}, []);

  return (
    <MapOneWrapper>
      {aliens.map((element, index) => (
        <Alien key={uuidv4()} delay={index} />
      ))}
      <TowerGround />
    </MapOneWrapper>
  );
};

export default MapOne;
