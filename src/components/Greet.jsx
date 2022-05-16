import React from "react";

// Tell the function that we need a name
function Greet({ firstName, lastName}) {// any where you see props 
    return <h2> Hello {lastName || firstName}!</h2>
}


export default Greet;