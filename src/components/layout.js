import React, { useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import PropTypes from 'prop-types'

// import header and footer menu
import Header from "./header"
import Footer from "./footer"


// import dark and light
import lightTheme from '../themes/light'
import darkTheme from '../themes/dark'

import './styles/nomalize.css'


const Container = styled.div`
  min-height: 100vh;
  background-color: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.textColor};
  transition: all 0.5s ease-out;
  padding:40px;
`

const Layout = ({ children }) => {
  let localIsDark

  if (typeof window !== 'undefined') {
    if (localStorage.getItem('isDark') === 'false') {
      localIsDark = false
    } else {
      localIsDark = true
    }
    console.log(localIsDark ? 'dark mode' : 'light mode')
  }

  const [isDark, setIsDark] = useState(localIsDark)

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <Container>
        <Header isDark={isDark} setIsDark={setIsDark} />
        <main>{children}</main>
        <Footer isDark={isDark} setIsDark={setIsDark} />
      </Container>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

