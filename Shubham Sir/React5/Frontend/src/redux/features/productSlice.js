import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "products",
  initialState: {
    value: {
      "_id": "",
      "name": "",
     "price": 0,
      "quantity": 0,
      "description": "",
      "category": {},
      "live": {},

      "productype": "",
      "sizes": "",
      "image": "",
      "rating": 0,
    "colors": "",
      "gender": "",
      "createdBy": "",
      "createdAt": "",
      "updatedAt": "",
    },
  },
  reducers: {
    setProducts: (state, action) => {
      state.value += action.payload;
    },
    resetProduct: (state) => {
      state.value = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { setProducts, resetProduct } = productSlice.actions;

export default productSlice.reducer;
