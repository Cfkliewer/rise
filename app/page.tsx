"use client";
import { useEffect, useRef, useState } from "react";
import { Coach } from "./components/coach";
import { Testimonial } from "./components/testimonial";
import Image from 'next/image';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import colors from 'tailwindcss/colors'
import GoogleMap from 'google-map-react'
import Script from "next/script";
import { ScheduleDay } from "./components/scheduleDay";
import {isMobile} from 'react-device-detect'

export default function Home() {
	const submitButton = useRef(null);
	const [submitInView, setSubmitInView] = useState(false)

	const isInView = () => {
		const rect = document.getElementById("submit")?.getBoundingClientRect();	

		if(rect) 
		{
			setSubmitInView(
					rect.top <= window.innerHeight
			);
			return;
		}

		setSubmitInView(false);
	}

	useEffect(() => {
		document.addEventListener("scroll", (e) => isInView())	

		return document.removeEventListener("scroll", (e) => isInView())
	}, []);

	const goToForm = () => {
		//@ts-ignore
		submitButton.current?.scrollIntoView({behavior: 'smooth'});
	}

  return (
    <main id="main" className={`flex min-h-screen flex-col items-center bg-stone-900 overflow-y-hidden w-screen`}>
			<meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
			<link rel="preconnect" href="https://fonts.googleapis.com"/>
			<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="crossorigin" />
			<link href="https://fonts.googleapis.com/css2?family=Aboreto&display=swap" rel="stylesheet"/>

			{/*<Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-P3D2KXSG92"></Script>
			<Script id="google-analytics"
						strategy="afterInteractive"
						dangerouslySetInnerHTML={{
						__html:`
								window.dataLayer = window.dataLayer || [];
								function gtag(){dataLayer.push(arguments);}
								gtag('js', new Date());
								gtag('config', 'G-P3D2KXSG92', {
									page_path: window.location.pathname,
								});
								`,
								}}/>*/}
			
			<div className='relative flex flex-col justify-center items-center bg-stone-900 w-full h-[50vh]'>
				<Image src="/banner 2.png" priority alt="rise bootcamp" className="hidden 2xl:block opacity-80 absolute top-0 w-full h-[50vh]" width={4000} height={20}/>
				<Image src="/banner-md.png" priority alt="rise bootcamp" className="hidden lg:block 2xl:hidden opacity-80 absolute top-0 w-full h-[50vh]" width={4000} height={20}/>
				<Image src="/banner-md.png" priority alt="rise bootcamp" className="hidden md:block lg:hidden opacity-80 absolute top-0 w-full h-[50vh]" width={4000} height={20}/>
				<Image src="/banner-xxs.png" priority alt="rise bootcamp" className="md:hidden opacity-80 absolute top-0 w-full h-[50vh]" width={4000} height={20}/>
				<div className="h-1/4 absolute top-[75%] w-full bg-gradient-to-t from-stone-900 via-[rgba(28,25,23,.90)] to-transparent">
				</div>
				<div className="absolute top-4 lg:top-8 2xl:top-16 right-0 lg:right-4 2xl:right-12 w-24 lg:w-48 2xl:w-64 h-16 md:h-24 md:w-36 lg:h-32">
					<Image src="/rise-white.png" priority alt="rise bootcamp" layout="fill" objectFit="contain" className="w-full h-full"/>
				</div>
				<h2 className='text-stone-50 py-8 text-6xl md:text-9xl z-10 pt-40' style={{textShadow: '2px 2px 3px #1C1917'}}>RISE TOGETHER</h2>
				<div className="px-8 md:px-8 2xl:px-36 z-10">
					<button id="" className="bg-[#D83728] shadow-lg rounded-lg mt-4 w-full h-12 leading-4 text-stone-50 md:text-3xl px-8">SEE OUR SUCCESS &gt;</button>
				</div>
			</div>
			
			<div className="w-full md:pt-20 px-4 lg:px-24 xl:px-24 2xl:px-36 3xl:px-[30rem] bg-stone-900" onScroll={() => console.log("scrolling main")}>
				<h1 className="text-[#D83728] text-3xl mt-24 mb-2 lg:px-10">SUCCESS STORIES</h1>
				<div className="w-full md:grid sm:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-3 md:gap-2">
					<Testimonial 
						url="/joy.jpg"
					/>			
					<div className="flex justify-center items-center p-12">
						<div className="text-stone-50 text-lg md:text-xl xl:text-2xl"><p className="text-center">The coaches ensure everyone (all skill levels) have a successful and enjoyable experience every session. The bonus is all of the "strangers" you meet the first few days that instantly become your biggest cheerleaders.</p><div className="w-full text-right"><i>- Kym Manning</i></div></div>
					</div>
					<div className="hidden sm:block 2xl:hidden flex justify-center items-center p-12">
						<div className="text-stone-50 text-lg md:text-xl xl:text-2xl"><p className="text-center">I initially signed up for a six-week bootcamp to feel a bit more confident in the dress I was wearing in my best friend's wedding. I almost didn't go inside the first day but I'm glad I did! The coaches helped push towards my goals by supporting and encouraging me in the gym AND in life.</p><div className="w-full text-right"><i>- Lindsay Steele</i></div></div>
					</div>
					<Testimonial 
						url="/drew.jpg"
					/>			
					<div className="block sm:hidden 2xl:block flex justify-center items-center p-12">
						<div className="text-stone-50 text-lg md:text-xl xl:text-2xl"><p className="text-center">I initially signed up for a six-week bootcamp to feel a bit more confident in the dress I was wearing in my best friend's wedding. I almost didn't go inside the first day but I'm glad I did! The coaches helped push towards my goals by supporting and encouraging me in the gym AND in life.</p><div className="w-full text-right"><i>- Lindsay Steele</i></div></div>
					</div>
					<Testimonial 
						url="/tamika.jpg"
					/>			
					<div className="flex justify-center items-center p-12">
						<p className="text-stone-50 text-2xl"></p>
						<div className="text-stone-50 text-lg md:text-xl xl:text-2xl"><p className="text-center">When I first inquired about Rise, I honestly didn't think I would be able to participate. I have a past medical history that includes multiple orthopedic surgeries. However, all of the coaches have assisted me with modifications when needed to keep my workout safe, pain free and still very effective! In fact, I'm now able to do many movements completely pain free!</p><div className="w-full text-right"><i>- Casey Campbell</i></div></div>
					</div>
				</div>
				<hr className="mb-10 mt-10 2xl:mt-32 border-stone-600 md:px-12"/>
				<div className="w-full flex flex-col items-center px-4 pb-12 2xl:pb-24 bg-stone-900">
					<div className="text-3xl md:text-5xl text-stone-50 my-8">PRICING</div>	
					<div className="flex relative overflow-hidden flex-row justify-between items-center w-full my-4 px-2 md:px-12 lg:px-24 2xl:px-72 bg-[#D83728] rounded-lg py-8">
						<div className="flex flex-col justify-center">
							<div className="text-stone-50 text-3xl md:text-5xl pl-14 md:pl-0">6 WEEK BOOTCAMP</div>
							<ul className="text-stone-50 pl-4 md:pl-0 mt-4 text-lg sm:text-2xl md:text-3xl lg:pl-4">
								<li>&#x2022; NUTRITION GUIDANCE & MONITORING</li>
								<li>&#x2022; IN DEPTH EXERCISE EXPLANATIONS</li>
								<li>&#x2022; INTRO TO FUNCTIONAL FITNESS</li>
								<li>&#x2022; GOAL SETTING SEMINARS</li>
							</ul>
						</div>
						<div className="flex flex-col items-center">
							<div className="text-stone-50 text-3xl pr-4 md:text-4xl pb-2">$200</div>
							<button className="bg-amber-300 rounded-lg hidden lg:block px-4 py-2">Sign up now!</button>
						</div>
						<div
							className="absolute transform -rotate-45 text-md md:text-2xl bg-amber-300 text-center text-stone-900 font-semibold py-1 left-[-4.5em] top-[.5em] w-[200px] md:left-[-3em] md:top-[1em] md:w-[230px]">
								HOT DEAL
						</div>
					</div>
					<div className="flex flex-row justify-between w-full my-2 md:px-12 lg:px-24 2xl:px-72">
						<div className="text-stone-50 text-2xl md:text-3xl">2 DAYS/WEEK CROSSFIT</div>
						<div className="text-stone-50 text-2xl md:text-3xl">$105/MO</div>
					</div>
					<div className="flex flex-row justify-between w-full my-2 md:px-12 lg:px-24 2xl:px-72">
						<div className="text-stone-50 text-2xl md:text-3xl">3 DAYS/WEEK CROSSFIT</div>
						<div className="text-stone-50 text-2xl md:text-3xl">$135/MO</div>
					</div>
					<div className="flex flex-row justify-between w-full my-2 md:px-12 lg:px-24 2xl:px-72">
						<div className="text-stone-50 text-2xl md:text-3xl">UNLIMITED CROSSFIT</div>
						<div className="text-stone-50 text-2xl md:text-3xl">$165/MO</div>
					</div>
				</div>
				</div>

				<div className="w-full flex flex-col items-center pt-10 pb-12 px-4 2xl:px-72 bg-stone-50">
					<div className="text-4xl md:text-5xl text-stone-900 mt-8 mb-24">DISCOUNTS</div>	
					<div className="flex lg:flex-row flex-col w-full mb-12 justify-around 2xl:px-24">
							<div className="flex flex-row justify-between px-12 lg:px-0 lg:justify-end lg:items-center lg:flex-col flex-1">
								<div className="text-stone-900 text-3xl md:text-4xl lg:text-5xl text-stone-900 pb-4">TEACHER</div>
								<div className="text-3xl md:text-4xl lg:text-5xl text-[#D83728]">10%</div>
							</div>
							<div className="flex flex-row justify-between px-12 lg:px-0 text-center lg:justify-end lg:items-center lg:flex-col flex-1">
								<div className="text-stone-900 text-3xl md:text-4xl lg:text-5xl text-stone-900 pb-4">FIRST RESPONDER</div>
								<div className="text-3xl md:text-4xl lg:text-5xl text-[#D83728]">20%</div>
							</div>
							<div className="flex flex-row justify-between px-12 lg:px-0 lg:justify-end lg:items-center lg:flex-col flex-1">
								<div className="text-stone-900 text-3xl md:text-4xl lg:text-5xl text-stone-900 pb-4">STUDENT</div>
								<div className="text-3xl md:text-4xl lg:text-5xl text-[#D83728]">30%</div>
							</div>
							<div className="flex flex-row justify-between px-12 lg:px-0 lg:justify-end lg:items-center lg:flex-col flex-1">
								<div className="text-stone-900 text-3xl md:text-4xl lg:text-5xl text-stone-900 pb-4">PRE PAY <span className="lg:block 2xl:inline-block">(6MO+)</span></div>
								<div className="text-3xl md:text-4xl lg:text-5xl text-[#D83728]">10%</div>
							</div>
					</div>
				</div>
				<div className="w-full flex flex-col items-center pt-10 pb-24 px-4 2xl:px-72 bg-[#D83728]">
					<div className="text-4xl md:text-5xl text-stone-900 mt-8 mb-24">SCHEDULE</div>	
					<div className="grid grid-cols-7 w-full">
						<ScheduleDay day="SS" />
						<ScheduleDay day="M" />
						<ScheduleDay day="T" />
						<ScheduleDay day="W" />
						<ScheduleDay day="TH" />
						<ScheduleDay day="F" />
						<ScheduleDay day="S"/>
					</div>
				</div>
				<div className="w-full pt-10 flex flex-col items-center md:px-24 3xl:px-72 bg-stone-900">
					<div className="text-4xl md:text-5xl text-stone-50 md:my-8 md:mb-12 3xl:mb-36">COACHES</div>	
					<div className="grid grid-rows-4 md:grid-rows-2 md:grid-cols-2 gap-4 md:gap-24 ">
						<Coach
							coach="JENAE JUDGE (OWNER)"
							url="/jenae.jpg"
							text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
						/>
						<Coach
							coach="AMY POWERS"
							url="/amy.jpg"
							text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
							red
						/>
						<Coach
							coach="MICHELLE SABEDRA"
							url="/michelle.jpg"
							text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
							red={!isMobile}
						/>
						<Coach
							coach="ANDREW EYEMAN"
							url="/andrew.jpg"
							text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
							red={isMobile}
						/>
					</div>
				</div>
				<hr className="my-10 border-stone-50"/>
				<div className="my-8 w-full md:px-24 bg-stone-900">
					<div className="w-full flex justify-center">
						<h2 className='text-[#D83728] pt-8 text-4xl md:text-5xl lg:mb-12'>DISCOVER YOUR BEST YOU</h2>
					</div>
					<div className="grid grid-cols-1 grid-rows-2 lg:grid-rows-1 lg:grid-cols-2">
						<div className="h-full flex flex-col justify-center px-4">
						<div className="text-stone-50 flex flex-col justify-center items-center">
							<div className="text-2xl 2xl:text-4xl">Call or text us at: <a href="tel:4053613471"><span className="underline">(405) 361-3471</span></a></div>
							<div className="text-2xl 2xl:text-4xl my-4">Or drop in</div>
						</div>
						<div className="h-1/2 rounded-xl">
							<GoogleMap
								bootstrapURLKeys={{key: "AIzaSyBfBZ3qttDM0QJ-s1Jt02sN6_oIjEzeFzA"}}
								defaultCenter={{lat: 35.61621044432252, lng: -97.50262312007501}}
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
							<div className="flex flex-col my-4 mx-8 2xl:mb-8">
								<label className="text-stone-300 pl-2 text-2xl mb-2">NAME</label>
								<input className="w-full h-10 rounded-lg" />
							</div>
							<div className="flex flex-col my-4 mx-8 2xl:mb-8">
								<label className="text-stone-300 pl-2 text-2xl mb-2">EMAIL</label>
								<input className="w-full h-10 rounded-lg" />
							</div>
							<div className="flex flex-col my-4 mx-8 2xl:mb-8">
								<label className="text-stone-300 pl-2 text-2xl mb-2">PHONE</label>
								<input className="w-full h-10 rounded-lg" />
							</div>
							<div className="flex flex-col my-4 mx-8 2xl:mb-8">
								<label className="text-stone-300 pl-2 text-2xl mb-2">GOALS</label>
								<input multiple className="w-full h-16 md:h-32 rounded-lg" />
							</div>
							<div className="px-8 md:px-8 ">
								<button ref={submitButton} id="submit" className="bg-[#D83728] shadow-lg rounded-lg mt-4 w-full h-12 leading-4 text-stone-50 md:text-3xl">START YOUR JOURNEY</button>
							</div>
						</div>
					</div>
				</div>
			{!submitInView ? 
			<button className="fixed bg-[#D83728] shadow-lg rounded-lg w-24 h-12 bottom-12 right-8 leading-4 text-stone-50 md:w-40 md:h-20 md:text-2xl" onClick={goToForm}>START YOUR JOURNEY</button>
			: <></>}
    </main>
  )
}


const LocationPin: FC<Props> = ({address, lat, lng}) => {
	return (
		<div className="h-32 w-64 z-50">
			<FontAwesomeIcon size="3x" color={colors.red[700]} icon={faLocationDot}/>
			<div className="text-slate-800 w-32 bg-white -top-14 -left-12 absolute text-center p-1 rounded-md shadow-md">
				<a target="_blank" href="https://www.google.com/maps/place/1616+S+Kelly+Ave,+Edmond,+OK+73013/@35.6368693,-97.4973895,17z/data=!3m1!4b1!4m5!3m4!1s0x87b21ef64baf20a3:0x7b7a78523755bb95!8m2!3d35.636865!4d-97.4952008
				">
					<div className="font-semibold">Rise Bootcamp</div>
					<div>{address}</div>
				</a>
			</div>
		</div>
	);
}
