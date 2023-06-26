import { IMovie } from "@/types"
import { RootState } from "../.."
export const selectCart = (state:RootState) => state.cart
export const selectMovieQuantity = (id:IMovie['id']) => (state:RootState) => state.cart.tickets.find(ticket => ticket.movieId === id)?.quantity