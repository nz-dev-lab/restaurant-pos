import { ADD_SELECTED_ITEM, REMOVE_SELECTED_ITEM, type MenuItem } from "../types/orderTypes";

interface OrderState {
  selectedItems: MenuItem[];
}

const initialState: OrderState = {
  selectedItems: [],
};

const orderReducer = (state = initialState, action: any): OrderState => {
  switch (action.type) {
    case ADD_SELECTED_ITEM:
      const newItem = action.payload;
      const existingItemIndex = state.selectedItems.findIndex(item => item.id === newItem.id);

      if (existingItemIndex !== -1) {
        const updatedItems = state.selectedItems.map((item, index) =>
          index === existingItemIndex ? { ...item, quantity: item.quantity + (newItem.quantity || 1) } : item
        );
        return { ...state, selectedItems: updatedItems };
      } else {
        return { ...state, selectedItems: [...state.selectedItems, { ...newItem, quantity: newItem.quantity || 1 }] };
      }

    case REMOVE_SELECTED_ITEM:
      return {
        ...state,
        selectedItems: state.selectedItems.filter(item => item.id !== action.payload),
      };
    default:
      return state;
  }
};

export default orderReducer;
