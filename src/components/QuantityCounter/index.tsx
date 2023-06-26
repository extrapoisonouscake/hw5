import styles from "./index.module.css";
import {useAppDispatch, useAppSelector} from "@/store/hooks";
import {
	incrementMovieQuantity,
	decrementMovieQuantity,
	selectMovieQuantity,
} from "@/store/slices/cart";
import {type IMovie} from "@/types";
import MinusIcon from "@/assets/MinusIcon";
import PlusIcon from "@/assets/PlusIcon";
interface Props {
	id: IMovie["id"];
	onDeletion?: () => void;
}
export default function QuantityCounter({id, onDeletion}: Props) {
	const dispatch = useAppDispatch();
	const currentQuantity = useAppSelector(selectMovieQuantity(id));
	const increment = () => {
		dispatch(incrementMovieQuantity(id));
	};

	const decrement = () => {
		dispatch(decrementMovieQuantity(id));
	};

	return (
		<div className={styles.container}>
			<button
				disabled={!currentQuantity || currentQuantity === 0}
				onClick={() => {
					if (currentQuantity === 1 && onDeletion) {
						onDeletion();
						return;
					}

					decrement();
				}}
			>
				<MinusIcon />
			</button>
			<p>{currentQuantity || 0}</p>
			<button disabled={currentQuantity === 30} onClick={increment}>
				<PlusIcon />
			</button>
		</div>
	);
}
