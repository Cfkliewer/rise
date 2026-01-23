"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faPhone, faMessage } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import Link from "next/link";

export default function FreeTrial() {
	const [formValues, setFormValues] = useState({
		name: "",
		email: "",
		phone: "",
	});
	const [error, setError] = useState<string | undefined>();
	const [emailSent, setEmailSent] = useState(false);

	useEffect(() => {
		// Fire confetti when page loads
		const fireConfetti = async () => {
			try {
				if (typeof window === 'undefined') return;

				const confetti = (await import('canvas-confetti')).default;

				// Fire confetti bursts from both sides
				confetti({
					particleCount: 100,
					spread: 70,
					origin: { x: 0.2, y: 0.6 },
					colors: ['#D83728', '#FFC107', '#FFD700'],
					zIndex: 100001
				});

				confetti({
					particleCount: 100,
					spread: 70,
					origin: { x: 0.8, y: 0.6 },
					colors: ['#D83728', '#FFC107', '#FFD700'],
					zIndex: 100001
				});
			} catch (error) {
				console.error('Confetti error:', error);
			}
		};

		fireConfetti();
	}, []);

	const handleChange = (e: any) => {
		setError("");
		setFormValues((prevState) => ({
			...prevState,
			[e.target.id]: e.target.value,
		}));
	};

	const resetForm = () => {
		setFormValues({
			name: "",
			email: "",
			phone: "",
		});
	};

	const sendEmail = async (e: any) => {
		e.preventDefault();

		if (!formValues.email && !formValues.phone) {
			setError("Email or phone is required");
			return;
		}

		await axios({
			method: "post",
			url: "/api/send-mail",
			data: {
				name: formValues.name,
				email: formValues.email,
				phone: formValues.phone,
				goals: "Kickstart - 21 Day Kickstart Challenge",
			},
		})
			.then(() => {
				setEmailSent(true);
				resetForm();
				setTimeout(() => setEmailSent(false), 5000);
			})
			.catch(() => {
				setEmailSent(true);
				resetForm();
				setTimeout(() => setEmailSent(false), 5000);
			});
	};

	return (
		<main className="flex flex-col items-center bg-stone-900 min-h-screen">
				{/* Header */}
				<div className="relative flex flex-col justify-center items-center bg-stone-900 w-full h-[20vh] md:h-[25vh]">
					<Image
						src="/banner-md.png"
						priority
						alt="rise bootcamp"
						className="opacity-60 absolute top-0 w-full h-full object-cover"
						width={4000}
						height={20}
					/>
					<div className="h-1/4 absolute top-[75%] w-full bg-gradient-to-t from-stone-900 via-[rgba(28,25,23,.90)] to-transparent"></div>
					<div className="absolute top-4 lg:top-8 right-4 lg:right-12 w-24 lg:w-48 h-16 lg:h-32">
						<Link href="/">
							<Image
								src="/rise-white.png"
								priority
								alt="rise bootcamp"
								layout="fill"
								objectFit="contain"
								className="w-full h-full cursor-pointer"
							/>
						</Link>
					</div>
				</div>

				{/* Content Section */}
				<div className="w-full px-4 md:px-8 lg:px-24 xl:px-36 2xl:px-72 pt-12 pb-24 bg-stone-900">
					<div className="bg-stone-50 rounded-xl p-8 md:p-12 lg:p-16 max-w-4xl mx-auto">
						<h1 className="text-3xl md:text-5xl lg:text-6xl text-stone-900 text-center mb-4 font-bold">
							START YOUR 21 DAY KICKSTART
						</h1>
						<div className="flex justify-center mb-8">
							<div className="relative py-4 px-8">
								<div className="absolute inset-0 bg-gradient-to-r from-[#FFD700] to-[#FFC107] rounded-lg animate-pulse shadow-lg"></div>
								<p className="relative text-3xl md:text-5xl font-bold text-center text-stone-900">Only $49!</p>
							</div>
						</div>

						<h2 className="text-3xl md:text-5xl text-stone-900 text-center mb-6">
							Looking for a gym in Edmond where you don't feel judged, rushed, or lost?
						</h2>

						<p className="text-lg md:text-xl text-stone-900 mb-6 text-center">
							We're a family-friendly group fitness gym built for real life—busy parents,
							working adults, and anyone who wants strength, accountability, and support.
						</p>

						<div className="grid md:grid-cols-2 gap-6 mb-8">
							<div className="space-y-3">
								<div className="flex items-start">
									<FontAwesomeIcon
										icon={faCheckCircle}
										className="text-[#D83728] text-xl mr-3 mt-1 w-5 h-5 flex-shrink-0"
									/>
									<span className="text-lg md:text-xl text-stone-900">
										Small group classes
									</span>
								</div>
								<div className="flex items-start">
									<FontAwesomeIcon
										icon={faCheckCircle}
										className="text-[#D83728] text-xl mr-3 mt-1 w-5 h-5 flex-shrink-0"
									/>
									<span className="text-lg md:text-xl text-stone-900">
										Nutrition guidance
									</span>
								</div>
								<div className="flex items-start">
									<FontAwesomeIcon
										icon={faCheckCircle}
										className="text-[#D83728] text-xl mr-3 mt-1 w-5 h-5 flex-shrink-0"
									/>
									<span className="text-lg md:text-xl text-stone-900">
										Accountability & coaching
									</span>
								</div>
							</div>
							<div className="space-y-3">
								<div className="flex items-start">
									<FontAwesomeIcon
										icon={faCheckCircle}
										className="text-[#D83728] text-xl mr-3 mt-1 w-5 h-5 flex-shrink-0"
									/>
									<span className="text-lg md:text-xl text-stone-900">
										Kids welcome
									</span>
								</div>
								<div className="flex items-start">
									<FontAwesomeIcon
										icon={faCheckCircle}
										className="text-[#D83728] text-xl mr-3 mt-1 w-5 h-5 flex-shrink-0"
									/>
									<span className="text-lg md:text-xl text-stone-900">
										A community that feels like family
									</span>
								</div>
							</div>
						</div>

						<p className="text-xl md:text-2xl text-stone-900 text-center italic mb-8 font-semibold">
							Most of our members are people who thought the gym "wasn't for them"… until it was. 💙
						</p>

						{/* Contact Options */}
						<div className="bg-[#D83728] rounded-lg p-6 md:p-8 mb-8">
							<h3 className="text-2xl md:text-3xl text-stone-50 text-center mb-6">
								Ready to get started?
							</h3>
							<div className="flex flex-col sm:flex-row gap-4 justify-center">
								<a
									href="tel:4053613471"
									className="bg-stone-50 text-[#D83728] py-4 px-8 rounded-lg hover:bg-stone-100 transition-colors flex items-center justify-center gap-3 text-xl font-semibold"
								>
									<FontAwesomeIcon icon={faPhone} className="w-5 h-5 flex-shrink-0" />
									<span>Call Us</span>
								</a>
								<a
									href="sms:4053613471"
									className="bg-stone-50 text-[#D83728] py-4 px-8 rounded-lg hover:bg-stone-100 transition-colors flex items-center justify-center gap-3 text-xl font-semibold"
								>
									<FontAwesomeIcon icon={faMessage} className="w-5 h-5 flex-shrink-0" />
									<span>Text Us</span>
								</a>
							</div>
							<p className="text-stone-50 text-center mt-4 text-lg">
								📱 405-361-3471
							</p>
						</div>

						{/* Form */}
						<div className="border-t-2 border-stone-300 pt-8">
							<form onSubmit={sendEmail} className="space-y-4 max-w-md mx-auto">
								<div>
									<label className="text-stone-900 text-xl mb-2 block">
										NAME
									</label>
									<input
										id="name"
										type="text"
										onChange={handleChange}
										value={formValues.name}
										placeholder="Your name"
										className="w-full h-12 rounded-lg border-2 border-stone-300 px-4 text-stone-800 text-lg focus:outline-none focus:border-[#D83728]"
									/>
								</div>
								<div>
									<label className="text-stone-900 text-xl mb-2 block">
										EMAIL (Optional)
									</label>
									<input
										id="email"
										type="email"
										onChange={handleChange}
										value={formValues.email}
										placeholder="your@email.com"
										className="w-full h-12 rounded-lg border-2 border-stone-300 px-4 text-stone-800 text-lg focus:outline-none focus:border-[#D83728]"
									/>
								</div>
								<div>
									<label className="text-stone-900 text-xl mb-2 block">
										PHONE (Optional)
									</label>
									<input
										id="phone"
										type="tel"
										onChange={handleChange}
										value={formValues.phone}
										placeholder="(555) 123-4567"
										className="w-full h-12 rounded-lg border-2 border-stone-300 px-4 text-stone-800 text-lg focus:outline-none focus:border-[#D83728]"
									/>
								</div>
								{error && <p className="text-red-500 text-lg text-center">{error}</p>}
								<button
									type="submit"
									className="w-full bg-[#D83728] py-4 rounded-lg hover:bg-[#c42f20] transition-colors text-2xl text-stone-50 font-semibold"
								>
									JOIN THE KICKSTART
								</button>
							</form>
						</div>

						<p className="text-stone-600 text-center mt-8">
							<Link href="/" className="underline hover:text-[#D83728]">
								← Back to Home
							</Link>
						</p>
					</div>
				</div>

				{/* Success Message */}
				{emailSent && (
					<div className="fixed bg-stone-200 shadow-lg rounded-lg p-4 w-96 h-32 md:h-48 bottom-12 right-8 flex flex-row justify-center items-center z-50">
						<div>
							<FontAwesomeIcon icon={faCheckCircle} color="#22c55e" className="w-12 h-12" />
						</div>
						<div className="flex flex-col text-xl xl:text-2xl ml-4 text-stone-800">
							<div className="mb-2">Your email has been sent!</div>
							<div>A coach will reach out to you shortly!</div>
						</div>
					</div>
				)}
		</main>
	);
}
