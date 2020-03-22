import React, { Component, Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import * as router from "react-router-dom";
import { Container, Col } from "reactstrap";

const DefaultHeader = React.lazy(() => import("./DefaultHeader"));
class Defaultlayout extends Component {
  state = {};
  render() {
    return (
      <div>
        <DefaultHeader />
        
      </div>
    );
  }
}

export default Defaultlayout;
