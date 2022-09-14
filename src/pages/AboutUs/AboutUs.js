import {Link} from "react-router-dom";
import style from "./AboutUs.module.css"
import mac from "../../assets/images/mac.jpg"
import giticon from "../../assets/images/GitHub.png"
import inicon from "../../assets/images/linkedin.png"
import vitro from "../../assets/images/vitro.jpg"

function AboutUs(){
    return (
        <>
            <div>
                <center><h1 className={style.title}>About Us</h1></center>
            </div>

        <div className={style.AboutCard}>
            <div className={style.eachPerson}>
                <h2>Pedro Macena</h2>
                <img src={mac} alt="PedroMacena" className={style.profilePic}/>
                <div className={style.AboutLink}>
                    <a href="https://github.com/somemacsongs">
                        <button className={style.button}><img className={style.icon} src={giticon} alt="giticon" /></button>
                    </a>
                    <a href="https://www.linkedin.com/in/pedromacena/">
                        <button className={style.button}><img className={style.icon} src={inicon} alt="linkdinicon" /></button>
                    </a>
                </div>

            </div>
            <div className={style.eachPerson}>
                <h2>Lucas Vitro</h2>
                <img src={vitro} alt="LucasVitro" className={style.profilePic}/>
                <div className={style.AboutLink}>
                    <a href="https://github.com/Vitroo80">
                        <button className={style.button}><img className={style.icon} src={giticon} alt="giticon" /></button>
                    </a>
                    <a href="https://www.linkedin.com/in/lucasvitro/">
                        <button className={style.button}><img className={style.icon} src={inicon} alt="linkdinicon" /></button>
                    </a>
                </div>
            </div>
        </div>
        
        
        </>
    )
}

export default AboutUs;