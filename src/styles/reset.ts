import { css } from '@emotion/react'

export default css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html, body {
    height: 100%;
    width: 100%;
    font-size: 14px;
    font-weight: 400;
    font-family: "Noto Sans KR",sans-serif
  }
  ul, ol {
    list-style: none;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  button {
    background-color: transparent;
    border: 0;
    outline: 0;
  }
  input {
    outline: 0;
    border: 0;
    &:focus {
      outline: 0;
    }
  }
  table {
    border-collapse: collapse;
  }
`
