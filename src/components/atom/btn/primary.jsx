/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const PrimaryBtn = (props) => {
  const { onClick, children } = props;

const btnStyle = css`
  border-radius: 8px;
  border: none;
  padding: 7px 16px;
  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }
`
  return (
    <>
      <button css={btnStyle} onClick={onClick}>{ children }</button>
    </>
  )
}