import React from 'react'
import Navdata from './Navdata'
import { Link } from 'react-router-dom'
import icon from '../../assest/Logo GLC-edited-white.png'
const Nav = (props) => {

    console.log(props)
    return (
        <div className='flex justify-between px-10 items-center h-[159px] border border-red-700'>
            <div className=''><img src={icon} alt="" className='w-[143px] h-[149px]' /></div>
            <div className='flex gap-5 items-center  cursor-pointer'>
                {
                    Navdata.map((items) => {
                        return (
                            <div className='text-black hover:text-[#7CB93C transition-[]'>{items.name}</div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Nav