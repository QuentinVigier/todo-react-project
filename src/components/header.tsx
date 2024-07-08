import "../styles/header.css"

export function Header() {
    return (
        <header className='header'>
            <img src="../assets/todoLogo.svg" alt="todo logo" />

            <form className="newTaskForm">
                <input type="text" placeholder="Add a task" />
                <button>Add</button>
            </form>
        </header>
    )
}