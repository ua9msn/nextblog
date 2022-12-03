import React from 'react';

interface Props {
	photo: string;
}

export const Photo: React.FC<Props> = ({ photo }: Props) => {

    if(!photo) return null;

	return (
		<div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 text-center">
			<img
				className="object-cover object-center rounded-lg mx-auto max-h-48 sm:max-h-64"
				alt="hero"
				src={photo}
			/>
		</div>
	);
};
