import React from 'react'

const Servicecart = ({ image, service }) => {
    return (
        <div className='w-[189px] h-[170px]   flex flex-col justify-center items-center bg-[#FFF] rounded-2xl flex-wrap'>
            <div className='w-[80px] h-[80px]  flex justify-center'>{image}</div>
            <div className='text-center  w-[170px] h-[50px]'>{service}</div>
        </div>
    )
}

export default Servicecart