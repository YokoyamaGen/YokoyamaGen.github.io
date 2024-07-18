/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const UncompletedTodos = (props) => {
  const {uncompletedTasks, editText, editTask = '', editSaveBtn, changeCompleted, editTodo,  deleteUncompleteTodo} = props;

const buttonWrapStyle = css`
  display: flex;
  gap: 8px;
  margin-bottom: 10px;
  align-items: center;
`

const listStyle = css`
  list-style:none;
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

const checkboxStyle = css`
  &:hover {
    cursor: pointer;
  }
`

const inputStyle = css`
  border-radius: 8px;
  padding: 6px 16px;
`

  const uncompletedWrapStyle = css`
    border: 2px solid #aacfd0;
    width: 400px;
    min-height: 200px;
    padding: 8px;
    margin: 8px;
    border-radius: 8px;
  `

  return(
    <div css={uncompletedWrapStyle}>
      <h3>未完了タスク</h3>
      <div>
        <ul css={listStyle}>
          {uncompletedTasks.map((todo, index) => (
              <li key={index}>
                {todo.isEdit
                  ? <div>
                      <input
                        type="text"
                        onChange={editText}
                        value={editTask}
                        placeholder="TODOを入力"
                        css={inputStyle}
                      />
                      <button css={buttonStyle} onClick={() => editSaveBtn(index)}>保存</button>
                  </div>
                  : <div css={buttonWrapStyle}>
                      <input
                        type="checkbox"
                        checked={todo.isCompleted}
                        onChange={() => changeCompleted(index)}
                        css={checkboxStyle}
                      />
                      <div>{todo.name}</div>
                      <button css={buttonStyle} onClick={() => editTodo(index)}>(編集)</button>
                      <button css={buttonStyle} onClick={() => deleteUncompleteTodo(index)}>(削除)</button>
                    </div>
                }
              </li>)
          )}
        </ul>
      </div>
    </div>
  )
}