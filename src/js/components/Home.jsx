import React from "react";
import Navbar from "./Navbar.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Card from "./Card.jsx";
import Footer from "./Footer.jsx";

const cards = [
	{
		image: "https://img2.rtve.es/i/?w=1200&i=https://img.rtve.es/imagenes/spiderman-uno-superheroes-mas-populares-todos-tiempos/1442912664626.jpg",
		title: "SpiderMan",
		description: "El vecino amigable",
	},
	{
		image: "https://signal.avg.com/hs-fs/hubfs/Blog_Content/Avg/Signal/AVG%20Signal%20Images/how_to_improve_your_gaming_pc_performance_2nd_refresh_signal/How_to_Improve_Your_Gaming_PC_Performance-Hero.jpg?width=1200&name=How_to_Improve_Your_Gaming_PC_Performance-Hero.jpg",
		title: "Gaming",
		description: "El mundo de los VideoJuegos",
	},
	{
		image: "https://www.carscoops.com/wp-content/uploads/2024/11/BMW-M3-GTR-Need-for-Speed-1aa.jpg",
		title: "BMW M3 MW",
		description: "Most Wanted",
	},
	{
		image: "https://s1.elespanol.com/2024/08/17/enclave-ods/historias/878922213_248531344_1024x576.jpg",
		title: "Paisaje",
		description: "Hermosos paisajes",
	}
];

const Home = () => {
	return (
		<div className="text-center">
			<Navbar />
			<Jumbotron />
			<div className="container">
				<div className="row">
					{cards.map((item, index) => (
						<div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" key={index}>
							<Card cards={item} />
						</div>
					))}
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Home;;