import About from "../components/sections/About";
import Footer from "../components/sections/Footer";
import Header from "../components/sections/Header";
import Hero from "../components/sections/Hero";
import How from "../components/sections/How";
import JoinCommunity from "../components/sections/JoinCommunity";

export default function Home() {
	return (
		<div className="">
			<Header />
			<Hero />
			<About />
			<How />
			<JoinCommunity />
			<Footer />
		</div>
	);
}
