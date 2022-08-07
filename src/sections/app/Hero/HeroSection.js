import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import { StaticImage as Img } from "gatsby-plugin-image"
import { Link } from "~components"
import Hero from "./style"
import Cta from "./style"
export default function HeroSection() {
  return (
    <Hero backgroundColor="rgba(21, 205, 168, 0.2)">
      <Container className="mt-5">
        <Row className="align-items-center justify-content-center">
          {/* Welcome content Area */}
          <Col className="col-xxl-6 col-lg-7 col-md-9 col-xs-11 order-2 order-lg-1">
            <Row className="">
              <Col className="col-xl-7 col-lg-10 col-md-11 text-center">
                <Cta.Box>
                  <Cta.Title mb="35px">2nd Deal</Cta.Title>
                  <Cta.Box mt="35px"></Cta.Box>
                </Cta.Box>
                <Cta.Box mt="35px">
                  <Cta.Button
                    as={Link}
                    to="/"
                    className="btn btn-bittersweet text-white box-shadow-1"
                  >
                    <i className="fab fa-apple" />
                    &nbsp;&nbsp;Apple Store
                  </Cta.Button>
                  <Cta.Button
                    as={Link}
                    to="/"
                    className="btn btn-niagara text-white box-shadow-2"
                  >
                    <i className="fab fa-google-play" />
                    &nbsp; Google Play
                  </Cta.Button>
                </Cta.Box>
              </Col>
            </Row>
          </Col>
          {/*/ .Welcome Content Area */}
          {/*/ .Welcome img Area */}
          <Col
            xs="12"
            className="col-xxl-6 col-lg-5 col-md-8 col-xs-10 order-1 order-lg-2"
          >
            <Hero.ImageGroup>
              <Hero.ImageOne>
                <Img
                  className="w-100"
                  src="../../../assets/image/home-app/mobile-page.png"
                  alt="app"
                  layout="fullWidth"
                  placeholder="blurred"
                />
              </Hero.ImageOne>
              <Hero.ImageTwo>
                <Img
                  className="w-100"
                  src="../../../assets/image/home-app/hero-l8-2.png"
                  alt="app-img"
                  layout="fullWidth"
                  placeholder="blurred"
                />
              </Hero.ImageTwo>
            </Hero.ImageGroup>
          </Col>
          {/*/ .Welcome img Area */}
        </Row>
      </Container>
    </Hero>
  )
}
