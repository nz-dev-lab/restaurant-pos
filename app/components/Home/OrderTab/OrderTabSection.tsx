import React, { useState, useRef, useEffect } from "react";
import OrderTypeSelection from "./OrderTypeSelector";
import OrdersActions from "./OrderActions/OrdersActions";
import OrderSummaryComps from "./OrderSummaryComps";
import CurrentOrderComp from "./CurrentOrdersComps";


const OrderTabSection: React.FC = () => {
  const [orderType, setOrderType] = useState<"Takeaway" | "Dine-in" | "Delivery" | "Collection">("Takeaway");
  const [orderItems, setOrderItems] = useState([
    { id: 1, title: 'Grilled Chicken', quantity: 1, price: 8.99 },
    { id: 2, title: 'Mandi Rice', quantity: 2, price: 2.50 },
    { id: 3, title: 'Mandi Rice with grilled chicken with salad and dips', quantity: 2, price: 2.50 },
    { id: 4, title: 'Grilled Chicken', quantity: 1, price: 8.99 },
    { id: 5, title: 'Mandi Rice', quantity: 2, price: 2.50 },
    { id: 6, title: 'Mandi Rice with grilled chicken with salad and dips', quantity: 2, price: 2.50 },
    { id: 7, title: 'Grilled Chicken', quantity: 1, price: 8.99 },
    { id: 8, title: 'Mandi Rice', quantity: 2, price: 2.50 },
    { id: 9, title: 'Mandi Rice with grilled chicken with salad and dips', quantity: 2, price: 2.50 },
  ]);

  const orderActionsRef = useRef<HTMLDivElement>(null); // Ref for OrderActions div
  const [paddingBottom, setPaddingBottom] = useState(90); // Initial padding

  useEffect(() => {
    if (orderActionsRef.current) {
      const height = orderActionsRef.current.offsetHeight; // Get height of OrderActions
      setPaddingBottom(height + 16); // Padding = height + some extra space (16px)
    }
  }, [orderType]); // Recalculate padding whenever orderType changes

  // Calculate the total
  const total = orderItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  // Update orderItems when changes are made (e.g., increment, decrement, remove)
  const handleOrderChange = (newOrderItems: any) => {
    setOrderItems(newOrderItems);
  };

  return (
    <div className="flex flex-1 relative flex-col h-full">
      <OrderTypeSelection orderType={orderType} setOrderType={setOrderType} />

      <div className="flex-1 overflow-y-auto p-4" style={{ paddingBottom: `${paddingBottom}px` }}>
        <CurrentOrderComp  />
      </div>

      <div className="border-t-3 border-gray-900 bg-white absolute bottom-0 w-full" ref={orderActionsRef}>
        <OrderSummaryComps orderType={orderType} totalAmount={total} />
        <OrdersActions orderType={orderType} />
      </div>
    </div>
  );
};

export default OrderTabSection;
