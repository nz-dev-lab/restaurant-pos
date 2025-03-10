import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addSelectedItem } from "~/utils/redux/actions/orderActions";
import type { MenuItem } from "~/utils/redux/types/orderTypes";

interface CustomizationModalProps {
  item: MenuItem;
  onClose: () => void;
}

const CustomizationModal: React.FC<CustomizationModalProps> = ({ item, onClose }) => {
  const dispatch = useDispatch();
  const [selectedCustomizations, setSelectedCustomizations] = useState<{ [key: string]: string[] }>({});

  const handleSelectCustomization = (type: string, option: string) => {
    setSelectedCustomizations((prev) => {
      const prevOptions = prev[type] || [];
      const updatedOptions = prevOptions.includes(option)
        ? prevOptions.filter((opt) => opt !== option)
        : [...prevOptions, option];
      return {
        ...prev,
        [type]: updatedOptions,
      };
    });
  };

  const handleAddToOrder = () => {
    const itemToAdd = { ...item, quantity: 1, customizations: selectedCustomizations };
    dispatch(addSelectedItem(itemToAdd));
    onClose();
  };

  const isAddToOrderDisabled = () => {
    if (!item.customizations || Object.keys(item.customizations).length === 0) return false;

    return Object.entries(item.customizations).some(([customizationType, options]) => {
      if (Array.isArray(options) && options.length > 0) {
        return !selectedCustomizations[customizationType] || selectedCustomizations[customizationType].length === 0;
      }
      return false;
    });
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/25 backdrop-blur-sm z-50">
      <div className="bg-white p-5 rounded-lg shadow-lg w-96">
        <h2 className="text-lg font-bold mb-3">Customize {item.name}</h2>
        {item.customizations && Object.keys(item.customizations).length > 0 ? (
          Object.entries(item.customizations).map(([customizationType, options]) => (
            <div key={customizationType} className="mb-3">
              <h3 className="text-md font-semibold mb-2">{customizationType}</h3>
              <div className="flex gap-2 flex-wrap">
                {options.map((option) => (
                  <button
                    key={option}
                    className={`p-2 rounded border ${
                      selectedCustomizations[customizationType]?.includes(option)
                        ? "bg-blue-600 text-white"
                        : "bg-gray-200"
                    }`}
                    onClick={() => handleSelectCustomization(customizationType, option)}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          ))
        ) : (
          <p>No customizations available for this item.</p>
        )}

        <div className="flex justify-between mt-4">
          <button
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 disabled:bg-gray-400"
            onClick={handleAddToOrder}
            disabled={isAddToOrderDisabled()}
          >
            Add to Order
          </button>
          <button
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomizationModal;
