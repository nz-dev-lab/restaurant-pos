export const ADD_SELECTED_ITEM = "ADD_SELECTED_ITEM";
export const REMOVE_SELECTED_ITEM = "REMOVE_SELECTED_ITEM";

export interface MenuItem {
  id: number;
  name: string;
  description?: string;
  price: number;
  quantity: number;
  notes?: string;
  customizations?: { [customizationType: string]: string[] };
}
