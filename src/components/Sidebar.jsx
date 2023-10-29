// eslint-disable-next-line no-unused-vars
import React from 'react'  

import {
  HomeIcon, BellIcon,
  ChartBarIcon,
  CreditCardIcon,
  DocumentSearchIcon,
  ExternalLinkIcon,
  MailIcon,
  ArrowUpIcon
} from '@heroicons/react/solid'

const Sidebar = () => {
  return (
    <div className="bg-slate-800 flex-none w-14 sm:w-20 h-screen">
      <div className='h-20 items-center flex'>

        <HomeIcon width={40} className='text-white left-3 sm:left-6 fixed' />

        <div className='fixed left-3 sm:left-6 top-[100px]'>
          <ChartBarIcon width={40} className='text-gray-300 bg-gray-600 p-2 mb-4 rounded-lg' />
          <DocumentSearchIcon width={40} className='text-gray-300 bg-gray-600 p-2 mb-4 rounded-lg' />
          <MailIcon width={40} className='text-gray-300 bg-gray-600 p-2 mb-4 rounded-lg' />
          <CreditCardIcon width={40} className='text-gray-300 bg-gray-600 p-2 mb-4 rounded-lg' />
          <BellIcon width={40} className='text-gray-300 bg-gray-600 p-2 mb-4 rounded-lg' />
        </div>

        <div className='fixed left-3 sm:left-6 bottom-4'>
          <a href='#top'>
            <ArrowUpIcon width={40} className='text-gray-300 bg-gray-600 p-2 mb-4 rounded-lg' />
          </a>
          <ExternalLinkIcon width={40} className='text-gray-300 bg-gray-600 p-2 mb-4 rounded-lg' />
        </div>
      </div>
    </div>
  )
}

export default Sidebar