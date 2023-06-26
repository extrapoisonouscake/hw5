"use client";
import cn from "classnames";
import Select from "@/components/Select";
import styles from "./index.module.css";
import {type ICinema} from "@/types";
import {genresTexts} from "@/constants";
import {type FilterInputsTypes} from "@/types";
import Input from "@/components/Input";
import {useGetCinemasQuery} from "@/store/api/cinemas";
import withQueryStatus from "@/hoc/withQueryStatus";

interface Props {
	values: FilterInputsTypes;
	setValues: (values: FilterInputsTypes) => void;
}

const CinemasSelect = ({
	serverData,
	...props
}: {
	serverData: ICinema[];
	onValueChange: (value: string) => void;
}) => (
	<Select
		options={[
			["", "Все"],
			...serverData.map(
				cinema => [cinema.id, cinema.name] as [string, string],
			),
		]}
		{...props}
	/>
);

const CinemasSelectWithStatus
  = withQueryStatus(useGetCinemasQuery)(CinemasSelect);

export default function Filters({values, setValues}: Props) {
	const makeOnChange: (
		inputName: keyof FilterInputsTypes
	) => (value: string) => void = inputName => value => {
		setValues({
			...values,
			[inputName]: value,
		});
	};

	const makeProps = (inputName: keyof FilterInputsTypes) => ({
		onValueChange: makeOnChange(inputName),
	});
	return (
		<div className={cn("card", styles.container)}>
			<p className={styles.title}>Фильтр поиска</p>
			<div className={styles.filtersContainer}>
				<div className={styles.block}>
					<label className={styles.label} htmlFor='title_filter'>
            Название
					</label>
					<Input {...makeProps("title")} placeholder='Введите название' />
				</div>
				<div className={styles.block}>
					<label className={styles.label} htmlFor='genre_filter'>
            Жанр
					</label>

					<Select
						{...makeProps("genre")}
						options={[["", "Все"], ...Object.entries(genresTexts)]}
						placeholder={"Выберите жанр"}
					/>
				</div>
				<div className={styles.block}>
					<label className={styles.label} htmlFor='cinema_filter'>
            Кинотеатр
					</label>

					<CinemasSelectWithStatus
						{...makeProps("cinema")}
						placeholder='Выберите кинотеатр'
					/>
				</div>
			</div>
		</div>
	);
}
