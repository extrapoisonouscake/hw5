"use client";
import {useState} from "react";
import styles from "./page.module.css";
import {type IQuestion} from "@/types";
import QuestionCard from "./QuestionCard";
const data: IQuestion[] = [
	{
		q: "Что такое Билетопоиск?",
		a: "Мы — крупнейший сервис о кино в рунете. На нем вы сможете посмотреть фильмы и сериалы, купить билеты в кино, узнать рейтинги популярных видео и интересные факты, поставить фильмам оценки, написать рецензии и дополнить описание фильмов.",
	},
	{
		q: "Какой компании принадлежит Билетопоиск?",
		a: "Билетопоиск принадлежит Яндексу и над ней трудятся студетны ШРИ и других школ Яндекса!",
	},
	{
		q: "Как купить билет на Билетопоиск?",
		a: "Очень просто, достаточно выбрать понравившыйся фильм, добавить в коорзину, сделать скриншот корзины и отправить скриншот @Lapxi010 в тг!",
	},
	{
		q: "Как оставить отзыв на Билетопоиск?",
		a: "Если вы хотите оставить положительный отзыв о Билетопоиске, то вам достаточно написать в тг @Lapxi010, а если отрицательный, то ничего не надо оставлять :)",
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
