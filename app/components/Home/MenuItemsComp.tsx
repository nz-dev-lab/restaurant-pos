import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addSelectedItem, removeSelectedItem } from "~/utils/redux/actions/orderActions";
import MenuTileBasic from "./MenuTileBasic";
import { getMenuItems, insertMenuItems } from "~/utils/dbUtils";
import CustomizationModal from "~/utils/Modals/CustomizationModal";
import type { MenuItem } from "~/utils/redux/types/orderTypes";

const MenuItemsComp: React.FC = () => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [isCustomizationModalOpen, setIsCustomizationModalOpen] = useState<boolean>(false);
  const [selectedMenuItemForCustomization, setSelectedMenuItemForCustomization] = useState<MenuItem | null>(null);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const storedMenuItems = await getMenuItems();

        if (storedMenuItems.length > 0) {
          setMenuItems(storedMenuItems);
          setLoading(false);
        } else {
          const response = await axios.get('/mockdata/menuItems.json');
          const data = response.data;

          await insertMenuItems(data);
          setMenuItems(data);
          setLoading(false);
        }
      } catch (error) {
        alert(`Menu Items Fetching Error: ${error}`);
      }
    };

    fetchMenuItems();
  }, []);

  const handleAddItemClick = (item: MenuItem) => {
    if (item.customizations && Object.keys(item.customizations).length > 0) {
      setSelectedMenuItemForCustomization(item);
      setIsCustomizationModalOpen(true);
    } else {
      dispatch(addSelectedItem({ ...item, quantity: 1 }));
    }
  };

  const handleRemoveItem = (id: number) => {
    dispatch(removeSelectedItem(id));
  };

  return (
    <div className="flex flex-wrap gap-3 mt-6">
      {loading
        ? [...Array(4)].map((_, index) => <LoadingSkeleton key={index} />)
        : menuItems.map((item) => (
            <MenuTileBasic
              key={item.id}
              id={item.id}
              title={item.name}
              price={item.price}
              onAdd={() => handleAddItemClick(item)}
            />
          ))}

      {isCustomizationModalOpen && selectedMenuItemForCustomization && (
        <CustomizationModal
          item={selectedMenuItemForCustomization}
          onClose={() => {
            setIsCustomizationModalOpen(false);
            setSelectedMenuItemForCustomization(null);
          }}
        />
      )}
    </div>
  );
};

const LoadingSkeleton: React.FC = () => (
  <div className="bg-gray-200 rounded-lg shadow-md w-[190px] h-[170px] flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50 p-4 animate-pulse">
    <div className="bg-gray-300 rounded w-3/4 h-6 mb-2"></div>
    <div className="bg-gray-300 rounded w-1/2 h-6"></div>
  </div>
);

export default MenuItemsComp;
