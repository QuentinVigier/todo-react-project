import { AiOutlinePlusCircle } from "react-icons/ai";
import "../styles/header.css";
import { useState } from "react";
import logo from "../assets/todoLogo.png";

interface HeaderProps {
  onAddTask: (taskTitle: string) => void;
}

export function Header({ onAddTask }: HeaderProps) {
  const [title, setTitle] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    onAddTask(title);
    setTitle("");
  }

  function onChangeTitle(e: React.ChangeEvent<HTMLInputElement>) {
    setTitle(e.target.value);
  }

  return (
    <header className="header">
      <img src={logo} alt="todo logo" className="logo" />

      <form className="newTaskForm" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add a task"
          value={title}
          onChange={onChangeTitle}
        />
        <button>
          Add
          <AiOutlinePlusCircle size={30} />
        </button>
      </form>
    </header>
  );
}
