import React from "react";
import ReactDOM  from "react-dom/client";

import Header from "./Header";
import Body from "./Body";




const AppLayout = () => {
    return(
        <>
        <Header />
        <Body />
        
        </>
    )
}
const display = ReactDOM.createRoot(document.getElementById("root"));
display.render(<AppLayout />);