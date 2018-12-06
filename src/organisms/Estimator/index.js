import React from "react";
import styled from "styled-components";
import {
  GroupedSelection,
  GroupedSelectionRow,
  GroupedSelectionItem
} from "../../components/GroupedSelection";
import CraigslistPickupSvg from "../../assets/craigslist_pickup.svg";
import DonationPickupSvg from "../../assets/donation_pickup.svg";
import JunkRemovalSvg from "../../assets/junk_removal.svg";
import OtherSvg from "../../assets/other.svg";
import SmallMoveSvg from "../../assets/small_move.svg";
import StorageMoveSvg from "../../assets/storage_move.svg";
import StoreDeliverySvg from "../../assets/store_delivery.svg";

const Header = styled.h3`
  color: #1c1f34;
  display: inline-block;
  font-size: 56px;
  margin-bottom: 68px;
`;

const Content = styled.div`
  text-align: center;
`;

const StyledGroupedSelection = styled(GroupedSelection)`
  margin: 0 auto;
`;

export default () => (
  <Content>
    <Header>Get an estimate</Header>
    <StyledGroupedSelection>
      <GroupedSelectionRow>
        <GroupedSelectionItem icon={StoreDeliverySvg} label="Store Delivery" />
        <GroupedSelectionItem icon={SmallMoveSvg} label="Small Move" />
        <GroupedSelectionItem icon={StorageMoveSvg} label="Storage Move" />
      </GroupedSelectionRow>
      <GroupedSelectionRow>
        <GroupedSelectionItem icon={JunkRemovalSvg} label="Junk Removal" />
        <GroupedSelectionItem
          icon={CraigslistPickupSvg}
          label="Craigslist Pickup"
        />
        <GroupedSelectionItem
          icon={DonationPickupSvg}
          label="Donation Pickup"
        />
      </GroupedSelectionRow>
      <GroupedSelectionRow height="120px">
        <GroupedSelectionItem icon={OtherSvg} label="Other" />
      </GroupedSelectionRow>
    </StyledGroupedSelection>
  </Content>
);
