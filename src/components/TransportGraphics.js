import React from "react";
import styled from "styled-components";
import OneLuggerSvg from "../assets/one_lugger.svg";
import TwoLuggersSvg from "../assets/two_luggers.svg";
import PickupSvg from "../assets/pickup.svg";
import VanSvg from "../assets/van.svg";

const Division = styled.div`
  position: relative;
  padding-top: 5px;
  height: 100%;
`;

const LuggersImage = styled.img`
  position: absolute;
  bottom: 3px;
  right: 33px;
`;

const VehicleImage = styled.img`
  ${props => !props.big && `padding-top: 5px;`}
  height: 44px;
  width: auto;
`;

export default ({ crewSize, slug }) => {
  return (
    <Division>
      <VehicleImage
        src={slug === "xl" || slug === "van" ? VanSvg : PickupSvg}
        big={slug === "xl"}
      />
      <LuggersImage src={crewSize === 1 ? OneLuggerSvg : TwoLuggersSvg} />
    </Division>
  );
};
