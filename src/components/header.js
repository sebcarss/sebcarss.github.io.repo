import React from "react";
import Link from "gatsby-link";

export default (props) => {

    return (
        <div>
            <header style={{ marginBottom: `1.5rem`, paddingLeft: `10px`, backgroundColor: `#008080`, textAlign: props.textAlign }}>
                <Link to="/" style={{ textShadow: `none`, backgroundImage: `none`, textDecoration: `none`, color: `white` }}>
                    <h3 style={{ display: `inline`, fontFamily: `Courier New` }}>sebcarss.com</h3>
                </Link>
            </header>
        </div>
    );
};