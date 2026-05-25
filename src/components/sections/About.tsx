"use client";
import Image from "next/image";
import { motion, useAnimationControls } from "framer-motion";

export default function About() {
	const ads = ["googleads.svg", "youtube.svg", "fiverr.svg", "amazon.svg"];

	return (
		<section className=" bg-[#F8F9FF] py-14 sm:py-20" id="about">
			<div className="custom-container">
				<div className="text-center max-w-xl mx-auto md:px-6">
					<h2 className="text-3xl sm:text-[36px] sm:leading-11 text-foreground/60">
						Building The Infrastructure For Innovation to Thrive
					</h2>

					<p className="mt-4 font-medium max-sm:text-sm">
						We believe talent and products grow faster in the right environment.
						By creating access to opportunities, communities, programs, and the
						necessary infrastructure, we help builders, startups, and global
						companies scale and succeed across Africa.
					</p>
				</div>
			</div>

			<Gallery />

			<div className="custom-container flex justify-center items-center flex-wrap mt-10 sm:mt-20">
				{ads.map((a) => (
					<div key={a} className="w-36 sm:w-47.75">
						<Image
							alt="ads"
							src={`/images/${a}`}
							width={100}
							height={100}
							className="w-full object-contain"
						/>
					</div>
				))}
			</div>
		</section>
	);
}

function Gallery() {
	const images = [1, 2, 3, 4, 5, 6, 7, 8];
	const duplicatedImages = [...images, ...images];
	const controls = useAnimationControls();

	const handleMouseEnter = () => {
		controls.stop();
	};

	const handleMouseLeave = () => {
		// Resume from wherever it stopped — simplest reliable approach: restart
		controls.start({
			x: [null, "-50%"],
			transition: {
				x: {
					duration: 20,
					ease: "linear",
					repeat: Infinity,
					repeatType: "loop",
				},
			},
		});
	};

	return (
		<section className="mt-12 overflow-hidden">
			<motion.div
				className="marquee group flex w-max gap-4 sm:gap-6 lg:gap-8"
				animate={controls}
				initial={{ x: 0 }}
				onViewportEnter={() => {
					controls.start({
						x: [0, "-50%"],
						transition: {
							x: {
								duration: 20,
								ease: "linear",
								repeat: Infinity,
								repeatType: "loop",
							},
						},
					});
				}}
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
			>
				{duplicatedImages.map((i, index) => (
					<div
						key={`${i}-${index}`}
						className="relative shrink-0 h-52 w-52 sm:h-72 sm:w-68 md:h-96 md:w-90 lg:h-124.75 lg:w-[465.26px]"
					>
						<Image
							alt="Gallery image"
							src={`/images/gallery/${i}.png`}
							className="object-cover"
							width={500}
							height={500}
						/>
					</div>
				))}
			</motion.div>
		</section>
	);
}
