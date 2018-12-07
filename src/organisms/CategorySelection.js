import React from "react";
import styled from "styled-components";
import {
  GroupedSelection,
  GroupedSelectionRow,
  GroupedSelectionItem
} from "../components/GroupedSelection";
import CraigslistPickupSvg from "../assets/craigslist_pickup.svg";
import DonationPickupSvg from "../assets/donation_pickup.svg";
import JunkRemovalSvg from "../assets/junk_removal.svg";
import OtherSvg from "../assets/other.svg";
import SmallMoveSvg from "../assets/small_move.svg";
import StorageMoveSvg from "../assets/storage_move.svg";
import StoreDeliverySvg from "../assets/store_delivery.svg";

const StyledGroupedSelection = styled(GroupedSelection)`
  margin: 0 auto;
`;

export default ({ onSelection }) => (
  <StyledGroupedSelection>
    <GroupedSelectionRow>
      <GroupedSelectionItem
        icon={StoreDeliverySvg}
        label="Store Delivery"
        onClick={onSelection("Store Delivery")}
      />
      <GroupedSelectionItem
        icon={SmallMoveSvg}
        label="Small Move"
        onClick={onSelection("Small Move")}
      />
      <GroupedSelectionItem
        icon={StorageMoveSvg}
        label="Storage Move"
        onClick={onSelection("Storage Move")}
      />
    </GroupedSelectionRow>
    <GroupedSelectionRow>
      <GroupedSelectionItem
        icon={JunkRemovalSvg}
        label="Junk Removal"
        onClick={onSelection("Junk Removal")}
      />
      <GroupedSelectionItem
        icon={CraigslistPickupSvg}
        label="Craigslist Pickup"
        onClick={onSelection("Craigslist Pickup")}
      />
      <GroupedSelectionItem
        icon={DonationPickupSvg}
        label="Donation Pickup"
        onClick={onSelection("Donation Pickup")}
      />
    </GroupedSelectionRow>
    <GroupedSelectionRow height="120px">
      <GroupedSelectionItem
        icon={OtherSvg}
        label="Other"
        onClick={onSelection("Other")}
      />
    </GroupedSelectionRow>
  </StyledGroupedSelection>
);
