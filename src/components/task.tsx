import { TbTrash } from "react-icons/tb"
import "../styles/task.css"

export default function Task(){
    return(
        <div className="task">
            <button className="checkContainer">
                <div />
            </button>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <button className="deleteButton">
                <TbTrash size={20} />
            </button>
        </div>
    )
}