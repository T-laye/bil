import About from "../components/sections/About";
import Footer from "../components/sections/Footer";
import Header from "../components/sections/Header";
import Hero from "../components/sections/Hero";
import How from "../components/sections/How";

export default function Home() {
	return (
		<div className="">
			<Header />
			<Hero />
			<About />
			<How />
			<Footer />
		</div>
	);
}
