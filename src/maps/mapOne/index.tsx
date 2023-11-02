"use client";

import { ReactNode } from "react";
import { MapOneWrapper } from "./style";

interface Props {
  children?: ReactNode;
}

const MapOne = ({ children }: Props) => (
  <MapOneWrapper>{children}</MapOneWrapper>
);

export default MapOne;
