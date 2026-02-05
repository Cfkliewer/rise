export default function StructuredData() {
	return (
		<>
			{/* Organization Schema */}
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						"@context": "https://schema.org",
						"@type": "Organization",
						"@id": "https://www.822athletics.com/#organization",
						"name": "822 Athletics",
						"alternateName": "822 Athletics Edmond",
						"url": "https://www.822athletics.com",
						"logo": {
							"@type": "ImageObject",
							"url": "https://www.822athletics.com/rise-logo.png",
							"width": 512,
							"height": 512
						},
						"contactPoint": {
							"@type": "ContactPoint",
							"telephone": "+1-405-361-3471",
							"contactType": "customer service",
							"areaServed": "US",
							"availableLanguage": ["en"]
						},
						"sameAs": [
							"https://www.facebook.com/crossfit822/",
							"https://www.instagram.com/822athletics/",
							"https://www.tiktok.com/@822athletics"
						]
					})
				}}
			/>

			{/* Local Business Schema - Enhanced */}
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						"@context": "https://schema.org",
						"@type": ["ExerciseGym", "HealthAndBeautyBusiness", "LocalBusiness"],
						"@id": "https://www.822athletics.com/#localbusiness",
						"name": "822 Athletics",
						"image": [
							"https://www.822athletics.com/rise-logo.png",
							"https://www.822athletics.com/banner-md.png"
						],
						"logo": {
							"@type": "ImageObject",
							"url": "https://www.822athletics.com/rise-logo.png"
						},
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
							"latitude": 35.7234,
							"longitude": -97.4786
						},
						"url": "https://www.822athletics.com",
						"telephone": "+1-405-361-3471",
						"email": "crossfit822@gmail.com",
						"priceRange": "$$",
						"paymentAccepted": ["Cash", "Credit Card", "Debit Card"],
						"currenciesAccepted": "USD",
						"openingHoursSpecification": [
							{
								"@type": "OpeningHoursSpecification",
								"dayOfWeek": ["Monday", "Wednesday"],
								"opens": "05:00",
								"closes": "18:15"
							},
							{
								"@type": "OpeningHoursSpecification",
								"dayOfWeek": ["Tuesday", "Thursday"],
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
							"https://www.instagram.com/822athletics/",
							"https://www.tiktok.com/@822athletics"
						],
						"aggregateRating": {
							"@type": "AggregateRating",
							"ratingValue": "5.0",
							"reviewCount": "27",
							"bestRating": "5",
							"worstRating": "1"
						},
						"hasOfferCatalog": {
							"@type": "OfferCatalog",
							"name": "Gym Memberships & Classes",
							"itemListElement": [
								{
									"@type": "OfferCatalog",
									"name": "Monthly Memberships",
									"itemListElement": [
										{
											"@type": "Offer",
											"itemOffered": {
												"@type": "Service",
												"name": "3 Classes Per Week",
												"description": "Access to group fitness classes 3 times per week"
											},
											"price": "125.00",
											"priceCurrency": "USD",
											"priceValidUntil": "2027-12-31",
											"availability": "https://schema.org/InStock",
											"url": "https://www.822athletics.com"
										},
										{
											"@type": "Offer",
											"itemOffered": {
												"@type": "Service",
												"name": "4 Classes Per Week",
												"description": "Access to group fitness classes 4 times per week"
											},
											"price": "140.00",
											"priceCurrency": "USD",
											"priceValidUntil": "2027-12-31",
											"availability": "https://schema.org/InStock",
											"url": "https://www.822athletics.com"
										},
										{
											"@type": "Offer",
											"itemOffered": {
												"@type": "Service",
												"name": "Unlimited Classes",
												"description": "Unlimited access to all group fitness classes"
											},
											"price": "155.00",
											"priceCurrency": "USD",
											"priceValidUntil": "2027-12-31",
											"availability": "https://schema.org/InStock",
											"url": "https://www.822athletics.com"
										}
									]
								}
							]
						},
						"makesOffer": [
							{
								"@type": "Offer",
								"name": "21-Day Kickstart",
								"description": "Unlimited classes for 21 days with nutrition guidance and coach support. Perfect for beginners.",
								"price": "49.00",
								"priceCurrency": "USD",
								"availability": "https://schema.org/InStock",
								"priceValidUntil": "2027-12-31",
								"url": "https://www.822athletics.com",
								"itemOffered": {
									"@type": "Service",
									"name": "21-Day Kickstart Program",
									"provider": {
										"@type": "Organization",
										"name": "822 Athletics"
									}
								}
							}
						],
						"amenityFeature": [
							{
								"@type": "LocationFeatureSpecification",
								"name": "Group Fitness Classes",
								"value": true
							},
							{
								"@type": "LocationFeatureSpecification",
								"name": "Nutrition Guidance",
								"value": true
							},
							{
								"@type": "LocationFeatureSpecification",
								"name": "Personal Coaching",
								"value": true
							},
							{
								"@type": "LocationFeatureSpecification",
								"name": "Family Friendly",
								"value": true
							},
							{
								"@type": "LocationFeatureSpecification",
								"name": "Open Gym",
								"value": true
							}
						]
					})
				}}
			/>

			{/* Website Schema */}
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						"@context": "https://schema.org",
						"@type": "WebSite",
						"@id": "https://www.822athletics.com/#website",
						"url": "https://www.822athletics.com",
						"name": "822 Athletics",
						"description": "Group Fitness Gym & Bootcamp in Edmond, OK",
						"publisher": {
							"@id": "https://www.822athletics.com/#organization"
						},
						"potentialAction": {
							"@type": "SearchAction",
							"target": {
								"@type": "EntryPoint",
								"urlTemplate": "https://www.822athletics.com/?s={search_term_string}"
							},
							"query-input": "required name=search_term_string"
						}
					})
				}}
			/>

			{/* Individual Review Schemas */}
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify([
						{
							"@context": "https://schema.org",
							"@type": "Review",
							"itemReviewed": {
								"@type": "LocalBusiness",
								"name": "822 Athletics",
								"address": {
									"@type": "PostalAddress",
									"addressLocality": "Edmond",
									"addressRegion": "OK"
								}
							},
							"author": {
								"@type": "Person",
								"name": "Kym Manning"
							},
							"reviewRating": {
								"@type": "Rating",
								"ratingValue": "5",
								"bestRating": "5",
								"worstRating": "1"
							},
							"datePublished": "2025-01-15",
							"reviewBody": "The coaches ensure everyone (all skill levels) have a successful and enjoyable experience every session. The bonus is all of the strangers you meet the first few days that instantly become your biggest cheerleaders."
						},
						{
							"@context": "https://schema.org",
							"@type": "Review",
							"itemReviewed": {
								"@type": "LocalBusiness",
								"name": "822 Athletics",
								"address": {
									"@type": "PostalAddress",
									"addressLocality": "Edmond",
									"addressRegion": "OK"
								}
							},
							"author": {
								"@type": "Person",
								"name": "Lindsay Steele"
							},
							"reviewRating": {
								"@type": "Rating",
								"ratingValue": "5",
								"bestRating": "5",
								"worstRating": "1"
							},
							"datePublished": "2025-01-10",
							"reviewBody": "I initially signed up for a six-week bootcamp to feel a bit more confident in the dress I was wearing in my best friend's wedding. I almost didn't go inside the first day but I'm glad I did! The coaches helped push towards my goals by supporting and encouraging me in the gym AND in life."
						},
						{
							"@context": "https://schema.org",
							"@type": "Review",
							"itemReviewed": {
								"@type": "LocalBusiness",
								"name": "822 Athletics",
								"address": {
									"@type": "PostalAddress",
									"addressLocality": "Edmond",
									"addressRegion": "OK"
								}
							},
							"author": {
								"@type": "Person",
								"name": "Casey Campbell"
							},
							"reviewRating": {
								"@type": "Rating",
								"ratingValue": "5",
								"bestRating": "5",
								"worstRating": "1"
							},
							"datePublished": "2024-12-20",
							"reviewBody": "When I first inquired about Rise, I honestly didn't think I would be able to participate. I have a past medical history that includes multiple orthopedic surgeries. However, all of the coaches have assisted me with modifications when needed to keep my workout safe, pain free and still very effective! In fact, I'm now able to do many movements completely pain free!"
						}
					])
				}}
			/>

			{/* FAQ Schema */}
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						"@context": "https://schema.org",
						"@type": "FAQPage",
						"mainEntity": [
							{
								"@type": "Question",
								"name": "What is the 21-Day Kickstart program?",
								"acceptedAnswer": {
									"@type": "Answer",
									"text": "Our 21-Day Kickstart is a beginner-friendly program for just $49 that includes unlimited group fitness classes, nutrition guidance, personal coaching support, and access to our family-friendly community. It's designed for people of all fitness levels to experience what 822 Athletics has to offer."
								}
							},
							{
								"@type": "Question",
								"name": "Do I need to be in shape to start?",
								"acceptedAnswer": {
									"@type": "Answer",
									"text": "Absolutely not! 822 Athletics welcomes all fitness levels. Our experienced coaches provide modifications for every movement, ensuring your workout is safe, effective, and tailored to your current fitness level. Most of our members thought the gym wasn't for them until they tried it."
								}
							},
							{
								"@type": "Question",
								"name": "What are your class times?",
								"acceptedAnswer": {
									"@type": "Answer",
									"text": "We offer classes throughout the day Monday-Sunday. Weekday morning classes start at 5:00 AM, with midday options at 12:00 PM and evening classes at 5:15 PM and 6:15 PM. Weekend classes are available Saturday mornings at 8:15 AM and 9:15 AM, and Sunday at 10:00 AM. We also have Open Gym time Monday-Friday at 4:00 PM."
								}
							},
							{
								"@type": "Question",
								"name": "How much does a membership cost?",
								"acceptedAnswer": {
									"@type": "Answer",
									"text": "We offer flexible membership options: 3 classes per week for $125/month, 4 classes per week for $140/month, and unlimited classes for $155/month. We also provide discounts for teachers, first responders, students, spouses (20% off), and those who pre-pay for 6+ months (10% off)."
								}
							},
							{
								"@type": "Question",
								"name": "Is 822 Athletics family-friendly?",
								"acceptedAnswer": {
									"@type": "Answer",
									"text": "Yes! Kids are welcome at 822 Athletics. We understand that life is busy and sometimes you need to bring the whole family. Our community is built around supporting each other, including families with children."
								}
							},
							{
								"@type": "Question",
								"name": "Where is 822 Athletics located in Edmond?",
								"acceptedAnswer": {
									"@type": "Answer",
									"text": "We're located at 14310 N. Lincoln Blvd., Suite 300, Edmond, OK 73013. You can call or text us at (405) 361-3471. We're easy to find and have convenient parking."
								}
							},
							{
								"@type": "Question",
								"name": "Do you offer nutrition guidance?",
								"acceptedAnswer": {
									"@type": "Answer",
									"text": "Yes! All our memberships include nutrition guidance. We provide real food plans designed for real lifestyles - no fads or extreme diets. Our coaches help you develop sustainable eating habits that support your fitness goals."
								}
							},
							{
								"@type": "Question",
								"name": "What makes 822 Athletics different from other gyms?",
								"acceptedAnswer": {
									"@type": "Answer",
									"text": "822 Athletics is more than just a gym - it's a community that feels like family. We offer small group classes where you won't feel judged, rushed, or lost. Our experienced coaches ensure everyone gets personal attention regardless of skill level. Plus, we include nutrition guidance and accountability coaching to help you succeed both in and out of the gym."
								}
							}
						]
					})
				}}
			/>

			{/* BreadcrumbList Schema */}
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						"@context": "https://schema.org",
						"@type": "BreadcrumbList",
						"itemListElement": [
							{
								"@type": "ListItem",
								"position": 1,
								"name": "Home",
								"item": "https://www.822athletics.com"
							}
						]
					})
				}}
			/>
		</>
	);
}
