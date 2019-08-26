import React from "react";
import styles from "../css/global.module.css"
import Responsive from "react-responsive";
import Header from "../components/header";

export default ({ children }) => {
    const Desktop = props => <Responsive {...props} minWidth={992} />;
    const Tablet = props => <Responsive {...props} minWidth={768} maxWidth={991} />;
    const Mobile = props => <Responsive {...props} maxWidth={767} />;

    return (
        <div className={styles.global}>
            {/* Header component spans the full width */}
            {/* <Desktop>
                <Header textAlign="left" />
            </Desktop>
            <Tablet>
                <Header textAlign="left" />
            </Tablet>
            <Mobile>
                <Header textAlign="center" />
            </Mobile> */}

            <Header textAlign="center" />

            {/* Body component spans 650w */}
            <div style={{ margin: `0 auto`, maxWidth: 650, padding: `1.25rem 1rem` }}>
                {children()}
            </div>
        </div>
    );
};