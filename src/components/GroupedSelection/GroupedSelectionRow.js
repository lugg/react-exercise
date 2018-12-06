import styled from "styled-components";
import GroupedSelectionItem from "./GroupedSelectionItem";

export default styled.div`
  display: flex;
  height: ${props => props.height || "176px"};
  padding-bottom: 5px;
  position: relative;
  width: 100%;

  :first-of-type {
    ${GroupedSelectionItem}:first-of-type {
      border-top-left-radius: 5px;
    }
    ${GroupedSelectionItem}:last-of-type {
      border-top-right-radius: 5px;
    }
  }

  :last-of-type {
    ${GroupedSelectionItem}:first-of-type {
      border-bottom-left-radius: 5px;
    }
    ${GroupedSelectionItem}:last-of-type {
      border-bottom-right-radius: 5px;
    }
  }
`;
