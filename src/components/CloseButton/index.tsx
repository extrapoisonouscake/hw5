import CloseIcon from "@/assets/CloseIcon";
import styles from "./index.module.css";
interface Props {
	onClick: () => void;
	alt: string;
	size?: number;
}
export default function CloseButton({onClick, alt, size = 16}: Props) {
	return (
		<button className={styles.button}>
			<CloseIcon onClick={onClick}/>
		</button>
	);
}
