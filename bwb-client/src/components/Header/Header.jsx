import React from "react";
import "./Header.scss";
import NbaBWBLogo from "../../assets/svg/NBA-BWB.svg";
import SearchFrom from "../../assets/svg/FormSearch.svg";


const Header = () => {
  return (
    <header className="header">
      
      <div className="header__nav">
        <img className="header__logo" src={NbaBWBLogo} />
        <img className="header__search" src={SearchFrom} />
        <ul className="header__nav-ul">
            <li className="header__nav-li">
                <p className="header__nav-p">Our Camps</p>
            </li>
            <li className="header__nav-li">
                <p className="header__nav-p">News</p>
            </li>
            <li className="header__nav-li">
                <p className="header__nav-p">Gallery</p>
            </li>
            <li className="header__nav-li">
                <p className="header__nav-p">Alumni</p>
            </li>
            <li className="header__nav-li">
                <p className="header__nav-p">Voting</p>
            </li>
        </ul>
      </div>
      
    </header>
  );
};

export default Header;
