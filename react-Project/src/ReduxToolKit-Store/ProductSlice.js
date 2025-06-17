import { createSlice } from "@reduxjs/toolkit";

const loadCartFromStorage = () => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
};

const loadCartQuantityFromStorage = () => {
    return localStorage.getItem("cartQuantity")
        ? JSON.parse(localStorage.getItem("cartQuantity"))
        : loadCartFromStorage().reduce((sum, item) => sum + item.quantity, 0);
};

const productSlice = createSlice({
    name: "productSlice",
    initialState: {
        cart: loadCartFromStorage(),
        cartQuantity: loadCartQuantityFromStorage()
    },
    reducers: {
        addToCart: (state, action) => {
            const existingItem = state.cart.find(item => item.id === action.payload.id);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.cart.push({ ...action.payload, quantity: 1 });
            }
            state.cartQuantity = state.cart.reduce((sum, item) => sum + item.quantity, 0);

            localStorage.setItem("cart", JSON.stringify(state.cart));
            localStorage.setItem("cartQuantity", JSON.stringify(state.cartQuantity));
        },
        removeFromCart: (state, action) => {
            state.cart = state.cart.filter(item => item.id !== action.payload);
            state.cartQuantity = state.cart.reduce((sum, item) => sum + item.quantity, 0);

            localStorage.setItem("cart", JSON.stringify(state.cart));
            localStorage.setItem("cartQuantity", JSON.stringify(state.cartQuantity));
        },
        updateQuantity: (state, action) => {
            const itemIndex = state.cart.findIndex(item => item.id === action.payload.id);
            if (itemIndex !== -1) {
                state.cart[itemIndex].quantity += action.payload.amount;

                if (state.cart[itemIndex].quantity <= 0) {
                    state.cart.splice(itemIndex, 1);
                }
            }
            state.cartQuantity = state.cart.reduce((sum, item) => sum + item.quantity, 0);

            localStorage.setItem("cart", JSON.stringify(state.cart));
            localStorage.setItem("cartQuantity", JSON.stringify(state.cartQuantity));
        }
    }
});



export const { addToCart, removeFromCart, updateQuantity } = productSlice.actions;
export default productSlice.reducer;
