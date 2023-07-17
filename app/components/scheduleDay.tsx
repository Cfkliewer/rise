import { FC } from "react";

interface Props {
	day:  "SS" | "M" |"T" | "W" | "TH" | "F" | "S";
}


export const ScheduleDay: FC<Props> = ({day}) => {
	

	const get615 = () => {
		switch(day) {
			case "T":
			case "TH":
				return <div className="border-stone-900 bg-amber-300 rounded-lg px-2 text-stone-900 text-xl py-1">6:15 p.m. (Bootcamp)</div>
			case "M":
			case "W":
				return <div className="text-stone-900 text-xl py-1">6:15 p.m.</div>
			default: 
				return;

		}
	}

	const get6am = () => {
		switch(day) {
			case "M":
			case "W":
				return <div className="text-stone-900 text-xl py-1">6:00 a.m.</div>
			default: 
				return;

		}
	}

	const getDayOfWeek = () => {
		switch(day) {
			case "M":
				return "Monday"
			case "T":
				return "Tuesday"
			case "W":
				return "Wednesday"
			case "TH":
				return "Thursday"
			case "F":
				return "Friday"
			case "S":
				return "Saturday"
			case "SS":
				return "Sunday"

		}
	}

	if(day === "SS") {
		return (
			<div className={`border-r border-stone-900 p-4 flex items-center flex-col`}>
				<div className="text-stone-900 text-3xl mb-4">Sunday Funday</div>
				<div className="text-stone-900 text-xl py-1">10:00 a.m. - 12:00 p.m.</div>
			</div>
		)
	}

	if(day === "S") {
		return (
			<div className="p-4 flex items-center flex-col">
				<div className="text-stone-900 text-3xl mb-4">Saturday</div>
				<div className="text-stone-900 text-xl py-1">8:15 a.m.</div>
				<div className="border-stone-900 bg-amber-300 rounded-lg px-2 text-stone-900 text-xl py-1">9:15 a.m. (Bootcamp)</div>
			</div>
		)
	}


	return (
		<div className="border-r border-stone-900 p-4 flex items-center flex-col">
			<div className="text-stone-900 text-3xl mb-4">{getDayOfWeek()}</div>
			<div className="text-stone-900 text-xl py-1">5:00 a.m.</div>
			{get6am()}
			<div className="text-stone-900 text-xl py-1">12:00 p.m.</div>
			<div className="text-stone-900 text-xl py-1">4:00 p.m. (Open Gym)</div>
			<div className="text-stone-900 text-xl py-1">5:15 p.m.</div>
			{get615()}
		</div>
	);
}
