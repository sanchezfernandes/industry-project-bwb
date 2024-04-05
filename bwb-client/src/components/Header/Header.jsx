import React from "react";
import "./Header.scss";
import ButtonNba from "../../assets/svg/btn-nba.png";
import TextSvg from "../../assets/svg/textNBA.svg";
import AddStream from "../../assets/svg/addStream.svg";
import TextNextGame from "../../assets/svg/textNextGame.svg";
import LeaguePassBtn from "../../assets/svg/leaguePass.svg";
import NbaBWBLogo from "../../assets/svg/NBA-BWB.svg";
import SearchFrom from "../../assets/svg/FormSearch.svg";


const Header = () => {
  return (
    <header className="header">
      <div className="header__pre">
        <div>
          <img className="header__btn" src={ButtonNba} alt="btn alt" />
          <img className="header__text" src={TextSvg} />
        </div>

        <div className="header__next-column">
          <div className="header__next">
            <img
              className="header__next_stream"
              src={TextNextGame}
              alt="btn alt"
            />
            <img className="header__add-stream" src={AddStream} alt="btn alt" />
          </div>
          <img className="header__btn-pass" src={LeaguePassBtn} />
        </div>
      </div>
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
