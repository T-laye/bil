"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function PastEvents() {
	const [activeIndex, setActiveIndex] = useState(0);

	const events = [
		{
			img: "/images/events/africa-dev-connect.png",
			title: "Africans at Dev Connect",
			inActiveColor: activeIndex < 1 ? "" : "bg-[#DAD9DA]",
		},
		{
			img: "/images/events/stellar-wacon.png",
			title: "StellarWACon",
			inActiveColor: activeIndex < 1 ? "bg-[#DAD9DA]" : "bg-[#8C8C8C]",
		},
		{
			img: "/images/events/cmfest.png",
			title: "CMFest",
			inActiveColor: activeIndex < 2 ? "bg-[#8C8C8C]" : "bg-[#3F3F3F]",
		},
		{
			img: "/images/events/buildersconnect.png",
			title: "Builders Connect",
			inActiveColor: activeIndex < 3 ? "bg-[#3F3F3F]" : "bg-[#020309]",
		},
		{
			img: "/images/events/zk-workshop.png",
			title: "ZK Workshop",
			inActiveColor: activeIndex < 4 ? "bg-[#020309]" : "",
		},
	];

	return (
		<section id="events" className="pt-20 pb-12">
			<div className="custom-container">
				<h2 className="mb-10 font-medium text-2xl sm:text-[28px]">
					Past Initiatives & Partnerships
				</h2>

				{/* Desktop */}
				<div className="flex max-md:hidden">
					{events.map((event, index) => (
						<ImageCard
							title={event.title}
							img={event.img}
							inActiveColor={event.inActiveColor}
							key={index}
							fn={() => setActiveIndex(index)}
							active={index === activeIndex}
						/>
					))}
				</div>

				{/* Mobile Sticky Stack */}
				<div className="md:hidden relative">
					{events.map((event, index) => (
						<motion.div
							key={index}
							className="sticky top-20 h-[50vh] sm:h-[75vh] rounded-3xl overflow-hidden mb-6"
							style={{
								zIndex: index + 1,
								backgroundImage: `url(${event.img})`,
								backgroundSize: "cover",
								backgroundPosition: "center",
							}}
							initial={{
								scale: 0.95,
								opacity: 0.7,
							}}
							whileInView={{
								scale: 1,
								opacity: 1,
							}}
							transition={{
								duration: 0.5,
							}}
							viewport={{
								once: false,
								amount: 0.6,
							}}
						>
							<div className="absolute inset-0 bg-black/25" />

							<div className="relative h-full flex items-end p-6">
								<h3 className="text-white text-2xl font-medium">
									{event.title}
								</h3>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}

function ImageCard({
	title,
	img,
	inActiveColor,
	active,
	fn,
}: {
	fn: () => void;
	title: string;
	img: string;
	inActiveColor: string;
	active: boolean;
}) {
	return (
		<>
			{active ? (
				<div
					style={{
						backgroundImage: `url(${img})`,
						backgroundSize: "cover",
						backgroundPosition: "center",
					}}
					className={`transition-all duration-300 w-full h-108.25 px-12 py-8 flex items-end`}
				>
					<h3 className={`text-white text-[28px] font-medium`}>{title}</h3>
				</div>
			) : (
				<div
					onClick={fn}
					className={`${inActiveColor} transition-all duration-300 flex items-center justify-center max-w-24`}
				>
					<h3
						className={`${inActiveColor} text-white text-[28px] font-medium whitespace-nowrap -rotate-90 transition-all duration-300 cursor-pointer`}
					>
						{title}
					</h3>
				</div>
			)}
		</>
	);
}
