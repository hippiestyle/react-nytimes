import React from "react"; 

export const Container = ({ fluid, children}) => (
    <div className={`container${Fluid ? "-fluid" : ""}`}>
        {children}
        </div>
);