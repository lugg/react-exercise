import React from "react";
import styled from "styled-components";
import DownArrowSvg from "../../assets/down_arrow.svg";
import UpArrowSvg from "../../assets/up_arrow.svg";
import ShyLabelInput from "../../components/ShyLabelInput";

const Division = styled.div`
  text-align: initial;
`;

const Image = styled.img`
  margin: 0 15px 0 5px;
`;

const IconInput = styled.div`
  align-items: center;
  display: flex;
  height: 47px;
`;

const Divider = styled.div`
  background-color: rgba(59, 68, 120, 0.05);
  height: 1px;
  width: 100%;
  margin: 15px 0;
`;

export default ({
  destination,
  handleDestinationChange,
  handleOriginChange,
  origin
}) => (
  <Division>
    <IconInput>
      <Image src={UpArrowSvg} />
      <ShyLabelInput
        label="Pick up from:"
        onChange={handleOriginChange}
        placeholder="284 Brick Rd"
        type="text"
        value={origin}
      />
    </IconInput>
    <Divider />
    <IconInput>
      <Image src={DownArrowSvg} />
      <ShyLabelInput
        label="Destination"
        onChange={handleDestinationChange}
        placeholder="1020 4th St"
        type="text"
        value={destination}
      />
    </IconInput>
  </Division>
);
