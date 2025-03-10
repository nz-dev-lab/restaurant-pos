import React from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'; // Import useSelector and useDispatch
import { addSelectedItem, removeSelectedItem } from '~/utils/redux/actions/orderActions';// Import your actions
import type { MenuItem } from '~/utils/redux/types/orderTypes'; // Import MenuItem type


interface OrderItem {
  id: number;
  title: string;
  quantity: number;
  price: number;
  notes?: string;
}

interface CurrentOrderCompProps {
  orderItems: OrderItem[];
  onOrderChange: (newOrderItems: OrderItem[]) => void;
}

const CurrentOrderComp: React.FC = () => {

  const dispatch = useDispatch(); // Get the dispatch function
  const selectedItems = useSelector((state: { order: { selectedItems: MenuItem[] } }) => state.order.selectedItems); // Access selectedItems from the Redux store


    const [expandedItemId, setExpandedItemId] = useState<number | null>(null);
    const handleIncrement = (item: MenuItem) => {
      dispatch(addSelectedItem({ ...item, quantity: 1 })); // Dispatch the action to add the item (or update quantity)
    };
  
    const handleDecrement = (item: MenuItem) => {
      if (item.quantity > 1) {
        dispatch(addSelectedItem({ ...item, quantity: -1 })); // Dispatch the action to decrement the item (or update quantity)
      } else {
        dispatch(removeSelectedItem(item.id)); // Dispatch the action to remove the item if quantity is 1
      }
    };

  const handleRemove = (id: number) => {
    dispatch(removeSelectedItem(id));
  };

  const toggleExpand = (id: number) => {
    setExpandedItemId(expandedItemId === id ? null : id);
  };

  const handleNoteChange = (id: number, notes: string) => {
    // onOrderChange(orderItems.map(item => item.id === id ? { ...item, notes } : item));
  };

  return (
    <div className="w-full flex flex-col">
      {selectedItems.map((item) => (
        <div key={item.id} className={`flex flex-col gap-y-2 w-full min-h-[80px] py-2 border-b border-gray-200 ${expandedItemId === item.id ? 'bg-gray-100 px-2 rounded-md' : 'bg-white'}`}>
          {/* Title Section */}
          <div className='flex-1 overflow-hidden break-words leading-tight pr-2 cursor-pointer' onClick={() => toggleExpand(item.id)} title={item.name}>
            <span className='font-sans font-semibold text-sm text-slate-900'>{item.name}</span>
          </div>

          {/* Actions Section */}
          <div className='flex items-center justify-between'>
            {/* Quantity Controls */}
            <div className='flex items-center space-x-2'>
              <button className='h-[30px] w-[30px] bg-gray-200 rounded' onClick={() => handleDecrement(item)}>-</button>
              <span className='text-md font-semibold'>{item.quantity}</span>
              <button className='h-[30px] w-[30px] bg-gray-200 rounded' onClick={() => handleIncrement(item)}>+</button>
            </div>

            {/* Total Price */}
            <div className='text-md font-semibold text-slate-900'>
              £{(item.price * item.quantity).toFixed(2)}
            </div>

            {/* Remove Button */}
            <button className='text-red-500' onClick={() => handleRemove(item.id)}>X</button>
          </div>

          {/* Expandable Section */}
          {expandedItemId === item.id && (
            <div className='mt-3'>
              <textarea
                className='w-full p-2 border rounded-md text-sm'
                rows={2}
                placeholder='Add notes or special instructions...'
                value={item?.notes || ''}
                onChange={(e) => handleNoteChange(item.id, e.target.value)}
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CurrentOrderComp;
