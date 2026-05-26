/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { motion } from "framer-motion";
import Button from "../ui/Button";
import { pageRoutes } from "../../libs/routes";

const fadeUp = {
	hidden: {
		opacity: 0,
		y: 40,
	},
	visible: (delay = 0) => ({
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.8,
			delay,
			ease: [0.25, 0.1, 0.25, 1] as any,
		},
	}),
};

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
				<motion.h1
					initial="hidden"
					animate="visible"
					variants={fadeUp}
					custom={0}
					className="font-bold text-4xl min-[380px]:text-5xl sm:text-6xl lg:text-[72px] text-center max-w-180 leading-[120%] lg:tracking-[-3%]"
				>
					Building Africa&apos;s Talent & Product Pipeline
				</motion.h1>

				<motion.p
					initial="hidden"
					animate="visible"
					variants={fadeUp}
					custom={0.2}
					className="text-center max-w-2xl max-sm:text-sm max-lg max-sm:leading-5"
				>
					We connect talented builders, startups, and universities with global
					opportunities while helping international companies enter and grow
					across Africa. Through hackathons, builder residency programs,
					workshops, meetups, incubators, accelerators, partnerships and
					community-driven initiatives, we help ideas, products, and people
					scale faster.
				</motion.p>

				<motion.div
					initial="hidden"
					animate="visible"
					variants={fadeUp}
					custom={0.4}
					className="flex max-sm:flex-col gap-3 items-center justify-center max-lg:gap-6 max-sm:w-full max-sm:max-w-xs"
				>
					<motion.div
						whileHover={{ scale: 1.03 }}
						whileTap={{ scale: 0.97 }}
						className="w-full"
					>
						<Button
							href={pageRoutes.joinCommunity}
							target="_blank"
							className="w-full"
						>
							Join the community
						</Button>
					</motion.div>

					<motion.div
						whileHover={{ scale: 1.03 }}
						whileTap={{ scale: 0.97 }}
						className="w-full"
					>
						<Button className="w-full" variant="outline-white">
							Partner with us
						</Button>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
}
