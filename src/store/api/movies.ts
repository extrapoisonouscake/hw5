
import { BASE_URL } from '@/constants'
import { IMovie } from '@/types'
import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'
export const moviesApi = createApi({
	reducerPath:'movies',
	baseQuery:fetchBaseQuery({baseUrl:BASE_URL}),
	endpoints:(builder)=>({
		getMovies:builder.query<IMovie[],void>({
			query:()=>'movies',
		})
	}),
})
export const {useGetMoviesQuery} = moviesApi