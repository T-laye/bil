import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
	subsets: ["latin"],
	weight: ["100", "300", "400", "500", "700", "900"],
	variable: "--font-roboto",
	display: "swap",
});

export const metadata: Metadata = {
	title: "BIL",
	description:
		"We connect talented builders, startups, and universities with global opportunities while helping international companies enter and grow across Africa. Through hackathons, builder residency programs, workshops, meetups, incubators, accelerators, partnerships and community-driven initiatives, we help ideas, products, and people scale faster.",

	keywords: [
		"African tech ecosystem",
		"Africa startups",
		"developer community",
		"hackathons",
		"startup accelerator",
		"builder community",
		"innovation ecosystem",
		"tech events Africa",
		"product development",
		"talent pipeline",
		"startup incubation",
		"tech partnerships",
		"builder residency",
		"African innovation",
	],

	openGraph: {
		title: "BIL",
		description:
			"Building Africa’s talent and product pipeline by connecting builders, startups, universities, and global companies through events, hackathons, accelerators, partnerships, and community-driven initiatives.",
		type: "website",
		url: "https://www.buildersinnovationlabs.com/",
		images: [
			{
				url: "/images/bil-preview.webp",
				width: 1200,
				height: 630,
				alt: "BIL",
			},
		],
		siteName: "BIL",
	},

	twitter: {
		card: "summary_large_image",
		title: "BIL",
		description:
			"Building Africa’s talent and product pipeline through community, innovation, events, and global opportunities.",
		images: ["/images/bil-preview.webp"],
	},
	robots: {
		index: true,
		follow: true,
	},
	icons: {
		icon: "/favicon.ico",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={`${roboto.variable} h-full antialiased`}>
			<body className="min-h-full font-sans">{children}</body>
		</html>
	);
}
