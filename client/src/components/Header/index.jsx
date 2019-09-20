import React, { useState } from "react";
import Sidebar from "../shared/SideBar";
import "./Header.css";

import Select from "../shared/Select";

const Header = ({ handleChange }) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <header className="shop-header">
      <Select currencies={["RUB", "USD", "EUR"]} handleChange={handleChange} />
      <Sidebar isOpen={isOpen} setOpen={setOpen} />
    </header>
  );
};

export default Header;
