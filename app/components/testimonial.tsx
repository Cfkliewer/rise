import Image from 'next/image' 
import { FC } from 'react';

interface Props {
	url: string;
	testimonial: string;
}

export const Testimonial: FC<Props> = ({url, testimonial}) => {
	return (
		<div className='rounded-lg bg-stone-800 w-full mb-24 lg:mb-0 md:w-[45%] md:m-4 h-60 md:h-72 xl:h-96 md:my-8 relative'>
			<Image src={url} alt="placeholder" className='rounded-lg' layout='fill' objectFit='cover'/> 
			<div className='absolute top-[50%] bg-gradient-to-t from-stone-900 via-stone-900 opacity-90 w-full h-1/2'>
				<div className='text-stone-50 text-shadow pt-8 mt-12 px-2'>{testimonial}</div>
			</div>
		</div>
	);
}
