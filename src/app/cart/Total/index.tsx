import styles from "./index.module.css";
import cn from "classnames";
interface Props {
	total: number;
}
export default function Total({total}: Props) {
	return (
		<div className={cn("card", styles.container)}>
			<h3>Итого билетов:</h3>
			<b>{total}</b>
		</div>
	);
}
