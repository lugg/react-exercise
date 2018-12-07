import React from "react";
import styled from "styled-components";

const Division = styled.div`
  align-items: center;
  background-color: #f3f3f6;
  color: #1c1f34;
  display: flex;
  font-weight: 600;
  margin-right: 5px;
  width: 100%;

  ${props =>
    props.onClick &&
    `
      cursor: pointer;
      transition: background-color 0.3s ease;

      :hover {
        background-color: #f0f0f8;
      }
    `}

  :last-of-type {
    margin-right: 0;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

const ImageWrapper = styled.div`
  align-items: flex-end;
  display: flex;
  margin: 0 auto 15px auto;
  min-height: 55px;
`;

const ItemLabel = styled.div`
  padding: 0 35px;
  text-align: center;
`;

class GroupedSelectionItem extends React.Component {
  render() {
    const { className, icon, label, ...otherProps } = this.props;
    return (
      <Division className={className} {...otherProps}>
        <Content>
          {icon && (
            <ImageWrapper>
              <img src={icon} alt="" />
            </ImageWrapper>
          )}
          <ItemLabel>{label}</ItemLabel>
        </Content>
      </Division>
    );
  }
}

export default styled(GroupedSelectionItem)``;
