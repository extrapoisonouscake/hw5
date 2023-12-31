"use client";
import withQueryStatus from "@/hoc/withQueryStatus";
import Filters from "./Filters";
import Movies from "./Movies";
import styles from "./page.module.css";
import {type FilterInputsTypes, type IMovie} from "@/types";
import {useState} from "react";
import {useGetMoviesQuery} from "@/store/api/movies";
import useDebounce from "@/hooks/useDebounce";
const MoviesWithQuery = withQueryStatus<void, IMovie[]>(useGetMoviesQuery)(
	Movies,
);
export default function Home() {
	const [filterInputsValues, setFilterInputsValues]
    = useState<FilterInputsTypes>({title: "", genre: "", cinema: ""});
	const debouncedValue = useDebounce(filterInputsValues.title, 500);
	return (
		<div className={styles.main}>
			<Filters values={filterInputsValues} setValues={setFilterInputsValues} />
			<MoviesWithQuery filterInputsValues={{...filterInputsValues, title: debouncedValue}} />
		</div>
	);
}
