
import {useAppSelector} from "@/store/hooks";
import {selectCart} from "@/store/slices/cart";
import styles from "./index.module.css";
export default function CartCounter() {
	const {tickets} = useAppSelector(selectCart);
	if (!tickets?.length) {
		return null;
	}

	return (
		<div className={styles.counter}>
			{tickets
				.map(ticket => ticket.quantity)
				.reduce((prev, cur) => prev + cur, 0)}
		</div>
	);
}
