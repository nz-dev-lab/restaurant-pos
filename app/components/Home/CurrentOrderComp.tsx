import React, {useState} from 'react';
interface OrderItem {
    id: number;
    title: string;
    quantity: number;
    price: number;
    notes?: string;
  }

const CurrentOrderComp: React.FC = () => {
    const [orderItems, setOrderItems] = useState<OrderItem[]>([
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

      const [expandedItemId, setExpandedItemId] = useState<number | null>(null);

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

      const toggleExpand = (id: number) => {
        setExpandedItemId(expandedItemId === id ? null : id);
      };

      const handleNoteChange = (id: number, notes: string) => {
        setOrderItems((prev) =>
            prev.map((item) => (item.id === id ? { ...item, notes } : item))
        );
    };
    return(

        <div className='w-full flex flex-col'>
            {orderItems.map((item) => (
  <div className={`flex flex-col gap-y-2 w-full min-h-[80px] py-2 border-b border-gray-200 ${expandedItemId === item.id ? 'bg-gray-100 px-2 rounded-md' : 'bg-white'}`}>
    
    {/* Title Section (50% of available height) */}
    <div className='flex-1 overflow-hidden break-words leading-tight pr-2 cursor-pointer' onClick={()=> toggleExpand(item.id)} title={item.title}>
      <span className='font-sans font-semibold text-sm text-slate-900'>{item.title}</span>
    </div>

    {/* Actions Section (Remaining space) */}
    <div className='flex items-center justify-between flex-1'>
      {/* Quantity Controls */}
      <div className='flex items-center space-x-2'>
        <button className='h-[30px] w-[30px] bg-gray-200 rounded' onClick={(e) => {e.stopPropagation(); handleDecrement(item.id);} }>-</button>
        <span className='text-md font-semibold'>{item.quantity}</span>
        <button className='h-[30px] w-[30px] bg-gray-200 rounded' onClick={(e) => {e.stopPropagation(); handleIncrement(item.id);}}>+</button>
      </div>

      {/* Total Price */}
      <div className='text-md font-semibold text-slate-900'>
        £{(item.price * item.quantity).toFixed(2)}
      </div>

      {/* Remove Button */}
      <button className='text-red-500' onClick={(e) => {e.stopPropagation(); handleRemove(item.id);}}>X</button>
    </div>
     {/* Expandable Section */}
     {expandedItemId === item.id && (
             <div className='mt-3'>
             <textarea
                 className='w-full p-2 border rounded-md text-sm'
                 rows={2}
                 placeholder='Add notes or special instructions...'
                 value={item.notes || ''}
                 onChange={(e) => handleNoteChange(item.id, e.target.value)}
             />
         </div>)}
  </div>
))}

        </div>
    )
}


export default CurrentOrderComp;