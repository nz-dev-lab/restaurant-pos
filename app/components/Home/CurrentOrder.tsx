import React, { useState } from "react";

interface OrderItem {
  id: number;
  title: string;
  quantity: number;
  price: number;
}

const CurrentOrder: React.FC = () => {
  const [orderItems, setOrderItems] = useState<OrderItem[]>([
    { id: 1, title: 'Grilled Chicken', quantity: 1, price: 8.99 },
    { id: 2, title: 'Mandi Rice', quantity: 2, price: 2.50 },
    { id: 3, title: 'Mandi Rice with grilled chicken with salad and dips', quantity: 2, price: 2.50 },
    { id: 4, title: 'Grilled Chicken', quantity: 1, price: 8.99 },
    { id: 5, title: 'Mandi Rice', quantity: 2, price: 2.50 },
    { id: 6, title: 'Mandi Rice with grilled chicken with salad and dips', quantity: 2, price: 2.50 },
  ]);

  const handleIncrement = (id: number) => {
    setOrderItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity: item.quantity + 1 } : item))
    );
  };

  const handleDecrement = (id: number) => {
    setOrderItems((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
      )
    );
  };

  const handleRemove = (id: number) => {
    setOrderItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="w-full flex flex-col">
      {orderItems.map((item) => (
        <div key={item.id} className="flex items-center px-3 py-2 border-b border-gray-200">
          {/* Title */}
          <div className="w-[180px] truncate" title={item.title}>
            <span className="font-semibold text-lg">{item.title}</span>
          </div>

          {/* Quantity Selector */}
          <div className="flex items-center space-x-2 w-[100px] justify-center">
            <button
              className="h-[30px] w-[30px] bg-gray-200 rounded"
              onClick={() => handleDecrement(item.id)}
            >
              -
            </button>
            <span className="text-lg">{item.quantity}</span>
            <button
              className="h-[30px] w-[30px] bg-gray-200 rounded"
              onClick={() => handleIncrement(item.id)}
            >
              +
            </button>
          </div>

          {/* Total Price */}
          <div className="w-[80px] text-center font-semibold text-lg">{(item.price * item.quantity).toFixed(2)}</div>

          {/* Remove Button */}
          <button className="ml-auto text-red-500 text-lg" onClick={() => handleRemove(item.id)}>
            ✖
          </button>
        </div>
      ))}
    </div>
  );
};

export default CurrentOrder;




