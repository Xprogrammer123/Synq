import Image from 'next/image'
import React from 'react'

const EmptyWorkspace = () => {
  return (
    <div className='w-full py-16 gap-5 h-full flex flex-col items-center justify-center'>
        <Image src="/workspace.png" alt="user" width={100} height={100} />
        <div className='flex text-center flex-col gap-2'>
            <h1 className='text-[2.5rem] leading-[0.9] font-semibold'>Let’s get something cooking!</h1>
            <p className='text-white/40 text-[15px]'>You haven’t added any repos yet, spin up your first one and start building.</p>
        </div>
        <button className="px-7 py-[14px] cursor-pointer relative overflow-hidden mx-auto bg-[#6B48FF] rounded-full text-white font-medium transition flex items-center justify-center gap-2">
            Add New Repo
            <span className="bg-white w-48 mx-auto -bottom-10 h-12 absolute blur-xl"></span>
          </button>
    </div>
  )
}

export default EmptyWorkspace