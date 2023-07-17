import Image from 'next/image'
import { FC } from 'react';

interface Props {
	coach: string;
	url: string;
	text: string;
	red?: boolean;
}

export const Coach: FC<Props> = ({coach, url, text, red = false}) => {
	return (
		<div className='md:rounded-lg p-8' style={{backgroundColor: red ? "#D83728" : "#1c1917"}}>
			<div className="mb-12 text-2xl text-[#D83728] md:text-3xl" style={{color: red ? "#1c1917" : "#D83728"}}>{coach}</div>
			<div className='grid grid-rows-2 lg:grid-cols-2 lg:grid-rows-1'>
				<div className='rounded-lg w-full h-60 md:h-72 lg:96 my-2 relative'>
					<Image priority src={url} alt="placeholder" className='rounded-lg' layout='fill' objectFit='contain'/> 
				</div>
				<div className="text-stone-50 md:text-xl w-full text-center flex items-center text-xl lg:text-2xl 3xl:text-2xl flex-1">{text}</div>
			</div>
		</div>
	);
}
