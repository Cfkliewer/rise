import Image from 'next/image' 
import { FC } from 'react';

interface Props {
	url: string;
}

export const Testimonial: FC<Props> = ({url}) => {
	return (
		<div className='rounded-lg bg-stone-800 w-full lg:w-[93%] md:m-4 h-96 md:my-8 relative'>
			<Image src={url} alt="placeholder" className='rounded-lg' layout='fill' objectFit='cover'/> 
			<div className='absolute top-[50%] bg-gradient-to-t from-stone-900 opacity-90 w-full h-1/2'>
			</div>
		</div>
	);
}
