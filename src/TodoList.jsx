import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Text, VStack, Input } from "@chakra-ui/react";
import { useStore, addTask, updateTask } from "./Store";

export const TodoList = (uuid) => {
  const [newTaskText, setNewTaskText] = useState("");
  const { tasks, setTasks, list } = useStore({ uuid });

  return (
    <VStack>
      <Link to="/">back</Link>
      <Text>Sharing url: </Text>
      <input type="text" readOnly value={window.location.href} />
      <div className={"field-row section"}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setNewTaskText("");
          }}
        >
          <Input
            id="newtask"
            type="text"
            value={newTaskText}
            onChange={(e) => setNewTaskText(e.target.value)}
          />
          <Button
            type="submit"
            onClick={() => (newTaskText ? addTask(newTaskText, list.id) : "")}
          >
            add task
          </Button>
        </form>
      </div>
      <div>
        {tasks
          ? tasks.map((task) => {
              return (
                <div key={task.id} className={"field-row"}>
                  <Input
                    checked={task.complete ? true : ""}
                    onChange={(e) => {
                      tasks.find((t, i) => {
                        if (t.id === task.id) {
                          tasks[i].complete = !task.complete;
                          return true;
                        } else {
                          return false;
                        }
                      });
                      setTasks([...tasks]);
                      updateTask(task.id, { complete: e.target.checked });
                    }}
                    type="checkbox"
                    id={`task-${task.id}`}
                  ></Input>
                  <label htmlFor={`task-${task.id}`}>
                    {task.complete ? (
                      <del>{task.task_text}</del>
                    ) : (
                      task.task_text
                    )}
                  </label>
                </div>
              );
            })
          : ""}
      </div>
    </VStack>
  );
};
