//REDUCER

const initialState = "#16102e";

export const bgReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_COLOR":
      return action.payload;
    default:
      return state;
  }
};
