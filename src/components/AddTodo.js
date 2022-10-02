import React from "react";
import { db } from "../firebase";
import { collection,addDoc } from "firebase/firestore";

export default function AddToDo(){
    const [title, setTitle] = React.useState("");

    const handleSubmit = async (e) => {
        //forhindrer reloads with submit af formen
        e.preventDefault();
        //checker om bruger har indtastet
        if (title !== "") {
            //oplagring til database
            await addDoc(collection(db, "todos"), {
                title,
                completed: false,
            })
            setTitle("");
        }
    };
    return(
        <form onSubmit={handleSubmit}>
            <div  className="input_container">
                <input
                    type="text"
                    placeholder="Enter todo..."
                    value={title} //gemmes i database
                    onChange={(e)=> setTitle(e.target.value)} //opdatere state ved bruger input
                />
            </div>
            <div className="btn_container"> 
                <button>Add</button>
            </div>
        </form>
    )
}