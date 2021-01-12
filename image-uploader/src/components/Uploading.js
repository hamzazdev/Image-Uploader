import React from 'react'
import { useHistory } from "react-router-dom";

const Uploading = () => {
    const history = useHistory();
    setTimeout(() => {
       history.push('/share') 
    }, 1500);

    return (
        <>
            <h3 className='text-2xl font-medium text-gray-800'>Uploading...</h3>
            <div className="flex justify-around">
                <span className="inline-flex rounded-md shadow-sm">
                        <svg className="animate-spin -ml-1 mr-3 h-10 w-10 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="#3b82f6" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                </span>
            </div>
        </>
    )
}

export default Uploading