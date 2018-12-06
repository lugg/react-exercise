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
  min-height: 60px;
`;

const Label = styled.div`
  padding: 0 35px;
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
          <Label>{label}</Label>
        </Content>
      </Division>
    );
  }
}

export default styled(GroupedSelectionItem)``;
