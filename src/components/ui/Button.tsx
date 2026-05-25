import Link from "next/link";
import React from "react";

type ButtonProps = {
	children: React.ReactNode;
	href?: string;
	onClick?: () => void;
	type?: "button" | "submit" | "reset";
	className?: string;
	disabled?: boolean;
	variant?: "primary" | "outline-white" | "outline-black";
};

export default function Button({
	children,
	href,
	onClick,
	type = "button",
	className = "",
	disabled = false,
	variant = "primary",
}: ButtonProps) {
	const baseStyles =
		"inline-flex items-center justify-center rounded-[7px] py-2.5 px-6 cursor-pointer font-medium transition-all duration-300 min-w-[136px] whitespace-nowrap";

	const variantStyles = {
		primary:
			"border border-primary bg-primary text-white hover:opacity-90 disabled:opacity-50",
		"outline-white":
			"border border-white text-white hover:bg-white hover:text-gray-900 disabled:opacity-50",
		"outline-black":
			"border border-black text-black hover:bg-black hover:text-white disabled:opacity-50",
	};

	const styles = `${baseStyles} ${variantStyles[variant]} ${className}`;

	if (href) {
		return (
			<Link href={href} className={styles}>
				{children}
			</Link>
		);
	}

	return (
		<button
			type={type}
			onClick={onClick}
			disabled={disabled}
			className={styles}
		>
			{children}
		</button>
	);
}
