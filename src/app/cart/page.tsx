"use client";
import { useState } from "react";
import MovieCard from "@/app/MovieCard";
import { type IMovie } from "@/types";
import styles from "./page.module.css";
import { selectCart, deleteMovie } from "@/store/slices/cart";
import DeleteTicketModal from "./DeleteTicketModal";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import Total from "./Total";
import withQueryStatus from "@/hoc/withQueryStatus";
import { useGetMoviesQuery } from "@/store/api/movies";
interface Props {
  serverData: IMovie[];
}
function CartPage({ serverData: movies }: Props) {
	const { tickets } = useAppSelector(selectCart);
	const [isModalOpened, setIsModalOpened] = useState<boolean>(false);
	const [deletionId, setDeletionId] = useState<IMovie["id"] | undefined>();
	const dispatch = useAppDispatch();
	const deleteMovieFromCart = (id: IMovie["id"]) => {
		dispatch(deleteMovie(id));
	};

	const onDeletionRequest = (id: IMovie["id"]) => {
		setIsModalOpened(true);
		setDeletionId(id);
	};

	if (tickets.length === 0) {
		return <p>Пока что в вашей корзине ничего нет.</p>;
	}

	const moviesInCart = tickets
		.map(({ movieId }) => movies.find((movie) => movie.id === movieId))
		.filter(Boolean) as IMovie[];

	return (
		<>
			<div className={styles.container}>
				<div className={styles.cards}>
					{moviesInCart.map((movie) => (
						<MovieCard
							onDeletion={() => {
								onDeletionRequest(movie.id);
							}}
							key={movie.id}
							{...movie}
						/>
					))}
				</div>
				<Total
					total={tickets
						.map((ticket) => ticket.quantity)
						.reduce((prev, cur) => prev + cur, 0)}
				/>
			</div>
			<DeleteTicketModal
				isOpened={isModalOpened}
				onAction={
					deletionId
						? () => {
							deleteMovieFromCart(deletionId);
						}
						: undefined
				}
				closeModal={() => {
					setIsModalOpened(false);
				}}
			/>
		</>
	);
}
const CartPageWithStatus = withQueryStatus(useGetMoviesQuery)(CartPage);
export default function CartPageWrapper() {
	return <CartPageWithStatus/>;
}
