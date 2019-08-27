import React from "react";
import Header from "./header";

export default ({ children }) => {
    return (
        <div>
            <Header textAlign="center" />

            <div style={{ margin: `0 auto`, maxWidth: 650, padding: `1.25rem 1rem` }}>
                {children}
            </div>
        </div>
    );
};