import "../styles/tasks.css"
import Task from "./task"

interface Task {
    id: string;
    title: string;
    isCompleted: boolean;
}

interface TasksProps {
    tasks: Task[];
    onComplete: (taskId: string) => void;
    onDelete: (taskId: string) => void;
}

export default function Tasks({ tasks, onComplete, onDelete }: TasksProps) {

    const tasksQuantity = tasks.length;
    const completedTasks = tasks.filter(task => task.isCompleted).length;

    return (
        <>
            <section className="tasks">
                <header className="tasks_header">
                    <div>
                        <p>Create Tasks</p>
                        <span>{tasksQuantity}</span>
                    </div>

                    <div>
                        <p className="textPurple">Completed Tasks</p>
                        <span>{completedTasks} of {tasksQuantity}</span>
                    </div>
                </header>

                <div className="list">
                    {tasks.map(task => (
                        <Task key={task.id} task={task} onComplete={onComplete} onDelete={onDelete} />
                    ))}
                </div>
            </section>
        </>
    )
}