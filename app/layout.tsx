import { Metadata } from "next";
import Script from "next/script";
import { Barlow_Condensed, Bebas_Neue, Permanent_Marker } from "next/font/google";
import "./globals.css";

const barlow = Barlow_Condensed({
	weight: ["400", "600", "700"],
	subsets: ["latin"],
	display: "swap",
	variable: "--font-barlow",
});

const bebas = Bebas_Neue({
	weight: "400",
	subsets: ["latin"],
	display: "swap",
	variable: "--font-bebas",
});

const marker = Permanent_Marker({
	weight: "400",
	subsets: ["latin"],
	display: "swap",
	variable: "--font-marker",
});

const clarityProjectId = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID;
const googleSiteVerification = process.env.GOOGLE_SITE_VERIFICATION;
const title = "822 Athletics | Group Fitness Gym & Bootcamp in Edmond, OK";
const description =
	"Edmond's family-friendly group fitness gym. Unlimited classes, nutrition guidance & community. 21-Day Kickstart only $49. Call (405) 361-3471 today!";

export const metadata: Metadata = {
	metadataBase: new URL("https://www.822athletics.com"),
	title,
	description,
	alternates: { canonical: "/" },
	robots: { index: true, follow: true },
	openGraph: {
		type: "website",
		siteName: "822 Athletics",
		title,
		description,
		url: "/",
		locale: "en_US",
		images: [
			{
				url: "/banner-md.png",
				width: 1750,
				height: 743,
				alt: "Group fitness class at 822 Athletics in Edmond, Oklahoma",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title,
		description,
		images: ["/banner-md.png"],
	},
	...(googleSiteVerification
		? { verification: { google: googleSiteVerification } }
		: {}),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={`${barlow.variable} ${bebas.variable} ${marker.variable} ${barlow.className}`}>
				{children}
				<Script
					src="https://www.googletagmanager.com/gtag/js?id=G-SWGFTD0ZF4"
					strategy="afterInteractive"
				/>
				<Script id="google-analytics" strategy="afterInteractive">
					{`
					window.dataLayer = window.dataLayer || [];
					function gtag(){dataLayer.push(arguments);}
					gtag('js', new Date());
					gtag('config', 'G-SWGFTD0ZF4');
				`}
				</Script>
				{clarityProjectId && (
					<Script id="microsoft-clarity" strategy="afterInteractive">
						{`(function(c,l,a,r,i,t,y){
							c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
							t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
							y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
						})(window,document,"clarity","script",${JSON.stringify(clarityProjectId)});`}
					</Script>
				)}
			</body>
		</html>
	);
}
