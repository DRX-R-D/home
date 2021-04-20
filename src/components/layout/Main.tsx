import React from 'react'
import { css } from '@emotion/react'

const MainCss = css`
  padding-top: 100px;
`

const Main: React.FC = (props) => {
  return (
    <div css={MainCss}>
      {props.children}
    </div>
  )
}

export default Main
