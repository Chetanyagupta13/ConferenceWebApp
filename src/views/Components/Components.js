import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import { Link, Switch, Route } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Parallax from "components/Parallax/Parallax.js";
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.js";
import { routes } from "routes";

import styles from "assets/jss/material-kit-react/views/components.js";
import { faHome,faAtlas,faGlobe, faPhone} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const useStyles = makeStyles(styles);

export default function Components(props) {
	const classes = useStyles();
	const { ...rest } = props;
	return (
		<div>
			<Header
				brand="International Conference"
				rightLinks={<HeaderLinks />}
				fixed
				color="transparent"
				changeColorOnScroll={{
					height: 400,
					color: "white",
				}}
				{...rest}
			/>
			<Parallax image={require("assets/img/nit_image.jpg").default}>
				<div className={classes.container}>
					<GridContainer>
						<GridItem>
							<div className={classes.brand}>
								<h1 className={classes.title}>International Conference.</h1>
								<h3 className={classes.subtitle}>
									A Badass Material-UI Kit based on Material Design.
								</h3>
							</div>
						</GridItem>
					</GridContainer>
				</div>
			</Parallax>

			<div className={classNames(classes.main, classes.mainRaised)}>
				<div className="row">
					<div className="col-sm-4">
						<div className="list-group d-flex justify-content-center"
							style={{
								display: "flex",
								justifyContent: "center",
								alignItems: "center"
							}} >
							<p class="list-group-item list-group-item-action active"
								style={{ textAlign: "center", margin: "10px", width: "70%", fontWeight: "bold", fontSize: "20px" }}>
								Conference Menu
							</p>
							<button type="button" className="list-group-item list-group-item-action border"
								style={{ textAlign: "center", margin: "10px", width: "70%", fontWeight: "bold", fontSize: "20px" }}>
								Submit Contribution</button>
							<button type="button" className="list-group-item list-group-item-action border"
								style={{ textAlign: "center", margin: "10px", width: "70%", fontWeight: "bold", fontSize: "20px" }}>
								Listener Register Path</button>
							<button type="button" className="list-group-item list-group-item-action border"
								style={{ textAlign: "center", margin: "10px", width: "70%", fontWeight: "bold", fontSize: "20px" }}>
								Abstract Register Path</button>
							<button type="button" className="list-group-item list-group-item-action border"
								style={{ textAlign: "center", margin: "10px", width: "70%", fontWeight: "bold", fontSize: "20px" }}>
								Full Paper Register Path</button>
							<button type="button" className="list-group-item list-group-item-action border"
								style={{ textAlign: "center", margin: "10px", width: "70%", fontWeight: "bold", fontSize: "20px" }}>
								AAIEP 2020 | online Conf.</button>
							<button type="button" className="list-group-item list-group-item-action border"
								style={{ textAlign: "center", margin: "10px", width: "70%", fontWeight: "bold", fontSize: "20px" }}>
								AAIEP 2019 | India</button>
							<button type="button" className="list-group-item list-group-item-action border"
								style={{ textAlign: "center", margin: "10px", width: "70%", fontWeight: "bold", fontSize: "20px" }}>
								Join Us</button>

							<p class="list-group-item list-group-item-action active"
								style={{ textAlign: "center", margin: "10px", width: "70%", fontWeight: "bold", fontSize: "20px", marginTop: "30px" }}>
								Contact Us
							</p>
							<div
								style={{ textAlign: "center", margin: "10px", width: "70%", fontSize: "16px" }}>
								<div className="row"><div className="col-sm-2"><span><FontAwesomeIcon icon={faHome} /></span></div>
									<div className="col-sm-10">
										<p style={{ borderBottom: "1px dotted " }}>Secretary: Mr. Ranjeet </p></div></div>
							</div>
							<div
								style={{ textAlign: "center", margin: "10px", width: "70%", fontSize: "16px" }}>
								<div className="row"><div className="col-sm-2"><span><FontAwesomeIcon icon={faAtlas} /></span></div>
									<div className="col-sm-10">
										<p style={{ borderBottom: "1px dotted " }}>abc@gmail.com </p></div></div>
							</div>
							<div
								style={{ textAlign: "center", margin: "10px", width: "70%", fontSize: "16px" }}>
								<div className="row"><div className="col-sm-2"><span><FontAwesomeIcon icon={faPhone} /></span></div>
									<div className="col-sm-10">
										<p style={{ borderBottom: "1px dotted " }}>+91 99999999 </p></div></div>
							</div>
							<div
								style={{ textAlign: "center", margin: "10px", width: "70%", fontSize: "16px" }}>
								<div className="row"><div className="col-sm-2"><span><FontAwesomeIcon icon={faPhone} /></span></div>
									<div className="col-sm-10">
										<p style={{ borderBottom: "1px dotted " }}>+91 99999999 </p></div></div>
							</div>
							<div
								style={{ textAlign: "center", margin: "10px", width: "70%", fontSize: "16px" }}>
								<div className="row"><div className="col-sm-2"><span><FontAwesomeIcon icon={faGlobe} /></span></div>
									<div className="col-sm-10">
										<p style={{ borderBottom: "1px dotted " }}>
											<a href="https://nitsri.ac.in/" >https://nitsri.ac.in/ </a>
											</p></div></div>
							</div>
							<button class="list-group-item list-group-item-action"
								style={{ textAlign: "center", margin: "10px", width: "70%", fontWeight: "bold", fontSize: "20px", marginTop:"20px" }}>
								Latest News
							</button>
						</div>
					</div>
					<div className="col-sm-8">
						<Switch>
							{routes.map((prop, key) => {
								return (
									<Route
										path={prop.path}
										component={prop.component}
										key={key}
									/>
								);
							})}
						</Switch>
					</div>
				</div>

			</div>
			<Footer />
		</div>
	);
}
