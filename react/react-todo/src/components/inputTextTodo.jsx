/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const InputTextTodo = (props) => {
  const {text, onChange, onClick} = props;

const btnStyle = css`
  border-radius: 8px;
  border: none;
  padding: 7px 16px;
  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }
`

const inputStyle = css`
  border-radius: 8px;
  padding: 6px 16px;
`


  return (
    <div>
      <input
        type="text"
        onChange={onChange}
        value={text}
        placeholder="TODOを入力"
        css={inputStyle}
      />
      <button css={btnStyle} onClick={onClick}>保存</button>
    </div>
  )
}