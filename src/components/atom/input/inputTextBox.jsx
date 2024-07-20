/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const InputTextBox = (props) => {
  const { onChange, text, placeholder } = props;

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
        placeholder={placeholder}
        css={inputStyle}
      />
    </div>
  )
}