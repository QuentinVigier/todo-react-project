import "../styles/tasks.css"
import Task from "./task"

export default function Tasks({ tasks }) {
    return (
        <>
        <section className="tasks">
            <header className="tasks_header">
                <div>
                    <p>Create Tasks</p>
                    <span>10</span>
                </div>

                <div>
                    <p className="textPurple">Completed Tasks</p>
                    <span>1 of 10</span>
                </div>
            </header>

            <div className="list">
                {tasks.map(task => (
                    <Task key={task.id} task={task} />
                ))}
            </div>
        </section>
        </>
    )
}