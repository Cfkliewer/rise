import Image from 'next/image'
import { FC } from 'react';
import classNames from 'classnames'

interface Props {
	coach: string;
	url: string;
	text: string[];
	classes?: any;
	textClasses?: any;
}

export const Coach: FC<Props> = ({coach, url, text, classes, textClasses}) => {
	return (
		<div className={classNames('md:rounded-lg w-full  p-8', classes)}>
				<div className='rounded-lg w-full h-60 md:h-72 lg:h-96 my-2 relative'>
					<Image priority src={url} alt="placeholder" className='rounded-lg' layout='fill' objectFit='contain'/> 
				</div>
				<div className="text-stone-50 md:text-xl w-full text-center flex flex-col items-center text-xl lg:text-2xl 3xl:text-2xl flex-1">
					<div className={classNames('mb-12 mt-8 text-3xl xl:text-5xl', textClasses)}>{coach}</div>
					<ul>
						{text.map(t => <li><span className='mr-2'>&#8226;</span>{t}</li>)}
					</ul>
			</div>
		</div>
	);
}
