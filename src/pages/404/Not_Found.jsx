import React from 'react'

const Not_found = () => {
  return (
    <div className="w-screen min-h-screen flex items-center justify-center">
        <div className="flex flex-col gap-5">
            <p className="text-6xl font-bold text-red-500">404</p>
            <p className="text-xl">Page Not Found</p>
        </div>
    </div>
  )
}

export default Not_found