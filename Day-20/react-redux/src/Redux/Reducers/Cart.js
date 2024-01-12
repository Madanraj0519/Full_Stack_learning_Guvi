import {createSlice} from "@reduxjs/toolkit"


const cartSlice = createSlice({
    name: 'cart',
    initialState : {
        items : [],
    },
    reducers:{
        addToCart : (state, action) => {
            if(action.payload){
                state.items.push({...action.payload, quantity : 1})
            }
        },
        deleteFromCart : (state, action) => {
            const ItemId = action.payload;
            state.items = state.items.filter((item) => item.id !== ItemId);
        },
        incrementQuantity : (state, action) => {
            const id = action.payload;
            const existingItems = state.items.find((item) => item.id === id);
            if(existingItems){
                existingItems.quantity += 1;
            }
        },
        decrementQuantity : (state, action) => {
            const id = action.payload;
            const existingItems = state.items.find((item) => item.id === id);
            if(existingItems){
                existingItems.quantity > 1 ? existingItems.quantity -= 1 : existingItems
            }
        }
    }
});

export const {addToCart, deleteFromCart, incrementQuantity, decrementQuantity} = cartSlice.actions
export default cartSlice.reducer