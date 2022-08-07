import React from "react"
import { Navbar } from "react-bootstrap"
import siteBrandDark from "~image/logo/logo-black1.png"
import siteBrandLight from "~image/logo/logo-white.png"
import "./sitenav.css"
import Menu from "./Menu"
const SiteNavbar = ({ buttonBlock, darkLogo, customLogo, defaultLogo }) => {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="md"
        bg="dark"
        variant="dark"
        className="site-navbar"
      >
        <Navbar.Brand href="/">
          {defaultLogo ? (
            <img src={defaultLogo} alt="site-brand" />
          ) : customLogo ? (
            <img src={customLogo} alt="site-brand" />
          ) : (
            <img
              src={darkLogo ? siteBrandDark : siteBrandLight}
              alt="site-brand"
              className="img_logo"
            />
          )}
        </Navbar.Brand>

        <Menu />
        {buttonBlock}
      </Navbar>
    </>
  )
}

export default SiteNavbar
