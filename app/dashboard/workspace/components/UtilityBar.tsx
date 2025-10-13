import { ChevronDown, ChevronLeft, Filter, Search } from 'lucide-react'
import React from 'react'

const UtilityBar = () => {
  return (
    <div className='flex gap-2'>
        <div className='flex gap-3 mr-4 items-center'>
            <p className='text-white/40 text-sm'>Phantom HQ</p>
            <ChevronLeft className='h-5 w-5 text-white/40' />
            <p className='text-white text-sm'>Select a repo to work with</p>
        </div>
        <div className='rounded-full items-center flex gap-2 bg-white/5 border border-white/7 py-[10px] px-4'>
        <Search className='w-[18px] h-[18px]' />
        <input type="text" placeholder='Search repos by name' className="outline-0 placeholder:text-white/20 text-white" />
        </div>
        <div className='rounded-full items-center flex gap-2 bg-white/5 border border-white/7 py-[10px] px-4 text-white'>
            <Filter className='h-[18px] w-[18px]' />
            Filters
        </div>
        <div className='rounded-full items-center flex gap-2 bg-white/5 border border-white/7 py-[10px] px-4 text-white/40'>
            <span className="text-white">2</span> repos created
        </div>
        <div className='rounded-full items-center flex gap-2 bg-white/5 border border-white/7 py-[10px] px-4 text-white'>
            Phantom HQ
            <ChevronDown className='h-[18px] w-[18px]' />
        </div>
    </div>
  )
}

export default UtilityBar