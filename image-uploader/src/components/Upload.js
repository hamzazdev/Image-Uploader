import React from 'react'
import ImageUploadBackground from './ImageUploadBackground.svg'
import { useHistory } from "react-router-dom";

const ImageUpload = ({ uploadImage }) => {
    const history = useHistory();

    const isImage = file => {
        //Checks that the file is actual and image type
        if (file.type.match(/image\/[a-z]*/) != null) {
            return true
        }
    }

    const dragHandler = e => {
        switch (e.type) {
            case 'dragenter':
                e.preventDefault(e)
                e.target.classList.add('border-4', 'animate-pulse')
                break;
            case 'dragover':
                e.preventDefault(e)
                e.target.classList.add('border-4', 'animate-pulse')
                break;
            case 'dragleave':
                e.preventDefault(e)
                e.target.classList.remove('border-4', 'animate-pulse')
                break;
            case 'drop':
                e.target.classList.remove('border-4', 'animate-pulse')
                if (e.dataTransfer.files.length > 0 && isImage(e.dataTransfer.files[0])) {
                    e.preventDefault(e) //prevents broweser default action (opening the file in new tab usually)
                    const image = e.dataTransfer.files[0]
                    uploadImage(image)
                    history.push('/uploading')
                }
                break;
            default:
                return e
        }
    }

    const formSubmitHandler = () => {
        const image = new FormData(document.forms[0]).get('newPhoto')
        if (image.name !== "" && isImage(image)) {
            uploadImage(image)
            history.push('/uploading')
        }
    }
    
    return (
        <>
            <h3 className='text-2xl font-medium text-gray-800'>Upload your image</h3>
            <p className='text-md font-light text-gray-400'>File should be .jpeg, .png...</p>
            <div
                onDragEnter={e => dragHandler(e)}
                onDragOver={e => dragHandler(e)}
                onDragLeave={e => dragHandler(e)}
                onDrop={e => dragHandler(e)}
                className=' rounded-md border-dashed border-2 border-blue-300 min-w-full my-10 bg-gray-100 text-center p-3 py-5 flex flex-wrap justify-center content-center'
                >
                <img width='75%' alt='drag here to upload' src={ImageUploadBackground} />
                <p className=' my-5 text-md font-light text-gray-400'>Drag & Drop your image here</p>
            </div>
            <p className=' my-5 text-md font-light text-gray-400'>Or</p>
            <form id="my-form">
                <label className='p-3 bg-blue-500 text-white rounded w-1/2 hover:bg-blue-700 cursor-pointer' htmlFor='newPhoto'>Choose a file</label>
                <input type='file' accept='image/*' name='newPhoto' id='newPhoto' className='invisible' onChange={() => formSubmitHandler()}/>
            </form>
        </>
    )
}

export default ImageUpload