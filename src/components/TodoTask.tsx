import React from "react";
import { ITask } from "../Interfaces";

interface Props {
  task: ITask;
  closeTask(id: number): void;
}
const TodoTask = ({ task, closeTask }: Props) => {
  return (
    <div className="task">
      <div className="content">
        <span>{task.taskName}</span>
        <span>{task.deadline}</span>
      </div>
      <button onClick={() => closeTask(task.id)}>close</button>
    </div>
  );
};

export default TodoTask;
