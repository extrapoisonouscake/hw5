'use client';
import {useState} from 'react';
import styles from './page.module.css';
import {type IQuestion} from '@/types';
import QuestionCard from './QuestionCard';
const data: IQuestion[] = [
	{
		q: 'Что такое Билетопоиск?',
		a: 'Мы — крупнейший сервис о кино в рунете. На нем вы сможете посмотреть фильмы и сериалы, купить билеты в кино, узнать рейтинги популярных видео и интересные факты, поставить фильмам оценки, написать рецензии и дополнить описание фильмов.',
	},
];
export default function QA() {
	const [questionsOpenedStates, setQuestionsOpenedStates] = useState<boolean[]>(
		data.map(_ => false),
	);
	const getCardTogglerByIndex = (i: number) => () => {
		const clonedState = [...questionsOpenedStates];
		clonedState[i] = !questionsOpenedStates[i];
		setQuestionsOpenedStates(clonedState);
	};

	return (
		<>
			<div className='card'>
				<h3 className={styles.heading}>Вопросы-ответы</h3>
			</div>
			<div className={styles.cards}>
				{data.map(({q, a}, i) => (
					<QuestionCard
						q={q}
						a={a}
						key={q}
						toggleCard={getCardTogglerByIndex(i)}
						isOpened={questionsOpenedStates[i]}
					/>
				))}
			</div>
		</>
	);
}
