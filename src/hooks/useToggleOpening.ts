import {useCallback, useState} from "react";
export default function useToggleOpening(initialValue = false) {
	const [isOpened, setOpened] = useState<boolean>(initialValue);
	const toggleIsOpened = useCallback(() => {
		setOpened(!isOpened);
	}, [isOpened]);
	const setIsClosed = useCallback(() => {
		setOpened(false);
	}, [isOpened]);
	return {isOpened, toggleIsOpened, setIsClosed};
}
