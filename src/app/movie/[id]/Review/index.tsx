import cn from "classnames";
import DefaultAvatar from "./DefaultAvatar";
import styles from "./index.module.css";
import {type IReview} from "@/types";

export default function Review({name, rating, text}: IReview) {
	return (
		<div className={cn("card", styles.container)}>
			<DefaultAvatar />
			<div className={styles.info}>
				<div className={styles.nameAndRatingRow}>
					<p className={styles.authorName}>{name}</p>
					<p>
            Оценка: <b>{rating}</b>
					</p>
				</div>
				<p>{text}</p>
			</div>
		</div>
	);
}
