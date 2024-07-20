/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { InputTextBtn } from "../../molecule/inputTextBtn"
import { InputCheckBox } from "../../atom/input/inputCheckBox"
import { PrimaryBtn } from "../../atom/btn/primary"

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
                    <InputTextBtn
                      onChange={editText}
                      text={editTask}
                      onClick={() => editSaveBtn(index)}
                    />
                  </div>
                  : <div css={buttonWrapStyle}>
                      <InputCheckBox
                        checked={todo.isCompleted}
                        onChange={() => changeCompleted(index)}
                      />
                      <div>{todo.name}</div>
                      <PrimaryBtn onClick={() => editTodo(index)}>(編集)</PrimaryBtn>
                      <PrimaryBtn onClick={() => deleteUncompleteTodo(index)}>(削除)</PrimaryBtn>
                    </div>
                }
              </li>)
          )}
        </ul>
      </div>
    </div>
  )
}