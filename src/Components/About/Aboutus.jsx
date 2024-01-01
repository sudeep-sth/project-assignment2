import React from 'react'
import group from '../../assest/Group 17.png'
const Aboutus = () => {
    return (
        <div className='flex justify-center'>
            <div className='flex justify-around w-[1300px]'>
                <div className='flex flex-col justify-center'>
                    <h3 className='text-[#333] text-[18px] font-bold font-Commissioner'>ABOUT US</h3>
                    <h1 className='text-[40px] font-bold font-Commissioner text-[#F94A23] w-96 overflow-visible '>Welcome to <br />
                        Hurdle Gardening</h1>
                    <div className='w-[488px] h-[142px] '>
                        <p className='font-normal font-Commissioner text-[18px] text-[#7B7B7B]'>Hurdle is a contemporary and innovative service provider, working solely with people with a disability funded with supports from the National Disability Insurance Agency. Hurdle differs from other organisations with their structure of supports. </p>
                    </div>
                    <div>
                        <button className='w-[154px] h-[49px] bg-[#7CB93C] rounded-3xl'>LEARN MORE</button>
                    </div>
                </div>

                <div>
                    <img src={group} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Aboutus