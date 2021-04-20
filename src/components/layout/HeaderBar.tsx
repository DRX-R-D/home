import React from 'react'
import { css } from '@emotion/react'

const HeaderBarCss = css`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  background-color: #fff;
  color: #fff;
`

const HeaderBar: React.FC = () => {
  return (
    <header css={HeaderBarCss}>
      Hello World
    </header>
  )
}

export default HeaderBar
