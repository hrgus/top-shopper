import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <nav className="NavBarLink">
        <NavLink to="/dairyPage">DairyPage</NavLink>
      </nav>
      <nav className="NavBarLink">
        <NavLink to="/frozenPage">FrozenPage</NavLink>
      </nav>
      <nav className="NavBarLink">
        <NavLink to="/generalMerchPage">GeneralMerchPage</NavLink>
      </nav>
      <nav className="NavBarLink">
        <NavLink to="/groceryPage">GroceryPage</NavLink>
      </nav>
    </nav>
  );
}

export default NavBar;
