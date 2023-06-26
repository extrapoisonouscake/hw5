import {useState, useEffect} from "react";
export default function useDebounce(value: any, delay: number) {
	const [debouncedValue, setDebouncedValue] = useState<typeof value>(value);
	useEffect(() => {
		const timeout = setTimeout(() => {
			setDebouncedValue(value);
		}, delay);
		return () => {
			clearTimeout(timeout);
		};
	}, [value]);
	return debouncedValue;
}
