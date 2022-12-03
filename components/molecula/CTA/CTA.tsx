import React from 'react';
import { LdLink } from '../../atoms/LdLink';

interface Props {
	title: string;
	button: {
		text: string;
		href: string;
		newTab?: boolean;
	};
}

export const Cta: React.FC<Props> = ({ title, button }: Props) => (
	<section className="text-gray-700 font-body bg-green-600 px-3">
		<div className="container mx-auto flex px-4 py-12 sm:py-24 md:flex-row flex-col items-center max-w-screen-xl ">
			<div className="w-full mb-5 md:mb-0 text-center md:text-left">
				<h1 className="title-font text-3xl mb-4 font-medium text-white">{title}</h1>
			</div>
			<div className="mb-4 text-right flex-none justify-end">
				<LdLink href={button.href} type="primary" target={button.newTab ? '_blank' : '_self'}>
					{button.text}
				</LdLink>
			</div>
		</div>
	</section>
);
