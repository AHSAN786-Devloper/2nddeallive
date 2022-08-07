import React from "react"
import { Helmet } from "react-helmet"
import favicon from "~image/Favicon.png"
import Header from "../Header"
export default function Layout({ children }) {
  return (
    <>
      <Helmet>
        <title>2ndDeal Landing Page </title>
        <link rel="icon" type="image/png" href={favicon} />
      </Helmet>
      <Header />
      {children}
    </>
  )
}
