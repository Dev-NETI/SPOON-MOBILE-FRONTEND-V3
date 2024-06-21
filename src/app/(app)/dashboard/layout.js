import React from 'react'
import Image from 'next/image'
import icon from '../../../../public/assets/app/icons/plate.png'

function layout({children}) {
  return (
    <div className='flex flex-col'>

        <div className='basis-7 bg-main-bg flex flex-col'> 
           <div className='basis-full px-4 py-4'>
                <p className='text-slate-50 text-2xl font-semibold'>
                The Seafarers Cookbook
                </p>
            </div>
            <div className='basis-full flex flex-row'>
              <div className='basis-8/12 px-4'>
               <p className='text-slate-50'>
                 Tasty Recipes for a healthy Onboard Life
               </p>
              </div>
             <div className='basis-4/12'>
                <Image src={icon} width={200} height={200}/>
             </div>
            </div>
        
         </div>

        <div className='basis-full bg-red-800'>
            {children}
        </div>
      
    </div>
  )
}

export default layout
