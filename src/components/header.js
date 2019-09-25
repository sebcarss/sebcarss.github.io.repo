import React from "react";
import { Link } from "gatsby";

export default (props) => {

    return (
        <div>
            <header style={{ 
                marginBottom: `-1rem`, 
                paddingLeft: `10px`, 
                backgroundColor: `#008080`,
                textAlign: props.textAlign }}>
                <Link 
                    to="/" 
                    style={{ 
                        textShadow: `none`, 
                        backgroundImage: `none`, 
                        textDecoration: `none`, 
                        color: `white` }}>
                    <h3 style={{ 
                        display: `inline`, 
                        fontFamily: `Courier New` }}>
                            Seb Carss
                    </h3>
                </Link>
            </header>
            <nav style={{ marginTop: `1.5em`, textAlign: `center` }}>
                <div>
                    {/* <Link to="/recipes" style={{ textShadow: `none`, backgroundImage: `none`, textDecoration: `none`, color: `teal` }}>
                        <h4 style={{ display: `inline` }}>Recipes</h4>
                    </Link> */}
                    {/* &nbsp; | &nbsp;
                    <Link to="/coding" style={{ textShadow: `none`, backgroundImage: `none`, textDecoration: `none`, color: `teal` }}>
                        <h4 style={{ display: `inline` }}>Technology</h4>
                    </Link> */}
                </div>
            </nav>
        </div>
    );
};