import React from 'react'
import ContactData from './ContactData'
import image from '../../assest/contact/neonbrand-qo6_mo9dsYg-unsplash.png'
import borderline from '../../assest/contact/borderline.svg'
import logo from '../../assest/Logo GLC-edited-white.png'
import Navdata from '../Navigation/Navdata'

export const Contact = (props) => {



    return (
        <div>
            <div className=" flex justify-around items-center">
                <div className='flex flex-col justify-center'>
                    <h3>CONTACT US</h3>
                    <h1>Speak To Us</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p>


                    <div>
                        {ContactData.map((items) => {
                            return (
                                <div className='flex items-center gap-3 mt-5'>
                                    <div className='w-10'>{items.icon}</div>

                                    <div className='flex flex-col justify-center'>
                                        <div>{items.title}</div>
                                        <div>{items.data}</div>
                                    </div>
                                </div>
                            )

                        })}
                    </div>
                </div>
                <div>
                    <img src={image} alt="" className='' />
                </div>
            </div>
            <img src={borderline} alt="" className=' w-full' />

            <div>
                <div><img src={logo} alt="" /></div>
                <div>social media icons</div>
                <div>
                    {Navdata.map((items) => {
                        return (
                            <div>{items.name}</div>
                        )
                    })}
                    <div>
                        PRIVACY POLICY
                    </div>
                    <div>TERMS OF USE</div>
                </div>
            </div>

        </div>
    )
}
