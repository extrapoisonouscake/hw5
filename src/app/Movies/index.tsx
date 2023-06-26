'use client';
import styles from './index.module.css';
import {type IMovie} from '@/types';
import {useCallback} from 'react';
import MovieCard from '../MovieCard';
import {type FilterInputsTypes} from '@/types';
import LoadingText from '@/components/LoadingText';
import {useGetCinemasQuery} from '@/store/api/cinemas';
type Props = {
	filterInputsValues: FilterInputsTypes;
	serverData: IMovie[];
};

export default function Movies({filterInputsValues, serverData}: Props) {
	const movies = serverData;
	const {data: cinemas, isError} = useGetCinemasQuery();
	const filterMovies = useCallback(
		(movie: IMovie) =>
			(filterInputsValues.title
				? movie.title
					.toLowerCase()
					.includes(filterInputsValues.title.toLowerCase().trim())
				: true)
      && (filterInputsValues.genre ? movie.genre === filterInputsValues.genre : true),
		[filterInputsValues.title, filterInputsValues.genre],
	);
	let moviesInCinema;

	if (filterInputsValues.cinema) {
		if (!cinemas) {
			if (isError) {
				return <p>Произошла непредвиденная ошибка.</p>;
			}

			return <LoadingText />;
		}

		const moviesIdsInCinema = cinemas.find(
			cinema => cinema.id === filterInputsValues.cinema,
		)?.movieIds;

		if (moviesIdsInCinema) {
			moviesInCinema = moviesIdsInCinema
				.map(id => movies.find(movie => movie.id === id))
				.filter(Boolean);
		}
	}

	if (!movies) {
		return <LoadingText />;
	}

	let filteredMovies = movies;
	if (moviesInCinema) {
		filteredMovies = moviesInCinema as IMovie[];
	}

	filteredMovies = filteredMovies.filter(filterMovies);
	if (filteredMovies.length === 0) {
		return <p>Ничего не найдено.</p>;
	}

	return (
		<div className={styles.container}>
			{filteredMovies.map(movie => (
				<MovieCard key={movie.id} {...movie} />
			))}
		</div>
	);
}
