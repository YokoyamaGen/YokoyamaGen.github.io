/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

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

  const buttonStyle = css`
    border-radius: 8px;
    border: none;
    padding: 7px 16px;
    &:hover {
      cursor: pointer;
      opacity: 0.7;
    }
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
                  <button css={buttonStyle} onClick={() => restoreTodo(index)}>(戻す)</button>
                </div>
              </li>)
          )}
        </ul>
      </div>
    </div>
  )
}