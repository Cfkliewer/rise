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
				<meta name="robots" content="all" charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />

				{/* Primary Meta Tags */}
				<meta name="description" content="Edmond's family-friendly group fitness gym. Unlimited classes, nutrition guidance & community. 21-Day Kickstart only $49. Call (405) 361-3471 today!" />

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

				{/* Local Business Schema */}
				<Script id="schema-local-business" type="application/ld+json">
					{JSON.stringify({
						"@context": "https://schema.org",
						"@type": "ExerciseGym",
						"name": "822 Athletics",
						"image": [
							"https://www.822athletics.com/rise-logo.png",
							"https://www.822athletics.com/banner-md.png"
						],
						"logo": "https://www.822athletics.com/rise-logo.png",
						"description": "Family-friendly group fitness gym in Edmond offering unlimited classes, bootcamp training, and nutrition guidance. All fitness levels welcome.",
						"address": {
							"@type": "PostalAddress",
							"streetAddress": "14310 N. Lincoln Blvd., Ste. 300",
							"addressLocality": "Edmond",
							"addressRegion": "OK",
							"postalCode": "73013",
							"addressCountry": "US"
						},
						"geo": {
							"@type": "GeoCoordinates",
							"latitude": "35.7234",
							"longitude": "-97.4786"
						},
						"url": "https://www.822athletics.com",
						"telephone": "+14053613471",
						"email": "crossfit822@gmail.com",
						"priceRange": "$$",
						"paymentAccepted": "Cash, Credit Card, Debit Card",
						"openingHoursSpecification": [
							{
								"@type": "OpeningHoursSpecification",
								"dayOfWeek": "Monday",
								"opens": "05:00",
								"closes": "18:15"
							},
							{
								"@type": "OpeningHoursSpecification",
								"dayOfWeek": "Tuesday",
								"opens": "05:00",
								"closes": "18:15"
							},
							{
								"@type": "OpeningHoursSpecification",
								"dayOfWeek": "Wednesday",
								"opens": "05:00",
								"closes": "18:15"
							},
							{
								"@type": "OpeningHoursSpecification",
								"dayOfWeek": "Thursday",
								"opens": "05:00",
								"closes": "18:15"
							},
							{
								"@type": "OpeningHoursSpecification",
								"dayOfWeek": "Friday",
								"opens": "05:00",
								"closes": "17:15"
							},
							{
								"@type": "OpeningHoursSpecification",
								"dayOfWeek": "Saturday",
								"opens": "08:15",
								"closes": "10:15"
							},
							{
								"@type": "OpeningHoursSpecification",
								"dayOfWeek": "Sunday",
								"opens": "10:00",
								"closes": "12:00"
							}
						],
						"sameAs": [
							"https://www.facebook.com/crossfit822/",
							"https://instagram.com/822athletics/",
							"https://www.tiktok.com/@822athletics"
						],
						"hasOfferCatalog": {
							"@type": "OfferCatalog",
							"name": "Gym Memberships",
							"itemListElement": [
								{
									"@type": "Offer",
									"itemOffered": {
										"@type": "Service",
										"name": "3 Classes Per Week"
									},
									"price": "125.00",
									"priceCurrency": "USD",
									"priceValidUntil": "2027-12-31"
								},
								{
									"@type": "Offer",
									"itemOffered": {
										"@type": "Service",
										"name": "4 Classes Per Week"
									},
									"price": "140.00",
									"priceCurrency": "USD",
									"priceValidUntil": "2027-12-31"
								},
								{
									"@type": "Offer",
									"itemOffered": {
										"@type": "Service",
										"name": "Unlimited Classes"
									},
									"price": "155.00",
									"priceCurrency": "USD",
									"priceValidUntil": "2027-12-31"
								}
							]
						},
						"makesOffer": {
							"@type": "Offer",
							"name": "21-Day Kickstart",
							"description": "Unlimited classes for 21 days with nutrition guidance and coach support",
							"price": "49.00",
							"priceCurrency": "USD",
							"availability": "https://schema.org/InStock"
						}
					})}
				</Script>

				{/* Aggregate Review Schema */}
				<Script id="schema-reviews" type="application/ld+json">
					{JSON.stringify({
						"@context": "https://schema.org",
						"@type": "ExerciseGym",
						"name": "822 Athletics",
						"aggregateRating": {
							"@type": "AggregateRating",
							"ratingValue": "5.0",
							"reviewCount": "27",
							"bestRating": "5",
							"worstRating": "1"
						},
						"review": [
							{
								"@type": "Review",
								"author": {
									"@type": "Person",
									"name": "Kym Manning"
								},
								"datePublished": "2025-01-15",
								"reviewBody": "The coaches ensure everyone (all skill levels) have a successful and enjoyable experience every session. The bonus is all of the \"strangers\" you meet the first few days that instantly become your biggest cheerleaders.",
								"reviewRating": {
									"@type": "Rating",
									"ratingValue": "5",
									"bestRating": "5"
								}
							},
							{
								"@type": "Review",
								"author": {
									"@type": "Person",
									"name": "Lindsay Steele"
								},
								"datePublished": "2025-01-10",
								"reviewBody": "I initially signed up for a six-week bootcamp to feel a bit more confident in the dress I was wearing in my best friend's wedding. I almost didn't go inside the first day but I'm glad I did! The coaches helped push towards my goals by supporting and encouraging me in the gym AND in life.",
								"reviewRating": {
									"@type": "Rating",
									"ratingValue": "5",
									"bestRating": "5"
								}
							},
							{
								"@type": "Review",
								"author": {
									"@type": "Person",
									"name": "Casey Campbell"
								},
								"datePublished": "2024-12-20",
								"reviewBody": "When I first inquired about Rise, I honestly didn't think I would be able to participate. I have a past medical history that includes multiple orthopedic surgeries. However, all of the coaches have assisted me with modifications when needed to keep my workout safe, pain free and still very effective! In fact, I'm now able to do many movements completely pain free!",
								"reviewRating": {
									"@type": "Rating",
									"ratingValue": "5",
									"bestRating": "5"
								}
							}
						]
					})}
				</Script>
			</head>
			<body className={koulen.className}>
				{children}
			</body>
		</html>
	);
}
