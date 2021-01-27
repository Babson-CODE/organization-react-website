import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { Navbar, Nav, Container } from "react-bootstrap";
import MailchimpSignup from "./../Landing/MailchimpSignup";
import "./../../App.css";

const FooterPage = () => {
  return (
    <MDBFooter className="font-small pt-4 mt-4 background-color">
      <Container>
        <MDBContainer fluid className="text-center text-md-left">
          <MDBRow>
            <MDBCol md="6">
              {/* <h5 className="title">Footer Content</h5>
              <p>
                Here you can use rows and columns here to organize your footer
                content.
              </p> */}
              <MailchimpSignup />
            </MDBCol>
            <MDBCol md="6">
              {/* <h5 className="title">Babson CODE</h5>
              <ul>
                <li className="list-unstyled">
                  <a href="#!">Link 1</a>
                </li>
                <li className="list-unstyled">
                  <a href="#!">Link 2</a>
                </li>
                <li className="list-unstyled">
                  <a href="#!">Link 3</a>
                </li>
                <li className="list-unstyled">
                  <a href="#!">Link 4</a>
                </li>
              </ul> */}
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </Container>
      <div
        className="footer-copyright text-center py-3"
        style={{ backgroundColor: "rgb(0, 148, 44)" }}
      >
        <Container>
          <MDBContainer fluid>
            &copy; {new Date().getFullYear()} Copyright:{" "}
            <a href="https://www.BabsonCODE.com"> BabsonCODE.com </a>
          </MDBContainer>
        </Container>
      </div>
    </MDBFooter>
  );
};

export default FooterPage;
