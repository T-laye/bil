"use client";

import React, { useState } from "react";
import Logo from "../ui/Logo";
import Link from "next/link";
import { pageRoutes } from "../../libs/routes";
import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
	{
		label: "HOME",
		href: pageRoutes.home,
	},
	{
		label: "ABOUT US",
		href: pageRoutes.about,
	},
	{
		label: "ACTIVATION",
		href: pageRoutes.home,
	},
	{
		label: "EVENTS",
		href: pageRoutes.home,
	},
];

export default function Header() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<header
			style={{
				background: "url(/images/hero-bg.png)",
				backgroundPosition: "top",
				backgroundSize: "cover",
				backgroundRepeat: "no-repeat",
			}}
			className="fixed top-0 right-0 left-0 z-50 py-5 sm:py-7 text-white backdrop-blur-xl"
		>
			<div className="custom-container flex items-center justify-between">
				<Logo />

				{/* Desktop Nav */}
				<nav className="hidden sm:block">
					<ul className="flex items-center gap-10 text-sm font-medium">
						{navLinks.map((link) => (
							<li key={link.label}>
								<Link
									href={link.href}
									className="transition-opacity duration-300 hover:opacity-70"
								>
									{link.label}
								</Link>
							</li>
						))}
					</ul>
				</nav>

				{/* Mobile Menu Button */}
				<button
					onClick={() => setIsOpen(true)}
					className="sm:hidden"
					aria-label="Open Menu"
				>
					<IoMenuOutline className="text-3xl" />
				</button>

				{/* Mobile Menu */}
				<AnimatePresence>
					{isOpen && (
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.25 }}
							className="fixed inset-0 h-screen z-50 bg-[#0f151b]/98 backdrop-blur-2xl sm:hidden"
						>
							<div className="flex h-full flex-col items-center justify-center">
								<button
									onClick={() => setIsOpen(false)}
									className="absolute top-5 right-4"
									aria-label="Close Menu"
								>
									<IoCloseOutline className="text-4xl text-white" />
								</button>

								<motion.ul
									initial="hidden"
									animate="visible"
									exit="hidden"
									variants={{
										hidden: {},
										visible: {
											transition: {
												staggerChildren: 0.1,
											},
										},
									}}
									className="flex flex-col items-center gap-8 text-lg font-medium"
								>
									{navLinks.map((link) => (
										<motion.li
											key={link.label}
											variants={{
												hidden: {
													opacity: 0,
													y: 20,
												},
												visible: {
													opacity: 1,
													y: 0,
												},
											}}
											transition={{
												duration: 0.3,
											}}
										>
											<Link
												href={link.href}
												onClick={() => setIsOpen(false)}
												className="transition-opacity duration-300 hover:opacity-70"
											>
												{link.label}
											</Link>
										</motion.li>
									))}
								</motion.ul>
							</div>
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</header>
	);
}
