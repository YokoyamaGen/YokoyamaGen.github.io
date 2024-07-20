/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { PrimaryBtn } from "../../atom/btn/primary"

export const CompletedTodos = (props) => {
  const {completedTasks, restoreTodo} = props;

  const completedWrapStyle = css`
    border: 2px solid #aacfd0;
    width: 400px;
    min-height: 200px;
    padding: 8px;
    margin: 8px;
    border-radius: 8px;
    background-color: #c9dede;
  `

  const listStyle = css`
    list-style:none;
  `

  const buttonWrapStyle = css`
    display: flex;
    gap: 8px;
    margin-bottom: 10px;
    align-items: center;
  `

  return(
    <div css={completedWrapStyle}>
      <h3>完了済みタスク</h3>
      <div>
        <ul css={listStyle}>
          {completedTasks.map((todo, index) => (
              <li key={index}>
                <div css={buttonWrapStyle}>
                  <div>{todo.name}</div>
                  <PrimaryBtn onClick={() => restoreTodo(index)}>(戻す)</PrimaryBtn>
                </div>
              </li>)
          )}
        </ul>
      </div>
    </div>
  )
}