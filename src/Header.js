import React from "react";
import Button from "./Button";

const Header = () => {
  return (
    <div className="header">
      <Button>Button 1</Button>
      <Button className="button button-secondary">Button 2</Button>
    </div>
  );
};

export default Header;
