import {combineReducers, configureStore} from '@reduxjs/toolkit';
import cartSlice from './slices/cart';
import {moviesApi} from './api/movies';
import {cinemasApi} from './api/cinemas';
const reducer = combineReducers({
	cart: cartSlice,
	[moviesApi.reducerPath]: moviesApi.reducer,
	[cinemasApi.reducerPath]: cinemasApi.reducer,
});
const store = configureStore({
	reducer,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat([
			cinemasApi.middleware,
			moviesApi.middleware,
		]),
});
export type AppStore = typeof store;
export type RootState = ReturnType<typeof reducer>;
export type AppDispatch = AppStore['dispatch'];
export default store;
