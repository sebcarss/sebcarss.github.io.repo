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
            </header>
            <nav style={{ textAlign: `center` }}>
                <p>
                    {/* <Link to="/cooking" style={{ textShadow: `none`, backgroundImage: `none`, textDecoration: `none`, color: `teal` }}>
                        <h4 style={{ display: `inline` }}>Cooking</h4>
                    </Link>&nbsp; | &nbsp;
                    <Link to="/coding" style={{ textShadow: `none`, backgroundImage: `none`, textDecoration: `none`, color: `teal` }}>
                        <h4 style={{ display: `inline` }}>Coding</h4>
                    </Link> */}
                </p>
            </nav>
        </div>
    );
};