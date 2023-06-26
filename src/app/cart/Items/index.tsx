import {useState, useCallback} from 'react';
import MovieCard from '@/app/MovieCard';
import {type IMovie} from '@/types';
import styles from './index.module.css';
import {selectCart, deleteMovie} from '@/store/slices/cart';
import DeleteTicketModal from '../DeleteTicketModal';
import {useAppDispatch, useAppSelector} from '@/store/hooks';
type Props = {
	serverData: IMovie[];
};
export default function Items({serverData: movies}: Props) {
	const {tickets} = useAppSelector(selectCart);
	const [isModalOpened, setIsModalOpened] = useState<boolean>(false);
	const [deletionId, setDeletionId] = useState<IMovie['id'] | undefined>();
	const dispatch = useAppDispatch();
	const deleteMovieFromCart = (id: IMovie['id']) => {
		dispatch(deleteMovie(id));
	};

	const onDeletionRequest = useCallback((id: IMovie['id']) => {
		setIsModalOpened(true);
		setDeletionId(id);
	}, []);
	if (tickets.length === 0) {
		return <p>Пока что в вашей корзине ничего нет.</p>;
	}

	const moviesInCart = tickets
		.map(({movieId}) => movies.find(movie => movie.id === movieId))
		.filter(Boolean) as IMovie[];

	return (
		<>
			<div className={styles.container}>
				{moviesInCart.map(movie => (
					<MovieCard
						onDeletion={() => {
							onDeletionRequest(movie.id);
						}}
						key={movie.id}
						{...movie}
					/>
				))}
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
