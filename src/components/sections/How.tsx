"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const sectionVariants = {
	hidden: { opacity: 0, y: 24 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.7,
			ease: [0.25, 0.1, 0.25, 1] as const,
		},
	},
};

const gridVariants = {
	hidden: {},
	visible: {
		transition: {
			staggerChildren: 0.12,
			delayChildren: 0.15,
		},
	},
};

const cardVariants = {
	hidden: { opacity: 0, y: 28 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.65,
			ease: [0.25, 0.1, 0.25, 1] as const,
		},
	},
};

export default function How() {
	const cardContents = [
		{
			title: "Hackathons",
			desc: "High-energy innovation experiences where teams collaborate, compete, and launch products within days using emerging technologies. Hackathons also help companies test products, APIs, features, and technologies in real-world environments while giving developers opportunities to build, experiment, and showcase their skills.",
		},
		{
			title: "Builder Residencies (Incubation & Acceleration)",
			desc: "Structured virtual and in-person residency programs designed to help founders and developers refine their products, access mentorship, validate ideas, and accelerate growth.",
		},
		{
			title: "Co-Working Spaces & Innovation Labs",
			desc: "We provide collaborative workspaces and partner hubs where startups, developers, and creatives can build, collaborate, and connect with other ambitious builders within Africa.",
		},
		{
			title: "Partnerships",
			desc: "We work with local, regional, and global communities, organizations, and companies to create opportunities that support the growth of talent, startups, and innovative products across Africa.",
		},
		{
			title: "Meetups & Community Initiatives",
			desc: "Local and regional events connecting innovators, founders, students, creators, and technology enthusiasts.",
		},
	];

	return (
		<motion.section
			className="bg-[#F8F9FF] py-12 sm:py-15"
			variants={sectionVariants}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, amount: 0.2 }}
            id="how"
		>
			<div className="custom-container">
				<motion.h2
					variants={sectionVariants}
					className="mx-auto max-w-2xl text-center text-2xl font-medium leading-tight sm:text-[28px] sm:leading-10"
				>
					How We Support Talents & Products
				</motion.h2>

				<motion.div
					className="mt-10 grid grid-cols-1 gap-5 sm:mt-12 sm:grid-cols-2 lg:mt-15 lg:grid-cols-3"
					variants={gridVariants}
				>
					{cardContents.map((c, i) => (
						<Card key={i} title={c.title} desc={c.desc} img={i + 1} />
					))}
				</motion.div>
			</div>
		</motion.section>
	);
}

function Card({
	title,
	desc,
	img,
}: {
	title: string;
	desc: string;
	img: number;
}) {
	return (
		<motion.div
			variants={cardVariants}
			whileHover={{ y: -8, transition: { duration: 0.25 } }}
			className="group flex h-full w-full flex-col overflow-hidden rounded-[5px] border-[1.19px] border-[#EDEDED] bg-white"
		>
			<div className="w-full overflow-hidden">
				<Image
					alt={title}
					src={`/images/how/${img}.png`}
					width={500}
					height={500}
					sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
					className="h-56 w-full object-cover transition-transform duration-500 motion-safe:group-hover:scale-105 sm:h-60 md:h-80 lg:h-100"
				/>
			</div>
			<div className="flex flex-1 flex-col p-4 text-center sm:p-5">
				<h3 className="text-base font-medium sm:text-lg">{title}</h3>
				<p className="mt-2 text-sm leading-6 text-[#4B5563]">{desc}</p>
			</div>
		</motion.div>
	);
}
