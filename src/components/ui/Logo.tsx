import Image from "next/image";
import Link from "next/link";
import React from "react";
import { pageRoutes } from "../../libs/routes";

const Logo = () => {
	return (
		<Link href={pageRoutes.home} className="h-3.5 sm:h-5">
			<Image
				alt="Bil Logo"
				src="/images/logos/white-logo.svg"
				className="w-full h-full object-contain"
				width={100}
				height={50}
			/>
		</Link>
	);
};

export default Logo;
