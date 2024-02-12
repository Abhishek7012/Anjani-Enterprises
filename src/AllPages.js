import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AboutUs from "./Aboutus/AboutUs";
import MainComponent from "./MainComponent/MainComponent";
import Home from "./Home/Home";
import MissionComponent from "./MissionComponent/MissionComponent";
import PaymentServices from "./ServicesComponent/PaymentService";
// import OurTeamComponent from "./Our Team/OurTeamComponent";
// import JoinUsComponent from "./JoinUsComponent/JoinUsComponent";
import FooterComponent from "./FooterComponent/FooterComponent";

const AllPages = () => {
  return (
    <div>
      <Router>
        <MainComponent/>
        <Switch>
          <Route exact  path='/' ><Home/></Route> 
          <Route exact path='/about' ><AboutUs/></Route> 
          <Route exact path='/vision' ><MissionComponent/></Route> 
          <Route exact path='/services' ><PaymentServices/></Route> 
          {/* <Route exact path='/ourteam' ><OurTeamComponent/></Route>  */}
          {/* <Route exact path='/joinus' ><JoinUsComponent/></Route>  */}

        </Switch>
        <FooterComponent/>
      </Router>
    </div>
  );
};

export default AllPages;
