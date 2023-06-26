import {type AnyProps} from '@/types';
const MinusIcon = (props: AnyProps) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width='100%'
		fill='none'
		viewBox='0 0 32 32'
		{...props}
	>
		<path
			fill='#fff'
			d='M28 16a1 1 0 0 1-1 1H5a1 1 0 0 1 0-2h22a1 1 0 0 1 1 1Z'
		/>
	</svg>
);
export default MinusIcon;
