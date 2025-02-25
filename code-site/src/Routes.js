import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./Components/Landing/Home";
import AboutUs from "./Components/About Us/AboutUs";
import Newsletter from "./Components/Newsletter/NewsletterPage";
import ContactUs from "./Components/ContactUs/ContactUs";
import Partners from "./Components/Partners/PartnersPage2";
import Residents from "./Components/Residents/ResidentsPage";
import Carousel2 from "./Components/Startups/Carousel";
// import Resources from "./Components/Resources/Resources";
// import "../styles/Style.css"
import NoMatch from "./Components/Other/NoMatch";
// import Donate from "./Components/Other/Donate";
import ComingSoon from "./Components/Other/ComingSoon";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
     <Route exact path="/about-us" component={AboutUs} />
    <Route exact path="/contact-us" component={ContactUs} />
    <Route exact path="/newsletter" component={Newsletter} />
    <Route exact path="/residents" component={Residents} />
    <Route exact path="/resources" component={ComingSoon} />
    <Route exact path="/partners" component={Partners} />
    {/* <Route exact path="/abc" component={Partners} /> */}
    <Route exact path="/Carousel2" component={Carousel2} />
    {/* <Route exact path="/Donate" component={Donate} /> */}


    {/* <Route exact path="/Test" component={Test} /> */}
    {/* <Route exact path="/apply" component={Apply} /> */}
    <Route
      exact
      path="/apply"
      render={() => (window.location = "https://apply.babsoncode.dev")}
    />
    <Route path="/404" component={NoMatch} />
    <Redirect to="/404" />
  </Switch>
);

export default Routes;
