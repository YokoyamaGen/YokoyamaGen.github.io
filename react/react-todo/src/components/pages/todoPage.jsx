/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import { TodoStatus } from "../organism/todo/todoStatus"
import { UncompletedTodos } from "../organism/todo/uncompletedTodos"
import { CompletedTodos } from "../organism/todo/completedTodos"
import { InputTextBtn } from "../molecule/inputTextBtn"

export const TodoPage = () => {
  const [text, setText] = useState("")
  const [editTask, setEditTask] = useState("")
  const [tasks, setTasks] = useState([])
  const completedTasks = tasks.filter((item) => item.isCompleted)
  const uncompletedTasks = tasks.filter((item) => !item.isCompleted)

  const saveBtn = () => {
    if(!text) return;
    const newTaskList = [...tasks, {name: text, isEdit: false, isCompleted: false}]
    setTasks(newTaskList)
    setText("")
  };

  const inputText = (e) => {
    setText(e.target.value)
  }

  const editText = (e) => {
    setEditTask(e.target.value)
  }

  const editTodo = (index) => {
    const editTasks = [...tasks]
    editTasks[index].isEdit = true;
    setTasks(editTasks)
    setEditTask(editTasks[index].name)
  }

  const editSaveBtn = (index) => {
    const editTasks = [...tasks]
    editTasks[index].name = editTask;
    editTasks[index].isEdit = false;
    setTasks(editTasks)
    setEditTask("")
  }

  const deleteUncompleteTodo = (index) => {
    if (window.confirm("本当に削除してもよろしいですか?")) {
      const deleteTasks = [...tasks]
      deleteTasks.splice(index, 1)
      setTasks(deleteTasks)
    }
  }

  const changeCompleted = (index) => {
    const newUncompletedTasks = [...uncompletedTasks]
    newUncompletedTasks[index].isCompleted = !newUncompletedTasks[index].isCompleted
    const newAllTasks = [...newUncompletedTasks, ...completedTasks]
    setTasks(newAllTasks)
  }

  const restoreTodo = (index) => {
    const newcompletedTasks = [...completedTasks]
    newcompletedTasks[index].isCompleted = !newcompletedTasks[index].isCompleted
    const newAllTasks = [...newcompletedTasks, ...uncompletedTasks]
    setTasks(newAllTasks)
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