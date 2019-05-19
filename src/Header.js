import React, { PureComponent } from "react";
import "./Header.css";
import "./logo.svg"

class Header extends PureComponent {
  render() {
    return (
      <header className="component-header">
        <img
          src={"http://s.cdpn.io/3/kiwi.svg"}
          width="32"
          height="32"
          alt=""
        />
      Market Statistics

      </header>
    );
  }
}
export default Header;
