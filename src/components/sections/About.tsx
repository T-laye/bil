"use client";
import Image from "next/image";
import { motion, useAnimationControls } from "framer-motion";

export default function About() {
	return (
		<section className="py-14 sm:py-20" id="about">
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

			<Partners />
		</section>
	);
}

function Partners() {
	const partners = [
		"stellar.svg",
		"stellar_original.svg",
		"nothing.svg",
		"diamond.svg",
		"3mtt.svg",
		"cmfest.svg",
		"webflow.svg",
		"orbit.svg",
		"polygon.svg",
		"digital_ocean.svg",
		"skysenx.svg",
		"no-code.svg",
		"web_3_partners.svg",
		"flow.svg",
	];

	const duplicatedPartners = [...partners, ...partners];

	const controls = useAnimationControls();

	const handleMouseEnter = () => {
		controls.stop();
	};

	const handleMouseLeave = () => {
		controls.start({
			x: ["-50%", '0%'],
			transition: {
				x: {
					duration: 18,
					ease: "linear",
					repeat: Infinity,
					repeatType: "loop",
				},
			},
		});
	};

	return (
		<section className="overflow-hidden mt-10 sm:mt-20">
			<motion.div
				className="flex items-center gap-10 sm:gap-14 w-max"
				animate={controls}
				initial={{ x: 0 }}
				onViewportEnter={() => {
					controls.start({
						x: ["-50%", "0%"],
						transition: {
							x: {
								duration: 18,
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
				{duplicatedPartners.map((partner, index) => (
					<div
						key={`${partner}-${index}`}
						className="h-10 sm:h-12 md:h-14 shrink-0 flex items-center"
					>
						<Image
							alt="Partner"
							src={`/images/partners/${partner}`}
							width={140}
							height={80}
							className="h-full w-auto object-contain"
						/>
					</div>
				))}
			</motion.div>
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
