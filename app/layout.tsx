import { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

export const metadata: Metadata = {
	title: "CrossFit 822 Edmond - Rise Together",
	description:
		"Home of Rise Bootcamp and CrossFit 822 in Edmond, Oklahoma. Discover your best you.",
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
			{children}
		</html>
	);
}
