import React, { useState } from "react";



//create your first component
const Home = () => {
	const [color, setColor] = useState();
	
	
	return (
		<div className="container ">
			<div className="palo d-flex  justify-content-center"></div>
			<div className="semaforo">
				<h1 onClick={() => setColor("red")} className={"circulo " + ( color==="red" ? "selected" : "")} id="red"></h1>
				<h1 onClick={() => setColor("yellow")} className={"circulo " + ( color==="yellow" ? "selected" : "")} id="yellow"></h1>
				<h1 onClick={() => setColor("green")} className={"circulo " + ( color==="green" ? "selected" : "")} id="green"></h1>
			</div>
		</div>
	);
};

export default Home;
