import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import FailedTask from "./FailedTask";
import CompleteTask from "./CompleteTask";

const TaskList = ({ data }) => {

  return (
    <div
      id="tasklist"
      className="w-full mt-10"
    >
      <div className="flex gap-6 overflow-x-auto py-4 px-2">

        {data.tasks.map((elem, idx) => {

          if (elem.active) {
            return <AcceptTask key={idx} task={elem} />;
          }

          if (elem.newTask) {
            return <NewTask key={idx} task={elem} />;
          }

          if (elem.completed) {
            return <CompleteTask key={idx} task={elem} />;
          }

          if (elem.failed) {
            return <FailedTask key={idx} task={elem} />;
          }

          return null;
        })}

      </div>
    </div>
  );
};

export default TaskList;