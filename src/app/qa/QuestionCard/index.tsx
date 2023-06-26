import {type IQuestion} from '@/types';
import styles from './index.module.css';
import cn from 'classnames';
import ArrowIcon from '@/assets/ArrowIcon';
type Props = {
	isOpened: boolean;
	toggleCard: () => void;
};
export default function QuestionCard({
	q,
	a,
	isOpened,
	toggleCard,
}: IQuestion & Props) {
	return (
		<div
			className={cn('card', styles.card, {[styles.opened]: isOpened})}
			key={q}
		>
			<div onClick={toggleCard} className={styles.header}>
				<h4>{q}</h4>
				<div className={styles.arrow}>
					<ArrowIcon width={32} height={32} color='#333' />
				</div>
			</div>
			{isOpened && <p>{a}</p>}
		</div>
	);
}
