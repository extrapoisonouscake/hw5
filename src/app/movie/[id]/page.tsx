'use client';
import cn from 'classnames';
import styles from './page.module.css';
import instance from '@/axios';
import {type IMovie} from '@/types';
import {useEffect, useState} from 'react';
import {useParams} from 'next/navigation';
import LoadingText from '@/components/LoadingText';
import Image from 'next/image';
import {genresTexts} from '@/constants';
import Reviews from './Reviews';
const displayOneLineProperty = (property: string, value: string | number) => (
	<p>
		<b>{property}:</b> {value}
	</p>
);
export default function MoviesPage() {
	const {id} = useParams();
	const [movie, setMovie] = useState<IMovie | undefined>();
	useEffect(() => {
		instance.get('/movie', {params: {movieId: id}}).then(res => {
			setMovie(res.data);
		});
	}, []);
	if (!movie) {
		return <LoadingText />;
	}

	const {
		posterUrl,
		title,
		releaseYear,
		genre,
		rating,
		director,
		description,
	} = movie;
	const oneLinePropertiesData: Array<[string, string | number]> = [
		['Жанр', genresTexts[genre]],
		['Год выпуска', releaseYear],
		['Рейтинг', rating],
		['Режиссер', director],
	];
	return (
		<>
			<div className={cn('card', styles.container)}>
				<div className={styles.poster}>
					<Image fill src={posterUrl} alt='Постер фильма' />
				</div>
				<div className={styles.info}>
					<h3 className={styles.heading}>{title}</h3>
					<div className={styles.oneLineProperties}>
						{oneLinePropertiesData.map(prop =>
							displayOneLineProperty(...prop),
						)}
					</div>
					<p className={styles.descriptionHeading}>Описание</p>
					<p>{description}</p>
				</div>
			</div>
			<Reviews movieId={id} />
		</>
	);
}
