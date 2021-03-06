import React from "react";
import { NavItem } from "reactstrap";
import { NavLink } from "react-router-dom";

import classes from "./NavigationItem.module.css";

const NavigationItem = (props) => {
  return (
    <React.Fragment>
      <NavItem className={classes.liNavItem}>
        <NavLink
          to={props.href}
          activeClassName={classes.active}
          className={classes.links}
        >
          {props.pageName}
        </NavLink>
      </NavItem>
    </React.Fragment>
  );
};

export default NavigationItem;
