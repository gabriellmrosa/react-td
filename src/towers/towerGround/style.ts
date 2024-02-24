import styled from "styled-components";

export const TowerWrapper = styled.div`
  position: absolute;
  top: 25%;
  right: 20%;
  width: 250px;
  height: 250px;
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
      top: 0;
      left: 0;
    }
    100% {
      top: ${({ top }) => top};
      left: ${({ left }) => left};
    }
  }
`;
