import React from 'react';
import css from './Hero.module.scss';
import { Photo } from '../../atoms/Photo';
import { LdLink } from '../../atoms/LdLink';

interface Button {
	text: string;
	link: string;
	newTab: boolean;
}

interface Props {
	data: {
        theme: 'white' | 'brand';
		bgImage: boolean;
		photo: string;
		textAlign: 'left' | 'right' | 'center';
		title: string;
		description: string;
		mainButton?: Button;
		secondaryButton?: Button;
	};
}

const themes = {
	white: {
		bgColor: '#fff',
		color: '#374151',
	},
	brand: {
		bgColor: '#11a59c',
		color: '#fff',
	},
};
export const Hero: React.FC<Props> = (props: Props) => {
	const { data } = props;
	const theme = themes[data.theme] || themes.brand;
	const backgroundColor = theme.bgColor;
	const color = theme.color;
	const backgroundImage = data.bgImage
		? `url('https://res.cloudinary.com/littledata/image/upload/f_auto,b_black,o_50/www2/${data.bgImage}')`
		: 'none';

	return (
		<section className={css.hero} style={{ backgroundColor, backgroundImage, color }}>
			<div className="container mx-auto flex px-4 py-12 sm:py-24 md:flex-row flex-col items-center max-w-screen-xl">
				<div
					className={`${data.photo ? 'md:w-1/2' : ''} w-full md:items-start items-center
                        ${data.textAlign === 'left' ? 'text-left flex flex-col' : 'text-center grow'} ${
						data.bgImage && 'text-white'
					}`}
				>
					<h1 className="title-font sm:text-5xl text-3xl mb-4 font-medium">{data.title}</h1>
					<p className="mb-8 leading-relaxed text-xl font-thin">{data.description}</p>
					<div className={`flex justify-center ${data.textAlign === 'center' && 'mx-auto'}`}>
						{data.mainButton.text && data.mainButton.link && (
							<LdLink href={data.mainButton.link} target={data.mainButton.newTab ? '_blank' : ''}>
								{data.mainButton.text}
							</LdLink>
						)}
						{data.secondaryButton.text && data.secondaryButton.link && (
							<LdLink
								type="secondary"
								href={data.secondaryButton.link}
								target={data.secondaryButton.newTab ? '_blank' : ''}
							>
								{data.secondaryButton.text}
							</LdLink>
						)}
					</div>
				</div>
				<Photo photo={data.photo} />
			</div>
		</section>
	);
};
