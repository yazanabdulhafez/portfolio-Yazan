import React, { Component } from 'react';

import promo1 from "assets/img/theme/promo-1.png";
import cardImg from "assets/img/theme/img-1-1200x1000.jpg";
import ill2 from "assets/img/ill/ill-2.svg";
import team1 from "assets/img/theme/team-1-800x800.jpg";
import team2 from "assets/img/theme/team-2-800x800.jpg";
import team3 from "assets/img/theme/team-3-800x800.jpg";
import team4 from "assets/img/theme/team-4-800x800.jpg";
import busmall1 from "assets/img/profileImages/busmall1.PNG";
import busmall2 from "assets/img/profileImages/busmall2.PNG";
import busmall3 from "assets/img/profileImages/bussmall3.PNG";
import cookieStand from "assets/img/profileImages/cookie-stand.PNG";
import petserviescenter from "assets/img/profileImages/petserviescenter.PNG";
import psc2 from "assets/img/profileImages/psc2.PNG";
import psc3 from "assets/img/profileImages/psc3.PNG";
import psc4 from "assets/img/profileImages/psc4.PNG";
import psc5 from "assets/img/profileImages/psc5.PNG";
import sales1 from "assets/img/profileImages/sales1.PNG";
import sales2 from "assets/img/profileImages/sales2.PNG";
import yazan from "assets/img/profileImages/yazan3.jpg";
import aboutme from "assets/img/profileImages/aboutme.PNG"
import hornedbeasts from "assets/img/profileImages/hornedbeasts.PNG"

// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardImg,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
  Modal
} from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import CardsFooter from "components/Footers/CardsFooter.js";

// index page sections
import Download from "../IndexSections/Download.js";
import SimpleFooter from 'components/Footers/SimpleFooter.js';

