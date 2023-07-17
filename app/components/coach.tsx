import Image from 'next/image'
import { FC } from 'react';
import classNames from 'classnames'

interface Props {
	coach: string;
	url: string;
	text: string;
	classes?: any;
	textClasses?: any;
}

export const Coach: FC<Props> = ({coach, url, text, classes, textClasses}) => {
	return (
		<div className={classNames('md:rounded-lg p-8', classes)}>
			<div className={classNames('mb-12 text-2xl md:text-3xl', textClasses)}>{coach}</div>
			<div className='grid grid-rows-2 lg:grid-cols-2 lg:grid-rows-1'>
				<div className='rounded-lg w-full h-60 md:h-72 lg:96 my-2 relative'>
					<Image priority src={url} alt="placeholder" className='rounded-lg' layout='fill' objectFit='contain'/> 
				</div>
				<div className="text-stone-50 md:text-xl w-full text-center flex items-center text-xl lg:text-2xl 3xl:text-2xl flex-1">{text}</div>
			</div>
		</div>
	);
}
