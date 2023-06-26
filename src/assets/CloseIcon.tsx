import {type AnyProps} from '@/types';
const CloseIcon = (props: AnyProps) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width={32}
		height={32}
		fill='none'
		{...props}
	>
		<path
			fill='#333'
			d='M25.707 24.292A1 1 0 0 1 25 26a1 1 0 0 1-.708-.293L16 17.414l-8.293 8.293a1 1 0 1 1-1.415-1.415L14.586 16 6.292 7.707a1 1 0 1 1 1.415-1.415L16 14.586l8.292-8.294a1 1 0 0 1 1.415 1.415L17.414 16l8.293 8.292Z'
		/>
	</svg>
);
export default CloseIcon;
