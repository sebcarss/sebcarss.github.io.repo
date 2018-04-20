import React from "react";
import Link from "gatsby-link";

const ListLink = props =>
    <li style={{ display: `inline-block`, marginRight: `1rem` }}>
        <Link to={props.to}>
            {props.children}
        </Link>
    </li>

export default ({ children }) => (
    <div style={{ margin: `0 auto`, maxWidth: 650, padding: `1.25rem 1rem` }}>
        <header style={{ marginBottom: `1.5rem` }}>
            <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
                <h3 style={{ display: `inline` }}>SebCarss.com</h3>
            </Link>
            <ul style={{ listStyle: `none`, float: `right` }}>
                <ListLink to="/">Root</ListLink>
                <ListLink to="/home/">Home</ListLink>
                <ListLink to="/about-css-modules/">About CSS Modules</ListLink>
            </ul>
        </header>
        {children()}
    </div>
);