import React from 'react'
import icon1 from '../../assest/service/icon1.svg'
import icon2 from '../../assest/service/icon2.svg'
import icon3 from '../../assest/service/icon3.svg'
import icon4 from '../../assest/service/icon4.svg'
import icon5 from '../../assest/service/icon5.svg'
import borderline from '../../assest/service/borderline.svg'
import Servicecart from './Servicecart'

const Services = () => {
    return (
        <div className='flex flex-col items-center justify-center'>
            <h3 className='text-[18px] font-bold font-Commissioner text-[#F94A23]'>OUR SERVICES</h3>
            <h1 className='text-[40px] font-bold font-Commissioner text-[#FFF] bg-black'>What We Offer</h1>
            <p className='text-[17px] text-center font-normal font-Commissioner text-[#FFF] bg-black'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div className='flex flex-wrap gap-4'>
                <Servicecart
                    image={<img src={icon1} alt='' />}
                    service='Lawn Mowing
                    and Edging'
                />
                <Servicecart
                    image={<img src={icon2} alt='' />}
                    service='Tree and
                    Shrub Trimming'
                />
                <Servicecart
                    image={<img src={icon3} alt='' />}
                    service='Flower Gardens; 
                    Maintenance & Design'
                />
                <Servicecart
                    image={<img src={icon4} alt='' />}
                    service='Vegetable / Herb 
                    Gardens;  Maintenance 
                    & Design'
                />
                <Servicecart
                    image={<img src={icon5} alt='' />}
                    service='Landscaping'
                />

            </div>
            <img src={borderline} alt="" className='w-full' />
        </div>
    )
}

export default Services