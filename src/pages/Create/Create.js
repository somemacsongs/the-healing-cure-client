import AddForm from "../../components/AddForm/AddForm";
import style from "./Create.module.css"

function Create (){
    return (
        <>  
            <center>
            <div className={style.container}>
                <center><h1 className={style.title}>Create here a new strain!</h1></center>
                <AddForm />
            </div>
            </center>
        </>
    )
}

export default Create;