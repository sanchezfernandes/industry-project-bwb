import React from "react";
import "./Footer.scss";
import ButtonNba from "../../assets/svg/btn-nba.png";
import TextSvg from "../../assets/svg/textNBA.svg";
import AddStream from "../../assets/svg/addStream.svg";
import TextNextGame from "../../assets/svg/textNextGame.svg";
import LeaguePassBtn from "../../assets/svg/leaguePass.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__pre">
        <div>
          <img className="footer__btn" src={ButtonNba} alt="btn alt" />
          <img className="footer__text" src={TextSvg} />
        </div>

        <div className="footer__next-column">
          <div className="footer__next">
            <img
              className="footer__next_stream"
              src={TextNextGame}
              alt="btn alt"
            />
            <img className="footer__add-stream" src={AddStream} alt="btn alt" />
          </div>
          <img className="footer__btn-pass" src={LeaguePassBtn} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
