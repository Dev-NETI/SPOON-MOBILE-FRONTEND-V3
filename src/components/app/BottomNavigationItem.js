import React from 'react'
import Link from 'next/link'

function BottomNavigationItem({route,children,label}) {
  return (
   
    <Link href={route}>
      <button type="button" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 group">
           {children}
        </button>

    </Link>

  )
}

export default BottomNavigationItem
