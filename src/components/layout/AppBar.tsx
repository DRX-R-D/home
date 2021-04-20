import React from 'react'
import { css } from '@emotion/react'
import { Link } from 'react-router-dom'

const AppBarCss = css`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  background-color: #000;
  color: #fff;
  height: 100px;
  display: flex;
  align-items: center;
`
const NavCss = css`
  margin-left: auto;
  ul {
    display: flex;
  }
`

const AppBar: React.FC = () => {
  return (
    <header css={AppBarCss}>
      <Link to="/">
        <img src="./logo.svg" alt="DRX"/>
      </Link>
      <nav css={NavCss}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default AppBar
