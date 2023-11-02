import styled from "styled-components";

export const TowerWrapper = styled.div`
  position: absolute;
  top: 40%;
  right: 20%;
  width: 200px;
  height: 200px;
  background: red;
  opacity: 0.5;
`;

export type PropsToShoot = {
  top: number;
  left: number;
  shoot: number;
};

export const ShootWrapper = styled.div<PropsToShoot>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 10px;
  height: 10px;
  background: white;
  border-radius: 50%;
  animation: Shoot infinite both 1s;

  @keyframes Shoot {
    0% {
      top: 50%;
      left: 50%;
    }
    100% {
      top: ${({ top }) => top}%;
      left: 50%;
    }
  }
`;
