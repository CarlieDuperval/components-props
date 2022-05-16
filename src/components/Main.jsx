import React from "react";
import Greet from "./Greet";

function Main () {
    return (
    <main>
        <Greet firstName="Wade" lastName="Booth" age="24"/>
        <Greet firstName="Alex"/>
        <Greet firstName="Maria"/>
        <Greet firstName="Arthur"/>
        <Greet firstName="Carlie"/>
    </main>
    )
}


export default Main;