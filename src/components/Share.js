import React from 'react'
import CheckCircleOutlineRoundedIcon from '@material-ui/icons/CheckCircleOutlineRounded';

const Share = ({ imageUrl = 'http://localhost:3001/36d8f75ea936c7e24d60c0edde25d53489bcc2d2.png' }) => {
    
    const copyToClibboard = (e, text) => {
        const blob = new Blob([text], { type: 'text/plain' });
         // eslint-disable-next-line no-undef
        let data = [new ClipboardItem({ [blob.type]: blob })];
        navigator.clipboard.write(data)
        e.target.innerHTML = "Done!"
    }

    return (
        <>
            <div className='text-5xl p-2'><CheckCircleOutlineRoundedIcon htmlColor='#219653' fontSize='inherit' /></div>
            <h3 className='text-2xl font-medium text-gray-800'>Uploaded Successfully!</h3>
            <div className='grid'>
                <a className='place-self-center' alt='Press to go to image' href={imageUrl} target='_blank' rel='noopener noreferrer'><img alt='Description' className='max-w-full' src={imageUrl} /></a>
                <form className="mt-4 flex" onSubmit={e => e.preventDefault()}>
                    <input className="w-4/5 rounded-md p-2 border-t border-b border-l text-sm truncate text-gray-800 border-gray-200 bg-white" type='text' value={`${imageUrl}`} readOnly />
                    <button className="w-1/5 p-2 rounded-md bg-blue-500 text-white font-bold border border-blue-500" onClick={(e) => copyToClibboard(e, imageUrl)}>Copy Link</button>
                </form>
            </div>
        </>
    )
}

export default Share