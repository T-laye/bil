import Button from "../ui/Button";

export default function Hero() {
	return (
		<section
			style={{
				background: "url(/images/hero-bg.png)",
				backgroundPosition: "center",
				backgroundSize: "cover",
				backgroundRepeat: "no-repeat",
			}}
			className="text-background"
		>
			<div className="min-h-screen custom-container flex flex-col items-center justify-center h-full gap-8 md:gap-6">
				<h1 className="font-bold text-4xl min-[380px]:text-5xl sm:text-6xl lg:text-[72px] text-center max-w-180 leading-[120%] lg:tracking-[-3%]">
					Building Africa&apos;s Talent & Product Pipeline
				</h1>

				<p className="text-center max-w-2xl max-sm:text-sm max-lg max-sm:leading-5">
					We connect talented builders, startups, and universities with global
					opportunities while helping international companies enter and grow
					across Africa. Through hackathons, builder residency programs,
					workshops, meetups, incubators, accelerators, partnerships and
					community-driven initiatives, we help ideas, products, and people
					scale faster.
				</p>

				<div className="flex max-sm:flex-col gap-3 items-center justify-center max-lg:gap-6 max-sm:w-full max-sm:max-w-xs">
					<Button className="w-full">Join the community</Button>
					<Button className="w-full" variant="outline-white">
						Partner with us
					</Button>
				</div>
			</div>
		</section>
	);
}
