import "./Homepage.scss";
import BWBBanner from "../../assets/svg/BWB-Banner.png";
import MapBanner from "../../assets/svg/map.png";
import FooterBanner from '../../assets/svg/Footer.png'
import Section from '../../assets/svg/Section.png'


const Homepage = () => {

  return (
    <main className="container">
      <img src={BWBBanner} alt="Image url src" />
      <img src={Section} alt="Image url src" />
      <img src={MapBanner} alt="Image url src" />
      <img src={FooterBanner} alt="Image url src" />
    </main>
  );
};

export default Homepage;
