import React from "react";
import Link from "gatsby-link";

export default (props) => {

    return (
        <div>
            <header style={{ marginBottom: `-1rem`, paddingLeft: `10px`, backgroundColor: `#008080`, textAlign: props.textAlign }}>
                <p>
                    <Link to="/" style={{ textShadow: `none`, backgroundImage: `none`, textDecoration: `none`, color: `white` }}>
                        <h3 style={{ display: `inline`, fontFamily: `Courier New` }}>sebcarss.com</h3>
                    </Link>
                </p>
                <p>
                    <Link to="/bread-chronicles" style={{ textShadow: `none`, backgroundImage: `none`, textDecoration: `none`, color: `#CDCDCD` }}>
                        <h4 style={{ display: `inline`, fontFamily: `Courier New` }}>The Bread Chronicles</h4>
                    </Link>
                </p>
            </header>
        </div>
    );
};