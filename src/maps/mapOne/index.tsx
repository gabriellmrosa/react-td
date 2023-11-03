"use client";

import { useEffect } from "react";
import { MapOneWrapper } from "./style";
import { useSelector } from "react-redux";
import TowerGround from "@/towers/towerGround";
import { RootState } from "@/configureStore";
import { useDispatch } from "react-redux";
import { alienAdded } from "@/enemy/enemySlice";

const MapOne = () => {
  const { aliens } = useSelector((state: RootState) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(alienAdded(1));
  }, [dispatch]);

  return (
    <MapOneWrapper>
      <TowerGround />
    </MapOneWrapper>
  );
};

export default MapOne;
