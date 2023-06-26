import cn from 'classnames';
import {type IMovie} from '@/types';
import styles from './index.module.css';
import {genresTexts} from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import QuantityCounter from '@/components/QuantityCounter';
import CloseButton from '@/components/CloseButton';
type Props = {
	onDeletion?: () => void;
};
export default function MovieCard({
	id,
	title,
	genre,
	posterUrl,
	onDeletion,
}: IMovie & Props) {
	return (
		<div className={cn('card', styles.card)}>
			<Link className={styles.content} href={`/movie/${id}`}>
				<div className={styles.poster}>
					<Image
						fill
						alt={`Баннер фильма ${title}`}
						src={posterUrl}
						className={styles.poster}
					/>
				</div>
				<div className={styles.text}>
					<h3 className={styles.title}>{title}</h3>
					<p className={styles.genre}>{genresTexts[genre]}</p>
				</div>
			</Link>
			<div className={styles.actions}>
				<QuantityCounter id={id} />

				{onDeletion && (
					<CloseButton
						onClick={onDeletion}
						alt='Удалить все билеты фильма из корзины'
					/>
				)}
			</div>
		</div>
	);
}
