import React from "react";
import { ListItem } from "./HeaderItem.styles";
import { UilEstate } from "@iconscout/react-unicons";
const HeaderItem = ({ text, icon, href, index }) => {
  return (
    <ListItem
      className="nav__item"
      onClick={() => {
        ToggleMenu();
      }}
    >
      <Link
        to="/#home"
        className={
          currentElementIndexInViewport === 0
            ? "nav__link active__link"
            : "nav__link"
        }
      >
        <UilEstate size="16" className="nav__icon" />
        {text}
      </Link>
    </ListItem>
  );
};

export default HeaderItem;
