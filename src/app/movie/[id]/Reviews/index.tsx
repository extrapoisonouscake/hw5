import {type IMovie, type IReview} from "@/types";
import styles from "./index.module.css";
import Review from "../Review";
import {useEffect, useState} from "react";
import instance from "@/axios";
interface Props {
	movieId: IMovie["id"];
}
export default function Reviews({movieId}: Props) {
	const [reviews, setReviews] = useState<IReview[] | undefined>();
	useEffect(() => {
		instance.get("/reviews", {params: {movieId}}).then(res => {
			setReviews(res.data);
		});
	}, []);
	if (!reviews) {
		return <p>Отзывы загружаются...</p>;
	}

	return (
		<div className={styles.container}>
			{reviews.map(review => <Review key={review.id} {...review}/>)}
		</div>
	);
}
