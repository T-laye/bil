/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from "react";

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

export default function JoinCommunity() {
	return (
		<section className="py-14">
			<div className="custom-container text-center max-w-2xl mx-auto flex flex-col gap-6">
				<motion.h3
					initial="hidden"
					animate="visible"
					variants={fadeUp}
					custom={0.4}
					className="text-2xl sm:text-[28px] font-medium"
				>
					Join A Community Built For Builders
				</motion.h3>
				<motion.p
					initial="hidden"
					animate="visible"
					variants={fadeUp}
					custom={0.4}
					className="max-sm:text-sm max-w-lg mx-auto"
				>
					Whether you&apos;re a developer, designer, founder, student,
					researcher, or ecosystem partner — there&apos;s a place for you here.
				</motion.p>

				<motion.div
					initial="hidden"
					animate="visible"
					variants={fadeUp}
					custom={0.4}
					className="flex max-sm:flex-col gap-3 items-center justify-center max-lg:gap-6 max-sm:w-full max-sm:max-w-xs  mx-auto"
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
						<Button className="w-full" variant="outline-black">
							Partner with us
						</Button>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
}
