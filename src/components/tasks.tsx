import "../styles/tasks.css"
import Task from "./task"

export default function Tasks() {
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
                <Task />
            </div>
        </section>
        </>
    )
}