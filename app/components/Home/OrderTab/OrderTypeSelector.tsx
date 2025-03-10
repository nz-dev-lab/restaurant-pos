import React, { useState, useEffect } from "react";

interface OrderTypeSelectorProps {
  orderType: "Takeaway" | "Dine-in" | "Delivery" | "Collection";
  setOrderType: (type: "Takeaway" | "Dine-in" | "Delivery" | "Collection") => void;
}

const OrderTypeSelection: React.FC<OrderTypeSelectorProps> = ({ orderType, setOrderType }) => {
  const [selectedGroup, setSelectedGroup] = useState<"orderType" | "deliveryMethod">("orderType");
  const [takeawayDineIn, setTakeawayDineIn] = useState<"Takeaway" | "Dine-in">(orderType === "Takeaway" || orderType === "Dine-in" ? orderType : "Takeaway");
  const [deliveryMethod, setDeliveryMethod] = useState<"Delivery" | "Collection">(orderType === "Delivery" || orderType === "Collection" ? orderType : "Delivery");

  useEffect(() => {
    if (selectedGroup === "orderType") {
      setOrderType(takeawayDineIn);
    } else {
      setOrderType(deliveryMethod);
    }
  }, [takeawayDineIn, deliveryMethod, selectedGroup, setOrderType]);

  return (
    <div className="w-full p-2 border border-gray-300">
      <div className="flex space-x-2">
        <button
          className={`flex-1 py-2 mx-1 text-center font-medium rounded-lg cursor-pointer transition ${
            selectedGroup === "orderType" ? "bg-orange-500 text-white" : "bg-white text-gray-800"
          }`}
          onClick={() => setSelectedGroup("orderType")}
        >
          {takeawayDineIn}
        </button>

        <button
          className={`flex-1 py-2 mx-1 text-center font-medium rounded-lg cursor-pointer transition ${
            selectedGroup === "deliveryMethod" ? "bg-orange-500 text-white" : "bg-white text-gray-800"
          }`}
          onClick={() => setSelectedGroup("deliveryMethod")}
        >
          {deliveryMethod}
        </button>
      </div>

      <div className="w-full mt-2">
        {selectedGroup === "orderType" && (
          <div className="flex flex-col">
            <div className="flex items-center mb-2 justify-around">
              <span className="mr-2 font-sans text-sm font-semibold">Dine-in</span>
              <label className="relative inline-block w-12 h-6">
                <input
                  type="checkbox"
                  checked={takeawayDineIn === "Takeaway"}
                  onChange={() => setTakeawayDineIn(takeawayDineIn === "Takeaway" ? "Dine-in" : "Takeaway")}
                  className="sr-only"
                />
                <span className={`absolute inset-0 rounded-full bg-gray-300 transition-all ${takeawayDineIn === "Takeaway" ? "bg-orange-500" : "bg-gray-500"}`}></span> {/* The track */}
                <span className={`absolute left-0 top-0 w-6 h-6 rounded-full bg-white transition-all ${takeawayDineIn === "Takeaway" ? "transform translate-x-6" : ""}`}></span> {/* The thumb */}
              </label>
              <span className="ml-2 font-sans text-sm font-semibold">Takeaway</span>
            </div>
          </div>
        )}

        {selectedGroup === "deliveryMethod" && (
          <div className="flex flex-col mt-2">
            <div className="flex items-center mb-2 justify-between">
              <span className="mr-2 font-sans text-sm font-semibold">Collection</span>
              <label className="relative inline-block w-12 h-6">
                <input
                  type="checkbox"
                  checked={deliveryMethod === "Delivery"}
                  onChange={() => setDeliveryMethod(deliveryMethod === "Delivery" ? "Collection" : "Delivery")}
                  className="sr-only"
                />
                <span className={`absolute inset-0 rounded-full bg-gray-300 transition-all ${deliveryMethod === "Delivery" ? "bg-orange-500" : "bg-gray-500"}`}></span> {/* The track */}
                <span className={`absolute left-0 top-0 w-6 h-6 rounded-full bg-white transition-all ${deliveryMethod === "Delivery" ? "transform translate-x-6" : ""}`}></span> {/* The thumb */}
              </label>
              <span className="ml-2 font-sans text-sm font-semibold">Delivery</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderTypeSelection;