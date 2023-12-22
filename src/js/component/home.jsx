import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="container ">
			<div className="palo d-flex  justify-content-center"></div>
			<div className="semaforo">
				<h1 className="circulo selected" id="red"></h1>
				<h1 className="circulo selected" id="yellow"></h1>
				<h1 className="circulo selected" id="green"></h1>
			</div>
		</div>
	);
};

export default Home;
