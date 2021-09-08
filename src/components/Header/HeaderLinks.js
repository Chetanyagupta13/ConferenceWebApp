/*eslint-disable*/
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
	const classes = useStyles();
	return (
		<List className={classes.list}>
			<ListItem className={classes.listItem}>
			<Link to="/home" style={{ textDecoration: "none", color:"#555555"  }}><Button
					color="transparent"
					target="_blank"
					className={classes.navLink}
					style={{ fontSize: 16 }}
				>
					HOME
				</Button></Link>
			</ListItem>
			<ListItem className={classes.listItem}>
			<Link to="/committee" style={{ textDecoration: "none", color:"#555555" }}><Button
					color="transparent"
					target="_blank"
					className={classes.navLink}
					style={{ fontSize: 16, }}
				>
					COMMITTEES
				</Button></Link>
			</ListItem>
			<ListItem className={classes.listItem}>
			<Link to="/speaker" style={{ textDecoration: "none", color:"#555555"  }}><Button
					color="transparent"
					target="_blank"
					className={classes.navLink}
					style={{ fontSize: 16 }}
				>
					SPEAKERS
				</Button></Link>
			</ListItem>
			<ListItem className={classes.listItem}>
			<Link to="/publication" style={{ textDecoration: "none", color:"#555555"  }}><Button
					color="transparent"
					target="_blank"
					className={classes.navLink}
					style={{ fontSize: 16 }}
				>
					PUBLICATION
				</Button></Link>
			</ListItem>
			<ListItem className={classes.listItem}>
				<CustomDropdown
					noLiPadding
					buttonText="CALL FOR PAPERS"
					
					buttonProps={{
						className: classes.navLink,
						color: "transparent",
					}}
					buttonIcon={Apps}
					dropdownList={[
						<Link to="/scopes" className={classes.dropdownLink} >
							SCOPES
						</Link>,
						<Link to="/importantdates" className={classes.dropdownLink}>
							IMPORTANT DATE
						</Link>,
						<Link to="/submitnow" className={classes.dropdownLink}>
							SUBMIT NOW
						</Link>,
					]}
				/>
			</ListItem>
			<ListItem className={classes.listItem}>
				<CustomDropdown
						noLiPadding
						buttonText="FOR PARTICIPANTS"
						buttonProps={{
							className: classes.navLink,
							color: "transparent",
						}}
						//buttonIcon={Apps}
						dropdownList={[
							<Link to="/agenda" className={classes.dropdownLink}>
								AGENDA
							</Link>,
							<Link to="/venue" className={classes.dropdownLink}>
								VENUE
							</Link>,
							<Link to="/visit" className={classes.dropdownLink}>
								LOCAL VISIT
							</Link>,
						]}
				/>
			</ListItem>
		</List>
	);
}
