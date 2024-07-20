/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import { TodoStatus } from "../organism/todo/todoStatus"
import { UncompletedTodos } from "../organism/todo/uncompletedTodos"
import { CompletedTodos } from "../organism/todo/completedTodos"
import { InputTextBtn } from "../molecule/inputTextBtn"

export const TodoPage = () => {
  const [uncompletedTasks, setUncompletedTasks] = useState([])
  const [text, setText] = useState("")
  const [editTask, setEditTask] = useState("")
  const [completedTasks, setCompletedTasks] = useState([])

  const saveBtn = () => {
    if(!text) return;
    const taskList = [...uncompletedTasks, {name: text, isEdit: false, isCompleted: false}]
    setUncompletedTasks(taskList)
    setText("")
  };

  const inputText = (e) => {
    setText(e.target.value)
  }

  const editText = (e) => {
    setEditTask(e.target.value)
  }

  const editTodo = (index) => {
    const newTasks = [...uncompletedTasks]
    newTasks[index].isEdit = true;
    setUncompletedTasks(newTasks)
    setEditTask(newTasks[index].name)
  }

  const editSaveBtn = (index) => {
    const newTasks = [...uncompletedTasks]
    newTasks[index].name = editTask;
    newTasks[index].isEdit = false;
    setUncompletedTasks(newTasks)
    setEditTask("")
  }

  const deleteUncompleteTodo = (index) => {
    if (window.confirm("本当に削除してもよろしいですか?")) {
      const newTasks = [...uncompletedTasks]
      newTasks.splice(index, 1)
      setUncompletedTasks(newTasks)
    }
  }

  const changeCompleted = (index) => {
    const uncompleted = [...uncompletedTasks]
    uncompleted[index].isCompleted = !uncompleted[index].isCompleted
    const completeTask = [uncompleted[index], ...completedTasks]
    setCompletedTasks(completeTask)

    uncompletedTasks.splice(index, 1)
    setUncompletedTasks(uncompletedTasks)
  }

  const restoreTodo = (index) => {
    const completed = [...completedTasks]
    completed[index].isCompleted = !completed[index].isCompleted
    const uncompleteTask = [completed[index], ...uncompletedTasks]
    setUncompletedTasks(uncompleteTask)

    completedTasks.splice(index, 1)
    setCompletedTasks(completedTasks)
  }

  const bodyStyle = css`
    padding: 15px;
  `

  return (
    <div css={bodyStyle}>
       <InputTextBtn
        onChange={inputText}
        text={text}
        onClick={saveBtn}
       />

      <TodoStatus
        completedTasks={completedTasks}
        uncompletedTasks={uncompletedTasks}
      />

      <UncompletedTodos
        uncompletedTasks={uncompletedTasks}
        editText={editText}
        editTask={editTask}
        editSaveBtn={editSaveBtn}
        changeCompleted={changeCompleted}
        editTodo={editTodo}
        deleteUncompleteTodo={deleteUncompleteTodo}
      />

      <CompletedTodos
        completedTasks={completedTasks}
        restoreTodo={restoreTodo}
      />
    </div>
  );
}