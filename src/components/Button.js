import styled from "styled-components";

export default styled.button`
  background: none;
  color: #505fb4;
  border: none;
  padding: 0;
  font: inherit;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;

  ${props =>
    props.styled &&
    `
    background-color: #ffef55;
    border-radius: 3px;
    color: #283060;
    font-size: 15px;
    padding: 15px 20px;
    margin-left: 15px;
  `}
`;
