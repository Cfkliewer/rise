"use client";

import { Koulen } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import Head from "next/head";
import { FC, useEffect, useRef, useState } from "react";
import { Coach } from "./components/coach";
import { Testimonial } from "./components/testimonial";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faCheckCircle,
	faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import colors from "tailwindcss/colors";
import GoogleMap from "google-map-react";
import { ScheduleDay } from "./components/scheduleDay";
import { AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import axios from "axios";
import "dotenv/config";

const koulen = Koulen({ weight: ["400"], subsets: ["latin"] });

//force build

export default function Home() {
	const submitButton = useRef(null);
	const [submitInView, setSubmitInView] = useState(false);
	const days = ["SS", "M", "T", "W", "TH", "F", "S"];
	const [[page, direction], setPage] = useState([new Date().getDay(), 0]);
	const [emailSent, setEmailSent] = useState(false);
	const [firstEmail, setFirstEmail] = useState();
	const [formValues, setFormValues] = useState({
		name: "",
		email: "",
		phone: "",
		goals: "",
	});

	const [error, setError] = useState<string | undefined>();

	const handleChange = (e: any) => {
		if (e.target.id == "phone" || e.target.id == "email") setError("");

		setFormValues((prevState) => {
			return {
				...prevState,
				[e.target.id]: e.target.value,
			};
		});
	};

	const dayIndex = wrap(0, days.length, page);

	const paginate = (newDirection: number) => {
		setPage([page + newDirection, newDirection]);
	};

	const getDayOfWeek = (dayIdx: any) => {
		switch (days[dayIdx]) {
			case "M":
				return "Monday";
			case "T":
				return "Tuesday";
			case "W":
				return "Wednesday";
			case "TH":
				return "Thursday";
			case "F":
				return "Friday";
			case "S":
				return "Saturday";
			case "SS":
				return "Sunday";
		}
	};

	const resetForm = () => {
		setFormValues({
			name: "",
			email: "",
			phone: "",
			goals: "",
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
			url: "api/send-mail",
			data: {
				name: formValues.name,
				email: formValues.email,
				phone: formValues.phone,
				goals: formValues.goals,
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

	const isInView = () => {
		const rect = document.getElementById("submit")?.getBoundingClientRect();

		if (rect) {
			setSubmitInView(rect.top <= window.innerHeight);
			return;
		}

		setSubmitInView(false);
	};

	useEffect(() => {
		document.addEventListener("scroll", (e) => isInView());

		return document.removeEventListener("scroll", (e) => isInView());
	}, []);

	const goToForm = () => {
		//@ts-ignore
		submitButton.current?.scrollIntoView({ behavior: "smooth" });
		document.getElementById("name")?.focus();
	};

	return (
		<body className={`${koulen.className}`}>
			<Head>
				<title>Rise Together - Edmond, Ok</title>
				<meta
					property="og:title"
					content="CrossFit 822 Edmond, Ok - Rise Together"
					key="title"
				/>
			</Head>
			<main
				id="main"
				className={`flex flex-col items-center bg-stone-900 overflow-x-hidden overflow-y-hidden`}
			>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin="anonymous"
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Aboreto&display=swap"
					rel="stylesheet"
				/>
				<div className="relative flex flex-col justify-center items-center bg-stone-900 w-full h-[40vh] md:h-[50vh]">
					<Image
						src="/banner 2.png"
						priority
						alt="rise bootcamp"
						className="hidden 2xl:block opacity-80 absolute top-0 w-full h-[50vh]"
						width={4000}
						height={20}
					/>
					<Image
						src="/banner-md.png"
						priority
						alt="rise bootcamp"
						className="hidden lg:block 2xl:hidden opacity-80 absolute top-0 w-full h-[50vh]"
						width={4000}
						height={20}
					/>
					<Image
						src="/banner-md.png"
						priority
						alt="rise bootcamp"
						className="hidden md:block lg:hidden opacity-80 absolute top-0 w-full h-[50vh]"
						width={4000}
						height={20}
					/>
					<Image
						src="/banner-xxs.png"
						priority
						alt="rise bootcamp"
						className="md:hidden opacity-80 absolute top-0 w-full h-[40vh]"
						width={4000}
						height={20}
					/>
					<div className="h-1/4 absolute top-[75%] w-full bg-gradient-to-t from-stone-900 via-[rgba(28,25,23,.90)] to-transparent"></div>
					<div className="absolute top-4 lg:top-8 2xl:top-16 right-0 lg:right-4 2xl:right-12 w-24 lg:w-48 2xl:w-64 h-16 md:h-24 md:w-36 lg:h-32">
						{" "}
						<Image
							src="/rise-white.png"
							priority
							alt="rise bootcamp"
							layout="fill"
							objectFit="contain"
							className="w-full h-full"
						/>
					</div>
					<h1
						className="text-stone-50 py-8 text-6xl md:text-9xl z-10 pt-40"
						style={{ textShadow: "2px 2px 3px #1C1917" }}
					>
						RISE TOGETHER
					</h1>
					<div className="px-8 md:px-8 2xl:px-36 z-10">
						<button
							id=""
							onClick={() => goToForm()}
							className="bg-[#D83728] shadow-lg rounded-lg w-full h-16 md:h-20 leading-4 text-stone-50 md:text-3xl px-8 text-2xl"
						>{`START MY JOURNEY`}</button>
					</div>
				</div>

				<div className="w-full md:pt-20 px-4 lg:px-24 xl:px-24 2xl:px-36 3xl:px-[30rem] bg-stone-900">
					<button onClick={() => goToForm()}>
						<h1 className="text-[#D83728] text-3xl mt-24 mb-2 lg:px-10">
							SEE OUR SUCCESS
						</h1>
					</button>
					<div className="w-full md:grid sm:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-3 md:gap-2">
						<Testimonial url="/joy.jpg" />
						<div className="flex justify-center items-center p-12">
							<div className="text-stone-50 text-lg md:text-xl xl:text-2xl">
								<p className="text-center">
									The coaches ensure everyone (all skill levels) have a
									successful and enjoyable experience every session. The bonus
									is all of the &quot;strangers&quot; you meet the first few
									days that instantly become your biggest cheerleaders.
								</p>
								<div className="w-full text-right">
									<i>- Kym Manning</i>
								</div>
							</div>
						</div>
						<div className="hidden sm:block 2xl:hidden flex justify-center items-center p-12">
							<div className="text-stone-50 text-lg md:text-xl xl:text-2xl">
								<p className="text-center">
									I initially signed up for a six-week bootcamp to feel a bit
									more confident in the dress I was wearing in my best
									friend&apos;s wedding. I almost didn&apos;t go inside the
									first day but I&apos;m glad I did! The coaches helped push
									towards my goals by supporting and encouraging me in the gym
									AND in life.
								</p>
								<div className="w-full text-right">
									<i>- Lindsay Steele</i>
								</div>
							</div>
						</div>
						<Testimonial url="/drew.jpg" />
						<div className="block sm:hidden 2xl:block flex justify-center items-center p-12">
							<div className="text-stone-50 text-lg md:text-xl xl:text-2xl">
								<p className="text-center">
									I initially signed up for a six-week bootcamp to feel a bit
									more confident in the dress I was wearing in my best
									friend&apos;s wedding. I almost didn&apos;t go inside the
									first day but I&apos;m glad I did! The coaches helped push
									towards my goals by supporting and encouraging me in the gym
									AND in life.
								</p>
								<div className="w-full text-right">
									<i>- Lindsay Steele</i>
								</div>
							</div>
						</div>
						<Testimonial url="/tamika.jpg" />
						<div className="flex justify-center items-center p-12">
							<p className="text-stone-50 text-2xl"></p>
							<div className="text-stone-50 text-lg md:text-xl xl:text-2xl">
								<p className="text-center">
									When I first inquired about Rise, I honestly didn&apos;t think
									I would be able to participate. I have a past medical history
									that includes multiple orthopedic surgeries. However, all of
									the coaches have assisted me with modifications when needed to
									keep my workout safe, pain free and still very effective! In
									fact, I&apos;m now able to do many movements completely pain
									free!
								</p>
								<div className="w-full text-right">
									<i>- Casey Campbell</i>
								</div>
							</div>
						</div>
					</div>
					<hr className="mb-10 mt-10 2xl:mt-32 border-stone-600 md:px-12" />
					<div className="w-full flex flex-col items-center px-4 pb-12 2xl:pb-24 bg-stone-900">
						<div className="text-3xl md:text-5xl text-stone-50 my-8">
							PRICING
						</div>
						<div className="flex relative overflow-hidden flex-row justify-between items-center w-full my-4 px-2 md:px-12 lg:px-24 2xl:px-72 bg-[#D83728] rounded-lg py-8">
							<div className="flex flex-col justify-center">
								<div className="text-stone-50 text-3xl md:text-5xl pl-14 md:pl-0">
									6 WEEK BOOTCAMP
								</div>
								<ul className="text-stone-50 pl-4 md:pl-0 mt-4 text-lg sm:text-2xl md:text-3xl lg:pl-4">
									<li>&#x2022; NUTRITION GUIDANCE & MONITORING</li>
									<li>&#x2022; IN DEPTH EXERCISE EXPLANATIONS</li>
									<li>&#x2022; INTRO TO FUNCTIONAL FITNESS</li>
									<li>&#x2022; GOAL SETTING SEMINARS</li>
								</ul>
							</div>
							<div className="flex flex-col items-center">
								<div className="text-stone-50 text-3xl pr-4 md:text-4xl pb-2">
									$200
								</div>
								<button
									className="bg-amber-300 rounded-lg hidden lg:block px-4 py-2"
									onClick={() => goToForm()}
								>
									Sign up now!
								</button>
							</div>
							<div className="absolute transform -rotate-45 text-md md:text-2xl bg-amber-300 text-center text-stone-900 font-semibold py-1 left-[-4.5em] top-[.5em] w-[200px] md:left-[-3em] md:top-[1em] md:w-[230px]">
								HOT DEAL
							</div>
						</div>
						<div className="flex flex-row justify-between w-full my-2 md:px-12 lg:px-24 2xl:px-72">
							<div className="text-stone-50 text-2xl md:text-3xl">
								3 DAYS/WEEK CROSSFIT
							</div>
							<div className="text-stone-50 text-2xl md:text-3xl">$125/MO</div>
						</div>
						<div className="flex flex-row justify-between w-full my-2 md:px-12 lg:px-24 2xl:px-72">
							<div className="text-stone-50 text-2xl md:text-3xl">
								4 DAYS/WEEK CROSSFIT
							</div>
							<div className="text-stone-50 text-2xl md:text-3xl">$140/MO</div>
						</div>
						<div className="flex flex-row justify-between w-full my-2 md:px-12 lg:px-24 2xl:px-72">
							<div className="text-stone-50 text-2xl md:text-3xl">
								UNLIMITED CROSSFIT
							</div>
							<div className="text-stone-50 text-2xl md:text-3xl">$155/MO</div>
						</div>
					</div>
				</div>

				<div className="w-full flex flex-col items-center pt-10 pb-12 px-4 3xl:px-72 bg-stone-50">
					<div className="text-4xl md:text-5xl text-stone-900 mt-8 mb-24">
						DISCOUNTS
					</div>
					<div className="flex lg:flex-row flex-col w-full mb-12 justify-around 2xl:px-24">
						<div className="flex flex-row justify-between px-12 lg:px-0 lg:justify-end lg:items-center lg:flex-col flex-1">
							<div className="text-stone-900 text-3xl md:text-4xl lg:text-5xl text-stone-900 pb-4">
								TEACHER
							</div>
							<div className="text-3xl md:text-4xl lg:text-5xl text-[#D83728]">
								10%
							</div>
						</div>
						<div className="flex flex-row justify-between px-12 lg:px-0 text-center lg:justify-end lg:items-center lg:flex-col flex-1">
							<div className="text-stone-900 text-3xl md:text-4xl lg:text-5xl text-stone-900 pb-4">
								FIRST RESPONDER
							</div>
							<div className="text-3xl md:text-4xl lg:text-5xl text-[#D83728]">
								10%
							</div>
						</div>
						<div className="flex flex-row justify-between px-12 lg:px-0 lg:justify-end lg:items-center lg:flex-col flex-1">
							<div className="text-stone-900 text-3xl md:text-4xl lg:text-5xl text-stone-900 pb-4">
								STUDENT
							</div>
							<div className="text-3xl md:text-4xl lg:text-5xl text-[#D83728]">
								10%
							</div>
						</div>
						<div className="flex flex-row justify-between px-12 lg:px-0 lg:justify-end lg:items-center lg:flex-col flex-1">
							<div className="text-stone-900 text-3xl md:text-4xl lg:text-5xl text-stone-900 pb-4">
								SPOUSE
							</div>
							<div className="text-3xl md:text-4xl lg:text-5xl text-[#D83728]">
								20%
							</div>
						</div>
						<div className="flex flex-row justify-between px-12 lg:px-0 lg:justify-end lg:items-center lg:flex-col flex-1">
							<div className="text-stone-900 text-3xl md:text-4xl lg:text-5xl text-stone-900 pb-4">
								PRE-PAY{" "}
								<span className="lg:block 2xl:inline-block">(6MO+)</span>
							</div>
							<div className="text-3xl md:text-4xl lg:text-5xl text-[#D83728]">
								10%
							</div>
						</div>
					</div>
				</div>
				<div className="w-full flex flex-col items-center pt-10 pb-24 px-4 3xl:px-72 bg-[#D83728]">
					<div className="text-4xl md:text-5xl text-stone-900 mt-8 mb-24">
						SCHEDULE
					</div>
					<div className="grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 w-full">
						<div className="flex flex-col items-center">
							<div className="flex flex-row items-center justify-center">
								<button
									className="text-5xl text-stone-900"
									onClick={() => paginate(-1)}
								>
									&lt;
								</button>
								<h1 className="text-3xl 2xl:text-5xl pb-4 pt-4 px-8 text-stone-900">
									{getDayOfWeek(dayIndex)}
								</h1>
								<button
									className="text-5xl text-stone-900"
									onClick={() => paginate(1)}
								>
									&gt;
								</button>
							</div>
							<div className="w-full relative overflow-x-hidden">
								<AnimatePresence initial={false} custom={direction}>
									<ScheduleDay day={days[dayIndex] as any} custom={direction} />
								</AnimatePresence>
							</div>
						</div>
						<div className="w-full h-full flex justify-center items-center">
							<div className="flex flex-col h-2/3 items-center bg-amber-300 rounded-lg w-full">
								<h1 className="text-3xl 2xl:text-5xl pb-4 pt-8 text-stone-900">
									Bootcamp
								</h1>
								<div className="text-2xl 2xl:text-3xl py-2 text-stone-900">
									9:15am - Saturday
								</div>
								<div className="text-2xl 2xl:text-3xl py-2 text-stone-900">
									6:15pm - Tuesday & Thursday
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="w-full pt-10 flex flex-col items-center px-0 md:px-24 3xl:px-72 bg-stone-900">
					<div className="text-4xl md:text-5xl text-stone-50 md:my-8 md:mb-12 3xl:mb-36">
						COACHES
					</div>
					<div className="grid grid-rows-4 w-full md:grid-rows-2 md:grid-cols-2 gap-4 md:gap-24 ">
						<Coach
							coach="JENAE JUDGE"
							url="/jenae.jpg"
							text={[
								"Owner/Head Coach",
								"CrossFit Level 2 Trainer",
								"Nutrition 1 Certificate",
								"Gymnastics Certificate",
							]}
							classes={"bg-[#1c1917]"}
							textClasses={"text-[#D83728]"}
						/>
						<Coach
							coach="AMY POWERS"
							url="/amy.jpg"
							text={["CrossFit Level 1 Trainer", "Gymnastics Certificate"]}
							classes={"bg-[#D83728]"}
							textClasses={"text-[#1c1917]"}
						/>
						<Coach
							coach="MICHELLE SABEDRA"
							url="/michelle.jpg"
							text={[
								"CrossFit Level 1 Trainer",
								"Weightlifting Certificate",
								"Running Certificate",
							]}
							classes={"bg-[#1c1917] md:bg-[#D83728]"}
							textClasses={"text-[#D83728] md:text-[#1c1917]"}
						/>
						<Coach
							coach="ANDREW EYEMAN"
							url="/andrew.jpg"
							text={["CrossFit Level 1 Trainer"]}
							classes={"bg-[#D83728] md:bg-[#1c1917]"}
							textClasses={"text-[#1c1917] md:text-[#D83728]"}
						/>
					</div>
				</div>
				<hr className="my-10 border-stone-50" />
				<div className="my-8 w-full md:px-24 bg-stone-900">
					<div className="w-full flex justify-center">
						<h2 className="text-[#D83728] pt-8 text-4xl md:text-5xl lg:mb-12">
							DISCOVER YOUR BEST YOU
						</h2>
					</div>
					<div className="grid grid-cols-1 grid-rows-2 lg:grid-rows-1 lg:grid-cols-2">
						<div className="h-full flex flex-col justify-center px-4">
							<div className="text-stone-50 flex flex-col justify-center items-center">
								<div className="text-2xl 2xl:text-4xl">
									Call or text us at:{" "}
									<a href="tel:4053613471">
										<span className="underline">(405) 361-3471</span>
									</a>
								</div>
								<div className="text-2xl 2xl:text-4xl my-4">Or drop in</div>
							</div>
							<div className="h-1/2 rounded-xl">
								<GoogleMap
									bootstrapURLKeys={{
										key: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY ?? "",
									}}
									defaultCenter={{
										lat: 35.61621044432252,
										lng: -97.50262312007501,
									}}
									defaultZoom={13}
								>
									<LocationPin
										address={"14310 N Lincoln Blvd Ste 300, Edmond, OK 73013"}
										lat={"35.61621044432252"}
										lng={"-97.50262312007501"}
									/>
								</GoogleMap>
							</div>
						</div>
						<div className="w-full">
							<form onSubmit={sendEmail}>
								<div className="flex flex-col my-4 mx-8 2xl:mb-8">
									<label className="text-stone-300 pl-2 text-2xl mb-2">
										NAME
									</label>
									<input
										id="name"
										onChange={handleChange}
										value={formValues.name}
										className="w-full h-10 rounded-lg pl-4 text-stone-800 focus:outline-4 outline-[#D83728]"
									/>
								</div>
								<div className="flex flex-col my-4 mx-8 2xl:mb-8">
									<label className="text-stone-300 pl-2 text-2xl mb-2">
										EMAIL
									</label>
									<input
										id="email"
										onChange={handleChange}
										value={formValues.email}
										className="w-full h-10 rounded-lg pl-4 text-stone-800 focus:outline-4 outline-[#D83728]"
									/>
								</div>
								<div className="flex flex-col my-4 mx-8 2xl:mb-8">
									<label className="text-stone-300 pl-2 text-2xl mb-2">
										PHONE
									</label>
									<input
										id="phone"
										onChange={handleChange}
										value={formValues.phone}
										className="w-full h-10 rounded-lg pl-4 text-stone-800 focus:outline-4 outline-[#D83728]"
									/>
								</div>
								<div className="flex flex-col my-4 mx-8 2xl:mb-8">
									<label className="text-stone-300 pl-2 text-2xl mb-2">
										GOALS
									</label>
									<textarea
										id="goals"
										onChange={handleChange}
										value={formValues.goals}
										className="w-full h-16 md:h-32 rounded-lg pl-4 pt-2 text-stone-800 focus:outline-4 outline-[#D83728]"
									/>
								</div>
								{!error ? (
									<></>
								) : (
									<p className="text-red-500 ml-8 text-2xl">{error}</p>
								)}
								<div className="px-8 md:px-8 ">
									<button
										ref={submitButton}
										type="submit"
										id="submit"
										className="bg-[#D83728] shadow-lg rounded-lg mt-4 w-full h-12 leading-4 text-stone-50 text-2xl md:text-3xl"
									>
										START MY JOURNEY
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
				{!submitInView ? (
					<button
						className="fixed bg-[#D83728] shadow-lg rounded-lg px-2 w-24 h-12 bottom-12 right-8 leading-4 text-stone-50 md:w-40 md:h-20 md:text-2xl"
						onClick={goToForm}
					>
						START MY JOURNEY
					</button>
				) : (
					<></>
				)}
				{emailSent ? (
					<div className="fixed bg-stone-200 shadow-lg rounded-lg p-4 w-96 h-32 md:w-96 md:h-48 bottom-12 right-8 leading-4 text-stone-800 flex flex-row justify-center items-center">
						<div>
							<FontAwesomeIcon icon={faCheckCircle} color="#22c55e" size="3x" />
						</div>
						<div className="flex flex-col text-xl xl:text-2xl ml-4">
							<div className="mb-2">Your email has been sent!</div>
							<div>A coach will reach out to you shortly!</div>
						</div>
					</div>
				) : (
					<></>
				)}
			</main>
			<Analytics />
		</body>
	);
}

interface Props {
	address: any;
	lat: any;
	lng: any;
}

const LocationPin: FC<Props> = ({ address, lat, lng }) => {
	return (
		<div className="h-32 w-64 z-50">
			<FontAwesomeIcon size="3x" color={colors.red[700]} icon={faLocationDot} />
			<div className="text-slate-800 w-32 bg-white -top-14 -left-12 absolute text-center p-1 rounded-md shadow-md">
				<a
					target="_blank"
					href="https://www.google.com/maps/place/1616+S+Kelly+Ave,+Edmond,+OK+73013/@35.6368693,-97.4973895,17z/data=!3m1!4b1!4m5!3m4!1s0x87b21ef64baf20a3:0x7b7a78523755bb95!8m2!3d35.636865!4d-97.4952008
				"
				>
					<div className="font-semibold">Rise Bootcamp</div>
					<div>{address}</div>
				</a>
			</div>
		</div>
	);
};
