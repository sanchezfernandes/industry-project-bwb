import "./Highlights.scss";
import Player1 from '../../assets/images/player001.png';
import Player2 from '../../assets/images/player002.png';
import Player3 from '../../assets/images/player003.png';
import Player4 from '../../assets/images/player004.png';
import AsiaIcon from '../../assets/svg/asia.png';

const Highlights = () => {

    const data  = [
        Player1,
        Player2,
        Player3,
        Player4,
        Player1,
        Player2,
        Player3,
        Player4,
    ]
  return (
    <main className="cont">

      <div className="cont__abs"> 
        <img 
        className="cont__icon"
         src={AsiaIcon} 
         alt="Asia banner"/>
      </div>

      <div className="cont__hori">
        { data.map((_url)=> (
            <img className="cont__pp" src={_url} />
        ))}

      </div>
    </main>
  );
};

export default Highlights;
