import styled from "styled-components";

export const AlienWrapper = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 40px;
  height: 40px;
  overflow: hidden;
  transform: translate(-50%, -50%);
  border: 1px solid rgba(255, 255, 255, 0.2);
  opacity: 0;
  .noselect {
    user-select: none;
  }
  .life {
    display: block;
    position: relative;
    background: red;
    height: 3px;
    margin-bottom: 3px;
  }
  img {
    width: 100%;
    height: auto;
  }
  @keyframes alienWalk {
    0% {
      top: 75%;
      left: 100%;
    }
    20% {
      top: 55%;
      left: 75%;
    }
    40% {
      top: 15%;
      left: 50%;
    }
    60% {
      top: 15%;
      left: 40%;
    }
    80% {
      top: 90%;
      left: 20%;
    }
    100% {
      top: 80%;
      left: 0%;
    }
  }
`;
