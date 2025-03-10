// orderActions.ts
import { ADD_SELECTED_ITEM, REMOVE_SELECTED_ITEM, type MenuItem } from "../types/orderTypes";

// Add item to the current order
export const addSelectedItem = (item: MenuItem) => ({
  
  type: ADD_SELECTED_ITEM,
  payload: item,
});

// Remove item from the current order
export const removeSelectedItem = (id: number) => ({
  type: REMOVE_SELECTED_ITEM,
  payload: id,
});
