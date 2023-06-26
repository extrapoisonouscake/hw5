import {BASE_URL} from '@/constants';
import {type ICinema} from '@/types';
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
export const cinemasApi = createApi({
	reducerPath: 'cinemas',
	baseQuery: fetchBaseQuery({baseUrl: BASE_URL}),
	endpoints: builder => ({
		getCinemas: builder.query<ICinema[], void>({
			query: () => 'cinemas',
		}),
	}),
});
export const {useGetCinemasQuery} = cinemasApi;
