import { TbTrash } from "react-icons/tb"
import "../styles/task.css"
import { BsFillCheckCircleFill } from "react-icons/bs"

export default function Task({ task, onComplete, onDelete }) {
    return(
        <div className="task">
            <button className="checkContainer" onClick={() => onComplete(task.id)}>
                {task.isCompleted ? <BsFillCheckCircleFill /> : <div />}
            </button>

            <p className="">{task.title}</p>
            <button className="deleteButton" onClick={() => onDelete(task.id)}>
                <TbTrash size={20} />
            </button>
        </div>
    )
}