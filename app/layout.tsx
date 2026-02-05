import { Metadata } from "next";
import "./globals.css";
import Script from "next/script";
import { Koulen } from "next/font/google";

const koulen = Koulen({
	weight: ["400"],
	subsets: ["latin"],
	display: 'swap',
	preload: true
});

export const metadata: Metadata = {
	title: "822 Athletics | Group Fitness Gym & Bootcamp in Edmond, OK",
	description:
		"Edmond's family-friendly group fitness gym. Unlimited classes, nutrition guidance & community. 21-Day Kickstart only $49. Call (405) 361-3471 today!",
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
				<link rel="canonical" href="https://www.822athletics.com" />
				<meta name="robots" content="index, follow" charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="google-site-verification" content="your-verification-code-here" />

				{/* Primary Meta Tags */}
				<meta name="description" content="Edmond's family-friendly group fitness gym. Unlimited classes, nutrition guidance & community. 21-Day Kickstart only $49. Call (405) 361-3471 today!" />
				<meta name="keywords" content="gym Edmond OK, group fitness Edmond, bootcamp Edmond, CrossFit Edmond, fitness classes Edmond, personal training Edmond, 822 Athletics" />

				{/* Open Graph / Facebook */}
				<meta property="og:type" content="website" />
				<meta property="og:site_name" content="822 Athletics" />
				<meta property="og:title" content="822 Athletics | Group Fitness Gym & Bootcamp in Edmond, OK" />
				<meta property="og:description" content="Edmond's family-friendly group fitness gym. Unlimited classes, nutrition guidance & community. 21-Day Kickstart only $49. Call (405) 361-3471 today!" />
				<meta property="og:url" content="https://www.822athletics.com" />
				<meta property="og:image" content="https://www.822athletics.com/rise-logo.png" />
				<meta property="og:image:width" content="512" />
				<meta property="og:image:height" content="512" />
				<meta property="og:image:alt" content="822 Athletics - Group Fitness Gym in Edmond, Oklahoma" />
				<meta property="og:locale" content="en_US" />

				{/* Twitter */}
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:title" content="822 Athletics | Group Fitness Gym & Bootcamp in Edmond, OK" />
				<meta name="twitter:description" content="Edmond's family-friendly group fitness gym. Unlimited classes, nutrition guidance & community. 21-Day Kickstart only $49." />
				<meta name="twitter:image" content="https://www.822athletics.com/rise-logo.png" />
				<meta name="twitter:image:alt" content="822 Athletics - Group Fitness Gym in Edmond, Oklahoma" />

				{/* Preload critical assets */}
				<link rel="preload" href="/rise-logo.png" as="image" />
				<link rel="dns-prefetch" href="https://www.googletagmanager.com" />
				<link rel="dns-prefetch" href="https://www.google-analytics.com" />

				{/* Google Analytics */}
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
