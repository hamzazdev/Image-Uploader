import React from 'react'

const BackgroundBox = ({ children }) => {
    return (
        <div className='w-402 px-8 py-10 bg-white rounded-md text-center shadow font-Poppins'>
            {children}
        </div>
    )
}

export default BackgroundBox