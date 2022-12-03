import React from 'react';

export interface LdLinkProps {
    href: HTMLAnchorElement['href']; //TODO: url
    type?: 'primary' | 'secondary';
	target?: HTMLAnchorElement['target'];
    children: React.ReactNode;
}

const viewTypeMap = {
	primary:
		'inline-flex text-white bg-yellow-400 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-500 rounded text-lg cursor-pointer',
	secondary:
		'transition-all duration-300 ml-4 inline-flex text-yellow-500 border-yellow-400 border py-2 px-6 focus:outline-none hover:bg-yellow-400 hover:text-white rounded text-lg cursor-pointer',
};

export const LdLink: React.FC<LdLinkProps> = ({ href, type = 'primary', target = '__self', children }) => {
	const className = viewTypeMap[type] || viewTypeMap.primary;

	return (
		<a href={href} target={target ? '_blank' : ''} className={className} rel="noreferrer">
			{children}
		</a>
	);
};
