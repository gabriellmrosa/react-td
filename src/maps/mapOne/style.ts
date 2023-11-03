import styled from "styled-components";
import BgMapOne from "../../img/map-td.jpg";

export const MapOneWrapper = styled.div`
  position: relative;
  width: 900px;
  height: 500px;
  background: url(${BgMapOne.src}) no-repeat;
  background-size: cover;
  overflow: hidden;

  input[type="checkbox"] {
    display: none;
  }
`;
