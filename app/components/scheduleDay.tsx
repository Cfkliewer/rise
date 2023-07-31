import { motion } from "framer-motion";
import { FC } from "react";

interface Props {
	day:  "SS" | "M" |"T" | "W" | "TH" | "F" | "S";
	custom: any;
}

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    };
  }
};

export const ScheduleDay: FC<Props> = ({day, custom}) => {
	

	const get615 = () => {
		switch(day) {
			case "T":
			case "TH":
				return <div className="border-stone-900 bg-amber-300 rounded-lg px-2 text-stone-900 text-xl xl:text-2xl 2xl:text-3xl py-1">6:15 p.m. (Bootcamp)</div>
			case "W":
				return <div className="text-stone-900 text-xl xl:text-2xl 2xl:text-3xl  py-1">6:15 p.m. (Strength Class)</div>
			case "M":
				return <div className="text-stone-900 text-xl xl:text-2xl 2xl:text-3xl  py-1">6:15 p.m. (CrossFit)</div>
			default: 
				return;

		}
	}

	const get6am = () => {
		switch(day) {
			case "M":
			case "W":
			case "F":
				return <div className="text-stone-900 text-xl xl:text-2xl 2xl:text-3xl  py-1">6:00 a.m. (CrossFit)</div>
			default: 
				return;

		}
	}

	const get515 = () => {
		switch(day) {
			case "F": 
				return <div className="text-stone-900 text-xl xl:text-2xl 2xl:text-3xl  py-1">5:30 p.m. (Strength Class)</div>
			default: 
				return <div className="text-stone-900 text-xl xl:text-2xl 2xl:text-3xl  py-1">5:15 p.m. (CrossFit)</div>
		}
	}

	if(day === "SS") {
		return (
			<motion.div
				variants={variants}
				custom={custom}
				key={day}
				initial="enter"
				animate="center"
				exit="exit"
				transition={{
				x: { type: "spring", stiffness: 300, damping: 30 },
				opacity: { duration: 0.2 }
        }}
				className={`p-4 flex items-center flex-col min-h-[19em]`}>
					<div className="text-stone-900 text-xl xl:text-2xl 2xl:text-3xl  py-1">10:00 a.m. - 12:00 p.m. (Sunday Funday)</div>
			</motion.div>
		)
	}

	if(day === "S") {
		return (
			<motion.div
				variants={variants}
				key={day}
				initial="enter"
				animate="center"
				custom={custom}
				exit="exit"
				transition={{
				x: { type: "spring", stiffness: 300, damping: 30 },
				opacity: { duration: 0.2 }
        }}
			className="p-4 flex items-center flex-col min-h-[19em]">
				<div className="text-stone-900 text-xl xl:text-2xl 2xl:text-3xl  py-1">8:15 a.m. (CrossFit)</div>
				<div className="border-stone-900 bg-amber-300 rounded-lg px-2 text-stone-900 text-xl xl:text-2xl 2xl:text-3xl  py-1">9:00 a.m. (Bootcamp)</div>
			</motion.div>
		)
	}


	return (
		<motion.div
		variants={variants}
		key={day}
		initial="enter"
		animate="center"
		custom={custom}
		exit="exit"
		transition={{
			x: { type: "spring", stiffness: 300, damping: 30 },
			opacity: { duration: 0.2 }
    }}
		className="p-4 flex items-center flex-col min-h-[19em]">
			<div className="text-stone-900 text-xl xl:text-2xl 2xl:text-3xl  py-1">5:00 a.m. (CrossFit)</div>
			{get6am()}
			<div className="text-stone-900 text-xl xl:text-2xl 2xl:text-3xl  py-1">12:00 p.m. (CrossFit)</div>
			<div className="text-stone-900 text-xl xl:text-2xl 2xl:text-3xl  py-1">4:00 p.m. (Open Gym)</div>
			{get515()}
			{get615()}
		</motion.div>
	);
}
