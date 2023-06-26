export type AnyProps = Record<string, any>;
export type Rating = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
export type IReview = {
	id: string;
	name: string;
	text: string;
	rating: Rating;
};
export type MovieGenre = 'fantasy' | 'horror' | 'action' | 'comedy';

export type IMovie = {
	title: string;
	posterUrl: string;
	releaseYear: number;
	description: string;
	genre: MovieGenre;
	id: string;
	rating: 8;
	director: string;
	reviewIds: Array<IReview['id']>;
};

export type ICinema = {
	id: string;
	name: string;
	movieIds: Array<IMovie['id']>;
};

export type FilterInputsTypes = {
	title: IMovie['title'];
	genre: MovieGenre | '';
	cinema: ICinema['id'];
};

export type IQuestion = {
	q: string;
	a: string;
};
