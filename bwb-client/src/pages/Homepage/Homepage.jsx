import "./Homepage.scss";
import BWBBanner from "../../assets/svg/BWB-Banner.png";
import MapBanner from "../../assets/svg/map.png";
import FooterBanner from "../../assets/svg/Footer.png";
import Section from "../../assets/svg/Section.png";
import PlayerCardDisplay from "../../components/PlayerCardDisplay/PlayerCardDisplay";
import Partners from "../../components/Partners/Partners";
import Highlights from "../../components/Highlights/Highlights";

const Homepage = () => {
  return (
    <main className="container">
        <Highlights />
      <img src={BWBBanner} alt="Image url src" />
      <div>
        <PlayerCardDisplay />
        <Partners />
      </div>

      <img src={Section} alt="Image url src" />
      <img src={MapBanner} alt="Image url src" />
      <img src={FooterBanner} alt="Image url src" />
    </main>
  );
};

export default Homepage;
