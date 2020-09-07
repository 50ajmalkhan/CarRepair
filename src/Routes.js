import React from "react";
import User from "./components/User";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./App";
import Services from "./pages/services/Services";
import Gallary from "./pages/gallary/Gallary";
import Appoinment from "./pages/appoinment/Appoimmnet";
import Shop from "./pages/shop/Shop";
import Contact from "./pages/contact/Contact";
import About from "./pages/about/About";
import OurTeam from "./pages/ourTeam/OurTeam";
import Faqs from "./components/faqs/Faqs";

import NavBar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Test from "./components/Test";

const Routes = () => {
  return (
    <BrowserRouter>
      {/*<NavBar />*/}
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/gallary" component={Gallary} />
        <Route exact path="/appoinment" component={Appoinment} />
        <Route exact path="/shop" component={Shop} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/about" component={About} />
        <Route exact path="/ourteam" component={OurTeam} />
        <Route exact path="/faqs" component={Faqs} />
        <Route exact path="/test" component={Test} />
      </Switch>
      {/*<Footer />*/}
    </BrowserRouter>
  );
};

export default Routes;
// defiend all routers here applicatoin start from this file
