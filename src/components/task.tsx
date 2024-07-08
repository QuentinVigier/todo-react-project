import { TbTrash } from "react-icons/tb"
import "../styles/task.css"

export default function Task({ task }) {
    return(
        <div className="task">
            <button className="checkContainer">
                <div />
            </button>

            <p>{task.title}</p>
            <button className="deleteButton">
                <TbTrash size={20} />
            </button>
        </div>
    )
}