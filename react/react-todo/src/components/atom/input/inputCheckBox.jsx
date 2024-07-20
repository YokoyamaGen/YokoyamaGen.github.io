/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const InputCheckBox = (props) => {
  const { checked, onChange } = props;

const checkboxStyle = css`
  &:hover {
    cursor: pointer;
  }
`
  return (
    <div>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        css={checkboxStyle}
      />
    </div>
  )
}