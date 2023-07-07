"use client";
import { useEffect, useRef, useState } from "react";
import { Coach } from "./components/coach";
import { Testimonial } from "./components/testimonial";
import Image from 'next/image';

export default function Home() {
	const submitButton = useRef(null);
	const [submitInView, setSubmitInView] = useState(false)

	const isInView = () => {
			console.log("checking in view")
		const rect = document.getElementById("submit")?.getBoundingClientRect();	
			console.log("checking in view")

		if(rect) 
		{
			console.log("checking in view")
			setSubmitInView(
					rect.top >= 0 &&
					rect.left >= 0 &&
					rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
					rect.right <= (window.innerWidth || document.documentElement.clientWidth)
			);
		}

		return setSubmitInView(false);
	}

	useEffect(() => {
		const handleScroll = () => {
			console.log("handlin scroll")
		}
	console.log("Adding event")
		document.body.addEventListener("scroll", handleScroll, true)	

		return document.body.removeEventListener("scroll", handleScroll, true)
	}, []);

	const goToForm = () => {
		//@ts-ignore
		submitButton.current?.scrollIntoView({behavior: 'smooth'});
	}

  return (
    <main onScroll={() => console.log("scrolling main")} id="main" className={`flex min-h-screen flex-col items-center bg-stone-900`}>
			<div className='flex flex-col justify-center items-center bg-stone-900 w-full'>
				<div className='text-4xl text-stone-50 pt-20 md:text-7xl z-10'>RISE</div>
				<div className='text-4xl text-stone-50 md:text-7xl z-10'>BOOTCAMP</div>
				<h2 className='text-[#D83728] py-8 text-2xl md:text-5xl z-10'>WE RISE TOGETHER</h2>
				<Image src="/rise-logo.png" alt="rise bootcamp" className="absolute top-8 left-[50%] -translate-x-[50%]" width={300} height={250}/>
			</div>
			
			<div className="w-full md:pt-20 lg:px-36 xl:px-36 2xl:px-72 3xl:px-[30rem] bg-stone-900" onScroll={() => console.log("scrolling main")}>
				<div className="w-full md:flex md:flex-row md:justify-between md:flex-wrap px-8 my-24">
					<Testimonial 
						url="/joy.jpg"
						testimonial="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
					/>			
					<Testimonial 
						url="/drew.jpg"
						testimonial="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
					/>			
					<Testimonial 
						url="/idk.jpg"
						testimonial="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
					/>			
					<Testimonial 
						url="/tamika.jpg"
						testimonial="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
					/>			
				</div>
				<hr className="mb-10 mt-10 2xl:mt-32 border-stone-600 md:px-12"/>
				<div className="w-full flex flex-col items-center px-4 pb-12 2xl:pb-24 bg-stone-900">
					<div className="text-3xl md:text-5xl text-stone-50 my-8">PRICING</div>	
					<div className="flex relative overflow-hidden flex-row justify-between items-center w-full my-4 px-2 md:px-12 lg:px-24 2xl:px-72 bg-[#D83728] rounded-lg py-8">
						<div className="flex flex-col justify-center">
							<div className="text-stone-50 text-3xl md:text-5xl pl-14 md:pl-0">6 WEEK BOOTCAMP</div>
							<ul className="text-stone-50 pl-12 md:pl-0 mt-4 text-2xl md:text-3xl lg:pl-4">
								<li>&#x2022; NUTRITION GUIDANCE & MONITORING</li>
								<li>&#x2022; IN DEPTH EXERCISE EXPLANATIONS</li>
								<li>&#x2022; INTO TO FUNCTIONAL FITNESS</li>
								<li>&#x2022; GOAL SETTING SEMINARS</li>
							</ul>
						</div>
						<div className="text-stone-50 text-3xl pr-4 md:text-4xl">$200</div>
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
								<div className="text-stone-900 text-3xl md:text-4xl lg:text-5xl text-stone-900 pb-4">PRE PAY <span className="lg:block">(6MO+)</span></div>
								<div className="text-3xl md:text-4xl lg:text-5xl text-[#D83728]">10%</div>
							</div>
					</div>
				</div>
				<div className="w-full py-10 flex flex-col items-center px-8 lg:px-48 2xl:px-[32rem] bg-stone-900">
					<div className="text-4xl md:text-5xl text-stone-50 md:my-8 md:mb-12">COACHES</div>	
					<div className="flex flex-col md:flex-row md:justify-between md:flex-wrap">
						<Coach
							coach="JENAE JUDGE (OWNER)"
							url="/jenae.jpg"
							text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
						/>
						<Coach
							coach="AMY POWERS"
							url="/amy.jpg"
							text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
						/>
						<Coach
							coach="MICHELLE SABEDRA"
							url="/michelle.jpg"
							text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
						/>
						<Coach
							coach="ANDREW EYEMAN"
							url="/andrew.jpg"
							text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
						/>
					</div>
				</div>
				<hr className="border-stone-600"/>
				<div className="my-8 pt-10 w-full md:px-24 lg:px-36 2xl:px-96 bg-stone-900">
					<div className="w-full flex justify-center">
						<h2 className='text-[#D83728] py-8 text-2xl md:text-5xl'>DISCOVER YOUR BEST YOU</h2>
					</div>
					<div className="flex flex-col my-4 mx-8 2xl:mx-36 2xl:mb-8">
						<label className="text-stone-300 pl-2 text-2xl mb-2">NAME</label>
						<input className="w-full h-10 rounded-lg" />
					</div>
					<div className="flex flex-col my-4 mx-8  2xl:mx-36 2xl:mb-8">
						<label className="text-stone-300 pl-2 text-2xl mb-2">EMAIL</label>
						<input className="w-full h-10 rounded-lg" />
					</div>
					<div className="flex flex-col my-4 mx-8 2xl:mx-36 2xl:mb-8">
						<label className="text-stone-300 pl-2 text-2xl mb-2">PHONE</label>
						<input className="w-full h-10 rounded-lg" />
					</div>
					<div className="flex flex-col my-4 mx-8 2xl:mx-36 2xl:mb-8">
						<label className="text-stone-300 pl-2 text-2xl mb-2">GOALS</label>
						<input multiple className="w-full h-16 md:h-32 rounded-lg" />
					</div>
					<div className="px-8 md:px-8 2xl:px-36">
						<button ref={submitButton} id="submit" className="bg-[#D83728] shadow-lg rounded-lg mt-4 w-full h-12 leading-4 text-stone-50 md:text-3xl">START YOUR JOURNEY</button>
					</div>
				</div>
			{!submitInView ? 
			<button className="fixed bg-[#D83728] shadow-lg rounded-lg w-24 h-12 bottom-12 right-8 leading-4 text-stone-50 md:w-40 md:h-20 md:text-2xl" onClick={goToForm}>START YOUR JOURNEY</button>
			: <></>}
    </main>
  )
}
