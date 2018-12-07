import React from "react";
import styled from "styled-components";
import AllOurLuggersSvg from "../../assets/all_our_luggers.svg";

const Image = styled.img`
  padding: 35px 14px 10px 14px;
  width: 100%;
`;

const Copy = styled.p`
  color: #848793;
  font-size: 14px;
  text-align: center;
  padding: 0 15px;
  margin-top: 15px;
  margin-bottom: 25px;
`;

export default () => (
  <div>
    <Image src={AllOurLuggersSvg} alt="" />
    <Copy>
      All our Luggers are equipped with the necessary tools such as straps,
      blankets and wrap to protect your items.
    </Copy>
  </div>
);
