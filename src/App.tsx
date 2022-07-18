import React, { ChangeEvent, FC, useState } from "react";
import { ITask } from "./Interfaces";
import "./App.css";
import TodoTask from "./components/TodoTask";

const App: FC = () => {
  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0);
  const [todoList, setTodoList] = useState<ITask[]>([]);
  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.name === "task") {
      setTask(event.target.value);
    } else {
      setDeadline(Number(event.target.value));
    }
  };

  const addTask = (): void => {
    const newTask = {
      id: Math.random(),
      taskName: task,
      deadline,
    };
    console.log(newTask);
    setTodoList([...todoList, newTask]);
    setTask("");
    setDeadline(0);
  };
  const closeTask = (id: number): void => {
    const newTasks = todoList.filter((todo) => todo.id !== id);
    setTodoList(newTasks);
  };
  return (
    <div className="App">
      <div className="header">
        <div className="inputContainer">
          <input
            type="text"
            placeholder="Tasks...."
            name="task"
            value={task}
            onChange={changeHandler}
          />
          <input
            type="number"
            placeholder="enter deadline"
            name="deadline"
            value={deadline}
            onChange={changeHandler}
          />
        </div>
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="todolist">
        {todoList.map((task: ITask, key: number) => {
          return (
            <TodoTask task={task} key={Math.random()} closeTask={closeTask} />
          );
        })}
      </div>
    </div>
  );
};

export default App;
