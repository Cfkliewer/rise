const faq = [
	{
		question: "What is the 21-Day Kickstart program?",
		answer:
			"Our 21-Day Kickstart is a beginner-friendly program for just $49 that includes unlimited group fitness classes, nutrition guidance, personal coaching support, and access to our family-friendly community. It's designed for people of all fitness levels to experience what 822 Athletics has to offer.",
	},
	{
		question: "Do I need to be in shape to start?",
		answer:
			"Absolutely not! 822 Athletics welcomes all fitness levels. Our experienced coaches provide modifications for every movement, ensuring your workout is safe, effective, and tailored to your current fitness level. Most of our members thought the gym wasn't for them until they tried it.",
	},
	{
		question: "What are your class times?",
		answer:
			"We offer classes throughout the day Monday-Sunday. Weekday morning classes start at 5:00 AM, with midday options at 12:00 PM and evening classes at 5:15 PM and 6:15 PM. Weekend classes are available Saturday mornings at 8:15 AM and 9:15 AM, and Sunday at 10:00 AM. We also have Open Gym time Monday-Friday at 4:00 PM.",
	},
	{
		question: "How much does a membership cost?",
		answer:
			"We offer flexible membership options: 3 classes per week for $125/month, 4 classes per week for $140/month, and unlimited classes for $155/month. We also provide discounts for teachers, first responders, students, spouses (20% off), and those who pre-pay for 6+ months (10% off).",
	},
	{
		question: "Is 822 Athletics family-friendly?",
		answer:
			"Yes! Kids are welcome at 822 Athletics. We understand that life is busy and sometimes you need to bring the whole family. Our community is built around supporting each other, including families with children.",
	},
	{
		question: "Where is 822 Athletics located in Edmond?",
		answer:
			"We're located at 14310 N. Lincoln Blvd., Suite 300, Edmond, OK 73013. You can call or text us at (405) 361-3471. We're easy to find and have convenient parking.",
	},
	{
		question: "Do you offer nutrition guidance?",
		answer:
			"Yes! All our memberships include nutrition guidance. We provide real food plans designed for real lifestyles - no fads or extreme diets. Our coaches help you develop sustainable eating habits that support your fitness goals.",
	},
	{
		question: "What makes 822 Athletics different from other gyms?",
		answer:
			"822 Athletics is more than just a gym - it's a community that feels like family. We offer small group classes where you won't feel judged, rushed, or lost. Our experienced coaches ensure everyone gets personal attention regardless of skill level. Plus, we include nutrition guidance and accountability coaching to help you succeed both in and out of the gym.",
	},
];

const structuredData = {
	"@context": "https://schema.org",
	"@graph": [
		{
			"@type": ["Organization", "ExerciseGym"],
			"@id": "https://www.822athletics.com/#business",
			name: "822 Athletics",
			alternateName: "822 Athletics Edmond",
			url: "https://www.822athletics.com/",
			logo: {
				"@type": "ImageObject",
				url: "https://www.822athletics.com/rise-logo.png",
				width: 1152,
				height: 833,
			},
			image: "https://www.822athletics.com/banner-md.png",
			description:
				"Family-friendly group fitness gym in Edmond offering group classes, nutrition guidance, and personal coaching for all fitness levels.",
			telephone: "+1-405-361-3471",
			email: "crossfit822@gmail.com",
			priceRange: "$$",
			address: {
				"@type": "PostalAddress",
				streetAddress: "14310 N. Lincoln Blvd., Ste. 300",
				addressLocality: "Edmond",
				addressRegion: "OK",
				postalCode: "73013",
				addressCountry: "US",
			},
			sameAs: [
				"https://www.facebook.com/822athletics",
				"https://www.instagram.com/822athletics",
				"https://www.tiktok.com/@822athletics",
			],
			makesOffer: {
				"@type": "Offer",
				name: "21-Day Kickstart",
				description:
					"Unlimited classes for 21 days with nutrition guidance and coach support.",
				price: "49.00",
				priceCurrency: "USD",
				availability: "https://schema.org/InStock",
				url: "https://www.822athletics.com/",
				itemOffered: {
					"@type": "Service",
					name: "21-Day Kickstart Program",
				},
			},
		},
		{
			"@type": "WebSite",
			"@id": "https://www.822athletics.com/#website",
			url: "https://www.822athletics.com/",
			name: "822 Athletics",
			publisher: { "@id": "https://www.822athletics.com/#business" },
		},
		{
			"@type": "FAQPage",
			"@id": "https://www.822athletics.com/#faq",
			mainEntity: faq.map(({ question, answer }) => ({
				"@type": "Question",
				name: question,
				acceptedAnswer: { "@type": "Answer", text: answer },
			})),
		},
	],
};

export default function StructuredData() {
	return (
		<script
			type="application/ld+json"
			dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
		/>
	);
}
