export const initialCartState = [];

// Every branch returns a new array never mutates `state` in place.
export function cartReducer(state, action) {
  switch (action.type) {
    case "LOAD_CART":
      return action.payload;

    case "ADD_ITEM": {
      const product = action.payload;
      const existing = state.find((item) => item.id === product.id);

      if (existing) {
        // Already in the cart : bump quantity instead of adding a duplicate row
        return state.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }

      return [...state, { ...product, quantity: 1 }];
    }

    case "REMOVE_ITEM":
      return state.filter((item) => item.id !== action.payload);

    case "INCREASE_QTY":
      return state.map((item) =>
        item.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item
      );

    case "DECREASE_QTY":
      return state
        .map((item) =>
          item.id === action.payload ? { ...item, quantity: item.quantity - 1 } : item
        )
        // If decreasing brought quantity to 0, drop the item entirely
        .filter((item) => item.quantity > 0);

    default:
      return state;
  }
}