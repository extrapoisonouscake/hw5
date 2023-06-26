import * as React from "react";
const ArrowIcon = (props: React.SVGProps<SVGSVGElement>) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width={20}
		height={20}
		viewBox='0 0 20 20'
		fill='none'
		{...props}
	>
		<path
			fill='currentColor'
			fillRule='evenodd'
			d='M7.5 18.958h5c4.525 0 6.458-1.933 6.458-6.458v-5c0-4.525-1.933-6.458-6.458-6.458h-5c-4.525 0-6.458 1.933-6.458 6.458v5c0 4.525 1.933 6.458 6.458 6.458ZM2.292 7.5c0-3.842 1.366-5.208 5.208-5.208h5c3.842 0 5.208 1.366 5.208 5.208v5c0 3.842-1.366 5.208-5.208 5.208h-5c-3.842 0-5.208-1.366-5.208-5.208v-5Zm7.266 4.742a.618.618 0 0 0 .442.183.618.618 0 0 0 .442-.183L13.383 9.3a.629.629 0 0 0 0-.883.629.629 0 0 0-.883 0l-2.5 2.5-2.5-2.5a.629.629 0 0 0-.883 0 .629.629 0 0 0 0 .883l2.941 2.942Z'
			clipRule='evenodd'
		/>
	</svg>
);
export default ArrowIcon;
