import styles from "./index.module.css";
import useForceUpdate from "@/hooks/useForceUpdate";
import {type MutableRefObject, type ReactNode, useEffect} from "react";
import {createPortal} from "react-dom";
interface Props {
	children: ReactNode;
	selectRef: MutableRefObject<any>;
	onOutsideClick: () => void;
}
export default function BindedPortal({
	children,
	selectRef,
	onOutsideClick,
}: Props) {
	const forceUpdate = useForceUpdate();
	const handleScroll = () => {
		forceUpdate();
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);
	if (!selectRef?.current) {
		return null;
	} //! !

	const rect = selectRef.current.getBoundingClientRect();

	const position = {
		top: rect.bottom + 4,
		left: rect.left,
		width: rect.width,
	};
	return createPortal(
		<div>
			<div onClick={onOutsideClick} className={styles.overlay} />
			<div className={styles.container} style={{...position}}>
				{children}
			</div>
		</div>,
		document.body,
	);
}
