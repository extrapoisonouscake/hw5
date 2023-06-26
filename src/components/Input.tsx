import {type InputHTMLAttributes, useState} from 'react';
type Props = {
	onValueChange: (value: string) => void;
};
export default function Input({
	onValueChange,
	...props
}: InputHTMLAttributes<HTMLInputElement> & Props) {
	const [value, setValue] = useState<string>('');
	return (
		<input
			{...props}
			value={value}
			onChange={event => {
				setValue(event.target.value);
				if (onValueChange) {
					onValueChange(event.target.value);
				}
			}}
		/>
	);
}
