import React from "react";
import PropTypes from "prop-types";
import styles from "./Card.module.css";

const Card = (props) => <div className={styles.card}>{props.children}</div>;

Card.propTypes = {};

Card.defaultProps = {};

export default Card;
