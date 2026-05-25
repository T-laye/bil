import Logo from "../ui/Logo";
import Link from "next/link";
import { pageRoutes } from "../../libs/routes";

export default function Footer() {
	return (
		<footer className="bg-[#0E161E] text-white">
			<div className="custom-container flex justify-between items-center py-9 sm:py-12 gap-10 ">
				<div className="max-w-72 flex flex-col gap-4 sm:gap-6">
					<div className="w-15 sm:w-20">
						<Logo />
					</div>
					<p className="max-sm:text-sm">
						We help ideas, products, and people scale faster through community
						initiatives & partnerships.
					</p>
				</div>
				<div>
					<nav>
						<ul className="text-sm sm:text-base font-medium flex flex-col gap-2">
							<li>
								<Link href={pageRoutes.home} className="hover:text-blue-500">
									HOME
								</Link>
							</li>
							<li>
								<Link href={pageRoutes.home} className="hover:text-blue-500">
									ABOUT US
								</Link>
							</li>
							<li>
								<Link href={pageRoutes.home} className="hover:text-blue-500">
									ACTIVATION
								</Link>
							</li>
							<li>
								<Link href={pageRoutes.home} className="hover:text-blue-500">
									EVENTS
								</Link>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</footer>
	);
}