export class ContactMe extends Component {
  state = {
    defaultModal: false
  };
  toggleModal = state => {
    this.setState({
      [state]: !this.state[state]
    });
  };
  render() {
    return (
      <>
        <DemoNavbar />
        <main ref="main">
          <div className="position-relative">
            {/* shape Hero */}
            <section className="section section-lg section-shaped pb-250">
              <div className="shape shape-style-1 shape-default">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
              <Container className="py-lg-md d-flex">
                <div className="col px-0">
                  <Row>
                    <Col lg="6">
                      <h1 className="display-3 text-white">
                        {" "}
                        <span></span>
                      </h1>
                      <p className="lead text-white">

                      </p>
                      <div className="btn-wrapper">
                        <Button
                          className="btn-icon mb-3 mb-sm-0"
                          color="info"
                          href="https://www.linkedin.com/in/yazan-alkharabsheh"
                        >
                          <span className="btn-inner--icon mr-1">
                            <i className="fa fa-code" />
                          </span>
                        </Button>
                        <Button
                          className="btn-white btn-icon mb-3 mb-sm-0 ml-1"
                          color="default"
                          href="https://github.com/yazanabdulhafez?tab=repositories"
                        >
                          <span className="btn-inner--icon mr-1">
                            <i className="ni ni-cloud-download-95" />
                          </span>
                          <span className="btn-inner--text">
                            GitHub Projects
                          </span>
                        </Button>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Container>
              {/* SVG separator */}
              <div className="separator separator-bottom separator-skew">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  version="1.1"
                  viewBox="0 0 2560 100"
                  x="0"
                  y="0"
                >
                  <polygon
                    className="fill-white"
                    points="2560 0 2560 100 0 100"
                  />
                </svg>
              </div>
            </section>
            {/* 1st Hero Variation */}
          </div>
          <section className="section section-lg pt-lg-0 mt--200">
            <Container>
              <Row className="justify-content-center">
                <Col lg="12">
                  <Row className="row-grid">
                    <Col md="4">
                      <Button
                        block
                        className="mb-3"
                        color="primary"
                        type="button"
                        onClick={() => this.toggleModal("defaultModal")}
                      >
                        Contact Me
                      </Button>
                      <Modal
                        className="modal-dialog-centered"
                        isOpen={this.state.defaultModal}
                        toggle={() => this.toggleModal("defaultModal")}
                      >
                        <div className="modal-header">
                          <h6 className="modal-title" id="modal-title-default">
                            My Contact info
                          </h6>
                          <button
                            aria-label="Close"
                            className="close"
                            data-dismiss="modal"
                            type="button"
                            onClick={() => this.toggleModal("defaultModal")}
                          >
                            <span aria-hidden={true}>×</span>
                          </button>
                        </div>
                        <div className="modal-body">
                          <p>
                           You can send me an email on the following email:
                           <a href='#'style={{color:"red"}}>fso361435@gmail.com </a>
                           as well my phone number is:
                           +962785834251
                          </p>
                         
                        </div>
                        <div className="modal-footer">
                        
                          <Button
                            className="ml-auto"
                            color="link"
                            data-dismiss="modal"
                            type="button"
                            onClick={() => this.toggleModal("defaultModal")}
                          >
                            Close
                          </Button>
                        </div>
                      </Modal>

                      {/* <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                            <i className="ni ni-check-bold" />
                          </div>
                          <h6 className="text-primary text-uppercase">
                            petserviescenter
                          </h6>
                          <p className="description mt-3">
                            A website that provides all the nedded things for a pets,
                            from the food and medical atention and adopting.
                          </p> */}
                      {/* <div>
                            <Badge color="primary" pill className="mr-1">
                              design
                            </Badge>
                            <Badge color="primary" pill className="mr-1">
                              system
                            </Badge>
                            <Badge color="primary" pill className="mr-1">
                              creative
                            </Badge>
                          </div> */}
                      {/* <img
                            style={{ width: "100%" }}
                            src={petserviescenter}
                            alt=""
                          />
                          <Button
                            className="mt-4"
                            color="primary"
                            href="#pablo"
                            onClick={(e) => {
                              e.preventDefault()
                              window.open(
                                "https://pet-service-center.github.io/pets-care-center/"
                              );

                            }}
                          >
                            View the website
                          </Button>
                        </CardBody>
                      </Card> */}
                    </Col>
                    <Col lg="4">
                      {/* <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-success rounded-circle mb-4">
                            <i className="ni ni-istanbul" />
                          </div>
                          <h6 className="text-success text-uppercase">
                            Salmon Cookies
                          </h6>
                          <p className="description mt-3">
                            Website where customers can Buy healthy and
                            delicious cookies, and allow the owner to track all
                            of sales data for his stands also allow him to add new stands to the sales data.
                          </p> */}
                      {/* <div>
                            <Badge color="success" pill className="mr-1">
                              business
                            </Badge>
                            <Badge color="success" pill className="mr-1">
                              vision
                            </Badge>
                            <Badge color="success" pill className="mr-1">
                              success
                            </Badge>
                          </div> */}
                      {/* <img
                            style={{ width: "100%" }}
                            src={cookieStand}
                            alt="cookieStand"
                          />
                          <Button
                            className="mt-4"
                            color="success"
                            href="#pablo"
                            onClick={(e) => {
                              e.preventDefault()
                              window.open(
                                "https://yazanabdulhafez.github.io/cookie-stand/"
                              );

                            }}
                          >
                            View the website
                          </Button>
                        </CardBody>
                      </Card> */}
                    </Col>
                    <Col lg="4">
                      {/* <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-warning rounded-circle mb-4">
                            <i className="ni ni-planet" />
                          </div>
                          <h6 className="text-warning text-uppercase">
                            Bus Mall
                          </h6>
                          <p className="description mt-3">
                            A website where the user can view the gallery of
                            products, vote on the products, and view the results
                            at the end as a text and chart.
                          </p> */}
                      {/* <div>
                            <Badge color="warning" pill className="mr-1">
                              marketing
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              product
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              launch
                            </Badge>
                          </div> */}
                      {/* <img
                            style={{ width: "100%" }}
                            src={busmall1}
                            alt=""
                          />
                          <Button
                            className="mt-4"
                            color="warning"
                            href="#pablo"
                            onClick={(e) => {
                              e.preventDefault()
                              window.open(
                                "https://yazanabdulhafez.github.io/bus-mall/"
                              );

                            }}
                          >
                            View the website
                          </Button>
                        </CardBody>
                      </Card> */}
                    </Col>
                    <Col lg="4">
                      {/* <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                        <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                            <i className="ni ni-check-bold" />
                          </div>
                          <h6 className="text-warning text-uppercase">
                            About Me
                          </h6>
                          <p className="description mt-3">
                            A website where the user can know about me more information and interists.
                          </p> */}
                      {/* <div>
                            <Badge color="warning" pill className="mr-1">
                              marketing
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              product
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              launch
                            </Badge>
                          </div> */}
                      {/* <img
                            style={{ width: "100%" }}
                            src={aboutme}
                            alt=""
                          />
                          <Button
                           className="mt-4"
                           color="primary"
                           href="#pablo"
                            onClick={(e) => {
                              e.preventDefault()
                              window.open(
                                "https://yazanabdulhafez.github.io/About_Me/"
                              );

                            }}
                          >
                            View the website
                          </Button>
                        </CardBody>
                      </Card> */}
                    </Col>
                    <Col lg="4">
                      {/* <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                        <div className="icon icon-shape icon-shape-success rounded-circle mb-4">
                            <i className="ni ni-istanbul" />
                          </div>
                          <h6 className="text-warning text-uppercase">
                            Horned Beasts
                          </h6>
                          <p className="description mt-3">
                            A website where the user can vote for the favorite beast from beasts gallery.
                          </p> */}
                      {/* <div>
                            <Badge color="warning" pill className="mr-1">
                              marketing
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              product
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              launch
                            </Badge>
                          </div> */}
                      {/* <img
                            style={{ width: "100%" }}
                            src={hornedbeasts}
                            alt=""
                          />
                          <Button
                            className="mt-4"
                            color="success"
                            href="#pablo"
                            onClick={(e) => {
                              e.preventDefault()
                              window.open(
                                "https://blissful-allen-bd06f2.netlify.app/"
                              );

                            }}
                          >
                            View the website
                          </Button>
                        </CardBody>
                      </Card> */}
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="section section-lg">
            <Container>
              <Row className="row-grid align-items-center">
                <Col className="order-md-2" md="6">
                  {/* <img
                    alt="..."
                    className="img-fluid floating"
                    src={promo1}
                  /> */}
                  {/* <img
                    alt="..."
                    className="img-fluid floating"
                    src={sales2}
                  /> */}
                </Col>
                <Col className="order-md-1" md="6">
                  {/* <div className="pr-md-5">
                    <div className="icon icon-lg icon-shape icon-shape-success shadow rounded-circle mb-5">
                      <i className="ni ni-settings-gear-65" />
                    </div>
                    <h3> CSS</h3>
                    <p>
                      CSS is a powerful tool to design a website. Here you can
                      find some of my works on CSS , check the website.
                    </p>
                    <ul className="list-unstyled mt-5">
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="success"
                            >
                              <i className="ni ni-settings-gear-65" />
                            </Badge>
                          </div>
                          <div>
                            <a
                              href="https://yazanabdulhafez.github.io/chocolate-pizza-301/"
                              className="mb-0"
                            >
                              Chocolate Pizza
                            </a>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="success"
                            >
                              <i className="ni ni-html5" />
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0">projects at 301 level</h6>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="success"
                            >
                              <i className="ni ni-satisfied" />
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0">
                            projects at 401 level
                            </h6>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div> */}
                </Col>
              </Row>
            </Container>
          </section>
          {/* <section className="section bg-secondary">
            <Container>
              <Row className="row-grid align-items-center">
                <Col md="6">
                  <Card className="bg-default shadow border-0">
                    <CardImg
                      alt="..."
                      src={cardImg}
                      top
                    />
                    <blockquote className="card-blockquote">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="svg-bg"
                        preserveAspectRatio="none"
                        viewBox="0 0 583 95"
                      >
                        <polygon
                          className="fill-default"
                          points="0,52 583,95 0,95"
                        />
                        <polygon
                          className="fill-default"
                          opacity=".2"
                          points="0,42 583,95 683,0 0,95"
                        />
                      </svg>
                      <h4 className="display-3 font-weight-bold text-white">
                        Design System
                      </h4>
                      <p className="lead text-italic text-white">
                        The Arctic Ocean freezes every winter and much of the
                        sea-ice then thaws every summer, and that process will
                        continue whatever happens.
                      </p>
                    </blockquote>
                  </Card>
                </Col>
                <Col md="6">
                  <div className="pl-md-5">
                    <div className="icon icon-lg icon-shape icon-shape-warning shadow rounded-circle mb-5">
                      <i className="ni ni-settings" />
                    </div>
                    <h3>Our customers</h3>
                    <p className="lead">
                      Don't let your uses guess by attaching tooltips and
                      popoves to any element. Just make sure you enable them
                      first via JavaScript.
                    </p>
                    <p>
                      The kit comes with three pre-built pages to help you get
                      started faster. You can change the text and images and
                      you're good to go.
                    </p>
                    <p>
                      The kit comes with three pre-built pages to help you get
                      started faster. You can change the text and images and
                      you're good to go.
                    </p>
                    <a
                      className="font-weight-bold text-warning mt-5"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      A beautiful UI Kit for impactful websites
                    </a>
                  </div>
                </Col>
              </Row>
            </Container>
          </section> */}
          {/* <Download /> */}
        </main>
        <SimpleFooter />
      </>
    )
  }
}

export default ContactMe