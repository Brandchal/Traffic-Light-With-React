//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.min.css";

//include your index.scss file into the bundle
//import "../styles/index.css";

//import your own components
import "../styles/index.css";
import App from "../js/App.js";
import TrafficLight from "../js/component/TrafficLight";

//render your react application
ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById("root")
);
ReactDOM.render(<TrafficLight />, document.querySelector("#app"));
