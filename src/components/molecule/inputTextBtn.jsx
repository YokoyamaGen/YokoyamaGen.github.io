/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { InputTextBox } from "../atom/input/inputTextBox"
import { PrimaryBtn } from "../atom/btn/primary"

export const InputTextBtn = (props) => {
  const { onChange, text, onClick } = props;

  const inputBoxStyle = css`
    display: flex;
  `

  return (
    <div css={inputBoxStyle}>
      <InputTextBox
        onChange={onChange}
        text={text}
        placeholder="TODOを入力"
      ></InputTextBox>

      <PrimaryBtn onClick={onClick}>保存</PrimaryBtn>
    </div>
  )
}