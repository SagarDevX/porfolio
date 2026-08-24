import React from 'react'

const Quote = () => {
  return (
    <div className='w-full mt-8 p-8 rounded-2xl text-secondary shadow-[0_3px_10px_rgb(0,0,0,0.2)] dark:shadow-[0_10px_70px_rgba(5,5,5,1)]'>
        <h1 className='font-(--font-cormorant) text-shadow-xs text-xl italic'>
            "The details are not the details. They make the design. "
        </h1>
        <p className='w-full text-right text-shadow-xs'>
         — Charles Eames
        </p>
    </div>
  )
}

export default Quote