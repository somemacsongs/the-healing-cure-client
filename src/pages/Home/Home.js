import MegaCard from "../../components/MegaCard/MegaCard";
import style from "./Home.module.css"
import explorePic from "../../assets/images/explorePic.png"
import createPic from "../../assets/images/createPic.png"

function Home (){

  return (
    <>
    <div className={style.megaCard} >
    <MegaCard className={style.text}
      image={explorePic}
      text="Explore the many different strains of Cannabis and how they can be used to help treat all sorts of conditions!"
      button="Explore"
      link="/explore"
      r="66" g="157" b="81"
    />
    <MegaCard className={style.text}
      image={createPic}
      text="Something missing? Here you can create a new strain and add it instantly to our database!"
      button="Create"
      link="/create"
      r="231" g="228" b="41"
    />
    </div>
    
    </>
  )
}

export default Home;
