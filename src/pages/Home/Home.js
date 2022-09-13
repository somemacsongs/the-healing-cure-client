import MegaCard from "../../components/MegaCard/MegaCard";
import style from "./Home.module.css"

function Home (){

  return (
    <>
    <div className={style.megaCard} >
    <MegaCard className={style.text}
      image="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
      title="Explore Strains"
      text="See all strains"
      button="EXPLORE"
      link="/explore"
    />
    <MegaCard className={style.text}
      image="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
      title="Create Strain"
      text="Create a new strain"
      button="CREATE"
      link="/create"
    />
    </div>
    
    </>
  )
}

export default Home;
