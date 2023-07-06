import Image from 'next/image'
import { FC } from 'react';

interface Props {
	coach: string;
	url: string;
	text: string;
}

export const Coach: FC<Props> = ({coach, url, text}) => {
	return (
		<div className='my-8 md:w-[45%]'>
			<div className="text-2xl text-[#D83728] md:text-3xl">{coach}</div>
			<div className='rounded-lg bg-stone-800 w-full h-60 md:h-72 my-2 relative'>
				<Image src={url} alt="placeholder" className='rounded-lg' layout='fill' objectFit='contain'/> 
			</div>
			<div className="text-stone-200 md:text-xl">{text}</div>
		</div>
	);
}
