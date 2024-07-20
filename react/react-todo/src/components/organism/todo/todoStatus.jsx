/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const TodoStatus = (props) => {
  const {completedTasks, uncompletedTasks} = props

  const todoStatusStyle = css`
    margin: 15px 10px;
  `

  return(
    <div css={todoStatusStyle}>
      <div>全てのタスク： {uncompletedTasks.concat(completedTasks).length}</div>
      <div>完了済み：{completedTasks.length}</div>
      <div>未完了：{uncompletedTasks.length}</div>
    </div>
  )
}