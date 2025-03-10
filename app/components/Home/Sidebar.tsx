import React, { useState } from 'react'

import poslogo from '../../assets/poslogo.svg'
import dashboardicon from '../../assets/dashbordicon.svg'
import orderlisticon from '../../assets/orderlisticon.svg'
import historyicon from '../../assets/historyicon.svg'
import reportsicon from '../../assets/reportsicon.svg'
import settingsicon from '../../assets/settingsicon.svg'
import logouticon from '../../assets/logouticon.svg'


const menuItems = [
  {id: 1, name: "Home", icon: dashboardicon},
  {id: 2, name: "Order List", icon: orderlisticon},
  {id: 3, name: "History", icon: historyicon},
  {id: 4, name: "Reports", icon: reportsicon},
]

const Sidebar = () => {

  const [activeItem, setActiveItem] = useState(1)

  return (
    <aside className='flex flex-col justify-between items-center min-w-[100px] flex-shrink-0 h-full bg-white drop-shadow py-5'>

      {/* Logo container */}
      <div className='w-[52px] h-[52px] drop-shadow'>
        <img src={poslogo} alt='pos-logo' />
      </div>

      {/* Menu container */}
      <div className='flex flex-col min-h-[50px] min-w-[52px] drop-shadow'>
        <ul className='flex flex-col'>
          
          {menuItems.map((item) => (
            <li key={item.id} className='flex flex-col items-center p-2 cursor-pointer' onClick={() => setActiveItem(item.id)}>
            <img src={item.icon} alt={item.name} className='h-[24px] w-[24px]' />
            <span className={`text-xs font-sans mt-1 ${activeItem === item.id ? 'text-orange-500' : 'text-gray-500'}`}>{item.name}</span>
          </li>
          ))}
        </ul>

      </div>

      {/* Other container */}
      <div className='flex flex-col min-h-[50px] min-w-[52px] drop-shadow'>
        <ul className='flex flex-col'>
          <li className='flex flex-col items-center p-3 cursor-pointer'>
            <img src={settingsicon} alt='Settings' className='h-[24px] w-[24px]' />
            <span className='text-xs font-sans mt-1'>Settings</span>
          </li>
          <li className='flex flex-col items-center p-3 cursor-pointer'>
            <img src={logouticon} alt='Settings' className='h-[24px] w-[24px]' />
            <span className='text-xs font-sans mt-1'>Log Out</span>
          </li>
        </ul>
      </div>
    </aside>
  )
}

export default Sidebar