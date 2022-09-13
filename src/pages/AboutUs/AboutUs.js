import {Link} from "react-router-dom";
import style from "./AboutUs.module.css"
import mac from "../../assets/images/mac.jpg"

function AboutUs(){
    return (
        <>
            <div>
                <center><h1>ABOUT US</h1></center>
            </div>

        <div className={style.AboutCard}>
            <div className={style.eachPerson}>
                <h2>Pedro Macena</h2>
                <img src={mac} alt="PedroMacena" className={style.profilePic}/>
                <div className={style.AboutLink}>
                    <Link to="https://github.com/somemacsongs">
                        <button><img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="giticon" className={style.profilePic}/></button>
                    </Link>
                    <Link to="https://www.linkedin.com/in/pedromacena/">
                        <button><img src="https://w7.pngwing.com/pngs/1024/30/png-transparent-computer-icons-logo-linkedin-logopsd-source-files-angle-text-rectangle.png" alt="linkdinicon" className={style.profilePic}/></button>
                    </Link>
                </div>

            </div>
            <div className={style.eachPerson}>
                <h2>Lucas Vitro</h2>
                <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="LucasVitro" className={style.profilePic}/>
                <div className={style.AboutLink}>
                    <Link to="https://github.com/somemacsongs">
                        <button><img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="giticon" className={style.profilePic}/></button>
                    </Link>
                    <Link to="https://www.linkedin.com/in/pedromacena/">
                        <button><img src="https://w7.pngwing.com/pngs/1024/30/png-transparent-computer-icons-logo-linkedin-logopsd-source-files-angle-text-rectangle.png" alt="linkdinicon" className={style.profilePic}/></button>
                    </Link>
                </div>
            </div>
        </div>
        
        
        </>
    )
}

export default AboutUs;