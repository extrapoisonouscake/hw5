import {type IMovie} from "@/types";
import {createSlice} from "@reduxjs/toolkit";
interface State {
	tickets: Array<{movieId: IMovie["id"]; quantity: number}>;
}
const initialState: State = {
	tickets: [],
};
const slice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		incrementMovieQuantity(state, action) {
			const id = action.payload as string;
			const index = state.tickets.findIndex(({movieId}) => id === movieId);
			if (index === -1) {
				state.tickets.push({movieId: id, quantity: 1});
				return;
			}

			if (state.tickets[index].quantity === 30) {
				return;
			}

			state.tickets[index].quantity += 1;
		},
		decrementMovieQuantity(state, action) {
			const index = state.tickets.findIndex(
				({movieId}) => action.payload === movieId,
			);
			if (index === -1) {
				return;
			}

			if (state.tickets[index].quantity === 1) {
				state.tickets.splice(index, 1);
				return;
			}

			state.tickets[index].quantity -= 1;
		},
		deleteMovie(state, action) {
			const index = state.tickets.findIndex(
				({movieId}) => movieId === action.payload,
			);
			if (index === -1) {
				return;
			}

			state.tickets.splice(index, 1);
		},
	},
});
export const {incrementMovieQuantity, decrementMovieQuantity, deleteMovie}
  = slice.actions;
export * from "./selectors";
export default slice.reducer;
