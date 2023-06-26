import {type AnyProps} from "@/types";

const CartIcon = (props: AnyProps) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width={32}
		height={32}
		fill='none'
		{...props}
	>
		<path
			fill='#fff'
			d='M29.494 8.675A2.015 2.015 0 0 0 27.984 8h-5.99a6 6 0 1 0-12 0h-5.99a2.016 2.016 0 0 0-1.5.675 2 2 0 0 0-.49 1.56l1.782 15a2 2 0 0 0 2 1.765h20.406a2 2 0 0 0 2-1.765l1.783-15a2 2 0 0 0-.491-1.56ZM15.994 4a4 4 0 0 1 4 4h-8a4 4 0 0 1 4-4Zm10.22 21a.017.017 0 0 1-.012 0H5.775L4.004 10h5.99v3a1 1 0 0 0 2 0v-3h8v3a1 1 0 0 0 2 0v-3h6l-1.78 15Z'
		/>
	</svg>
);
export default CartIcon;
