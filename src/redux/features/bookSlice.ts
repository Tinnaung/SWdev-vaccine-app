import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BookingItem } from "../../../interfaces";

type BookingState = {
    bookingItem: BookingItem|null
}

const initialState:BookingState = {bookingItem: null}

export const bookSlice = createSlice({
    name: "booking",
    initialState,
    reducers:{
        addBooking: (state, action:PayloadAction<BookingItem>) => {
            state.bookingItem = action.payload
        },
        removeBooking: (state, action:PayloadAction<BookingItem>) => {
            state.bookingItem = null
        }
    }
})

export const { addBooking, removeBooking} = bookSlice.actions
export default bookSlice.reducer