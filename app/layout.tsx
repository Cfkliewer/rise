import { Metadata } from "next";
import "./globals.css";
import Script from "next/script";
import { Koulen } from "next/font/google";

const koulen = Koulen({ weight: ["400"], subsets: ["latin"] });

export const metadata: Metadata = {
	title: "822 Athletics Edmond - Rise Together",
	description:
		"Home of Rise Bootcamp and 822 Athletics in Edmond, Oklahoma. Discover your best you.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<head>
				<link rel="icon" href="/rise-logo.png" type="image/png" />
				<meta name="robots" content="all" charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="description" content="Home of Rise Bootcamp and 822 Athletics in Edmond, Oklahoma. Discover your best you." />
				<meta property="og:title" content="822 Athletics Edmond - Rise Together" />
				<meta property="og:image" content="/rise-logo.png" />
				<meta name="og:description" content="Home of Rise Bootcamp and 822 Athletics in Edmond, Oklahoma. Discover your best you." />
				<meta property="og:url" content="https://www.822athletics.com" />
				<Script
					async
					src="https://www.googletagmanager.com/gtag/js?id=G-P63TMZ1KR3"
				/>
				<Script id="google-analytics">
					{`
					window.dataLayer = window.dataLayer || [];
					function gtag(){dataLayer.push(arguments);}
					gtag('js', new Date());

					gtag('config', 'G-P63TMZ1KR3');
				`}
				</Script>
			</head>
			<body className={koulen.className}>
				{children}
			</body>
		</html>
	);
}
