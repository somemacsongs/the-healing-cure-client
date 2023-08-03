import {Link} from "react-router-dom";
import style from "./AboutUs.module.css"
import mac from "../../assets/images/mac.jpg"
import giticon from "../../assets/images/GitHub.png"
import inicon from "../../assets/images/linkedin.png"
import vitro from "../../assets/images/vitro.jpg"

function AboutUs(){
    return (
        <div className={style.container}>
            <div className={style.text}>
                <center>
                    <h1 className={style.title}>About Us</h1>
                    <p className={style.aboutText} >
                       Have you ever considered Cannabis might help you treat your chronic illness? 
                       Many scientists dedicate their lives to study the benefits of Cannabis-based medical treatments
                       and the results are... awesome. This website is a project created during the course of a Full Stack Web Development Bootcamp at 
                       <a href="https://www.ironhack.com/" style={{textDecoration:"none", color:"green"}}> Ironhack </a>
                       by Pedro and Lucas, two brazilian developers who decided to create an interactive database of the many different strains of Medical Cannabis.
                       Want to know more about us? Check out our GitHub and LinkedIn pages below!
                    </p>
                </center>
            </div>
        <center>
        <div className={style.AboutCard} >
            
            <div className={style.eachPerson}>
                <p className={style.name}>Pedro Macena</p>
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
                <p className={style.name}>Lucas Vitro</p>
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
        </center> 
        </div>
    )
}

export default AboutUs;