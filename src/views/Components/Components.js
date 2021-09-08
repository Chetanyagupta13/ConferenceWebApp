import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import { Link, Switch, Route, Redirect } from "react-router-dom";
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
import { faHome, faAtlas, faGlobe, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "./Components.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import NitSrinagarImage from "../../assets/img/nit_image.jpg";
import AIImage from "../../assets/img/ai_image.jpg";
import AIImage2 from "../../assets/img/ai_image2.jpg";

const useStyles = makeStyles(styles);

export default function Components(props) {
	const classes = useStyles();
	const { ...rest } = props;
	return (
		<div>
			<Header
				brand="AAIEP"
				rightLinks={<HeaderLinks />}
				fixed
				changeColorOnScroll={{
					height: 400,
					color: "",
				}}
				{...rest}
				style={{ backgroundColor: "red" }}
			/>
			<Carousel
				width="100%"
				infiniteLoop={true}
				showThumbs={false}
				interval={4000}
				showArrows={false}
				emulateTouch={true}
				autoPlay={true}
				stopOnHover={false}
			>
				<div>
					<img src={NitSrinagarImage} />
					<div style={{
						position: "fixed",
						top: "200px",
						width: "90%",

					}}>
						<h2 style={{ color: "white" }} className={classes.title}>
							Appliction of Artificial Intelligence in Engineering Problem.
						</h2>
					</div>
					<div style={{
						position: "fixed",
						top: "500px",
						width: "40%",

					}}>
						<h5 style={{ color: "white", fontSize: "40px", margin: "0px", position: "relative", left: "20px" }} >
							<i>AAIEP 2021</i>
						</h5>
						<p style={{ color: "white", fontSize: "26px", margin: "0px" }} >
							<i>The 5th International conference on Advances of AI</i>
						</p>
						<p style={{ color: "white", fontSize: "26px", margin: "0px" }} >
							<i><strike>NIT Srinagar, Jammu & kashmir</strike></i>
						</p>
						<p style={{ color: "white", fontSize: "26px", margin: "0px" }} >
							<i>Virtual Conference</i>
						</p>
					</div>
				</div>
				<div>
					<img src={AIImage2} />
					<div style={{
						position: "fixed",
						top: "200px",
						width: "90%",

					}}>
						<h2 style={{ color: "white" }} className={classes.title}>
							Appliction of Artificial Intelligence in Engineering Problem.
						</h2>
					</div>
					<div style={{
						position: "fixed",
						top: "500px",
						width: "40%",

					}}>
						<h5 style={{ color: "white", fontSize: "40px", margin: "0px", position: "relative", left: "20px" }} >
							<i>AAIEP 2021</i>
						</h5>
						<p style={{ color: "white", fontSize: "26px", margin: "0px" }} >
							<i>The 5th International conference on Advances of AI</i>
						</p>
						<p style={{ color: "white", fontSize: "26px", margin: "0px" }} >
							<i><strike>NIT Srinagar, Jammu & kashmir</strike></i>
						</p>
						<p style={{ color: "white", fontSize: "26px", margin: "0px" }} >
							<i>Virtual Conference</i>
						</p>
					</div>
				</div>
				<div>
					<img src={AIImage} />
					<div style={{
						position: "fixed",
						top: "200px",
						width: "90%",

					}}>
						<h2 style={{ color: "white" }} className={classes.title}>
							Appliction of Artificial Intelligence in Engineering Problem.
						</h2>
					</div>
					<div style={{
						position: "fixed",
						top: "500px",
						width: "40%",

					}}>
						<h5 style={{ color: "white", fontSize: "40px", margin: "0px", position: "relative", left: "20px" }} >
							<i>AAIEP 2021</i>
						</h5>
						<p style={{ color: "white", fontSize: "26px", margin: "0px" }} >
							<i>The 5th International conference on Advances of AI</i>
						</p>
						<p style={{ color: "white", fontSize: "26px", margin: "0px" }} >
							<i><strike>NIT Srinagar, Jammu & kashmir</strike></i>
						</p>
						<p style={{ color: "white", fontSize: "26px", margin: "0px" }} >
							<i>Virtual Conference</i>
						</p>
					</div>
				</div>
			</Carousel>
			<div
				className={classNames(classes.main, classes.mainRaised)}
				style={{ wordSpacing: "0.1em", lineHeight: "2em", fontWeight:"normal" }}
			>
				<div className="row" style={{ padding: "10px" }}>
					<div className="col-sm-4">
						<div className="list-group d-flex justify-content-center"
							style={{
								display: "flex",
								justifyContent: "center",
								alignItems: "center"
							}} >
							<p className="list-group-item list-group-item-action active"
								style={{ textAlign: "center", width: "70%", fontWeight: "bold", fontSize: "22px" }}>
								Conference Menu
							</p>
							<Link to="/submitnow" style={{ textDecoration: "none", width:"70%" }}>
							<button type="button" className="list-group-item list-group-item-action border"
								style={{ textAlign: "center", width: "100%", fontWeight: "bold", fontSize: "22px" }}>
								
									Submit Contribution
							</button>
								</Link>
								<Link to="/Listener" style={{ textDecoration: "none", width:"70%" }}>
							<button type="button" className="list-group-item list-group-item-action border"
								style={{ textAlign: "center", width: "100%", fontWeight: "bold", fontSize: "22px" }}>
								
									Listener Register Path
								
							</button>
							</Link>
							<Link to={"/Listener"} style={{ textDecoration: "none", width:"70%" }}>
							<button type="button" className="list-group-item list-group-item-action border"
								style={{ textAlign: "center", width: "100%", fontWeight: "bold", fontSize: "22px" }}>
								
									Abstract Register Path
								
							</button>
							</Link>
							<Link to={"/Listener"} style={{ textDecoration: "none", width:"70%" }}>
							<button type="button" className="list-group-item list-group-item-action border"
								style={{ textAlign: "center",  width: "100%", fontWeight: "bold", fontSize: "22px" }}>
								
									Full Paper Register Path
								
							</button>
							</Link>
							<Link to={"/Listener"} style={{ textDecoration: "none", width:"70%" }}>
							<button type="button" className="list-group-item list-group-item-action border"
								style={{ textAlign: "center",  width: "100%", fontWeight: "bold", fontSize: "22px" }}>
								
									AAIEP 2020 | online Conf.
								
							</button>
							</Link>
							<Link to={"/Listener"} style={{ textDecoration: "none", width:"70%" }}>
							<button type="button" className="list-group-item list-group-item-action border"
								style={{ textAlign: "center",  width: "100%", fontWeight: "bold", fontSize: "22px" }}>
								
									AAIEP 2019 | India
								
							</button>
							</Link>
							<Link to={"/Listener"} style={{ textDecoration: "none", width:"70%" }}>
							<button type="button" className="list-group-item list-group-item-action border"
								style={{ textAlign: "center",  width: "100%", fontWeight: "bold", fontSize: "22px" }}>
								
									Join Us
								
							</button>
							</Link>
							<p className="list-group-item list-group-item-action active"
								style={{ textAlign: "center",  width: "70%", fontWeight: "bold", fontSize: "22px", marginTop: "30px" }}>

								
									Contact Us
								
							</p>
							<div
								style={{ textAlign: "center", margin: "10px", width: "70%" }}>
								<div className="row">
									<div className="col-sm-2"><span><FontAwesomeIcon icon={faHome} /></span></div>
									<div className="col-sm-10">
										<p style={{ borderBottom: "1px dotted ", fontSize: "18px" }}>
											Secretary: Mr. Ranjeet
										</p>
									</div>
								</div>
							</div>
							<div
								style={{ textAlign: "center", margin: "10px", width: "70%" }}>
								<div className="row">
									<div className="col-sm-2"><span><FontAwesomeIcon icon={faAtlas} /></span></div>
									<div className="col-sm-10">
										<p style={{ borderBottom: "1px dotted ", fontSize: "18px" }}>
											Email: <a href="mailto: abc@example.com" style={{ textDecoration: "none" }}>
												abc@example.com
											</a>
										</p>
									</div>
								</div>
							</div>
							<div
								style={{ textAlign: "center", margin: "10px", width: "70%", fontSize: "16px" }}>
								<div className="row"><div className="col-sm-2"><span><FontAwesomeIcon icon={faPhone} /></span></div>
									<div className="col-sm-10">
										<p style={{ borderBottom: "1px dotted", fontSize: "18px " }}>
											Phone: +91 99999999
										</p>
									</div>
								</div>
							</div>
							<div
								style={{ textAlign: "center", margin: "10px", width: "70%", fontSize: "16px" }}>
								<div className="row"><div className="col-sm-2"><span><FontAwesomeIcon icon={faPhone} /></span></div>
									<div className="col-sm-10">
										<p style={{ borderBottom: "1px dotted ", fontSize: "18px" }}>
											Cell Phone: +91 99999999
										</p>
									</div>
								</div>
							</div>
							<div
								style={{ textAlign: "center", margin: "10px", width: "70%", fontSize: "16px" }}>
								<div className="row"><div className="col-sm-2"><span><FontAwesomeIcon icon={faGlobe} /></span></div>
									<div className="col-sm-10">
										<p style={{ borderBottom: "1px dotted ", fontSize: "18px" }}>
											Web: <a href="https://nitsri.ac.in/" style={{ textDecoration: "none" }}>
												nitsri.ac.in/ </a>
										</p>
									</div>
								</div>
							</div>
							<Link to={"/latestnews"} style={{ textDecoration: "none", width:"70%" }}>
							<button className="list-group-item list-group-item-action"
								style={{ textAlign: "center", width: "100%", fontWeight: "bold", fontSize: "22px", marginTop: "20px" }}>
								
									Latest News
								
							</button>
							</Link>
						</div>
					</div>
					<div className="col-sm-8" style={{ paddingBottom: "30px" }}>
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
							<Route path="/"  component={Components}>
								<Redirect to="/home"/>
							</Route>
						</Switch>
					</div>
				</div>

			</div>
			<Footer />
		</div>
	);
}
