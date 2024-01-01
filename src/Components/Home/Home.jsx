import React from 'react'
import Aboutus from '../About/Aboutus'
import Services from '../OurService/Services'
import { Blogs } from '../Blogs/Blogs'
import { Contact } from '../Contactus/Contact'
import { Footer } from '../Navigation/Footer'

const Home = () => {
    return (
        <div>
            <div className='flex flex-col items-center justify-center '>
                <div className='flex flex-col justify-center  items-center'>
                    <h1 className='font-Commissioner font-bold text-[40px] text-[#fff] bg-black capitalize'>
                        We Believe That All People, <br />
                        No Matter Their Disability,
                    </h1>
                    <p className='text-[23px] font-normal font-Commissioner text-[#fff] bg-black capitalize'>have the same rights and should be given the same <br />
                        opportunities to explore learning and work in the community</p>
                </div>
                <div className='my-5'>
                    <button className='w-[154px] h-[49px] bg-[#7CB93C] rounded-3xl'>LEARN MORE</button>
                    <button className='w-[154px] h-[49px] bg-[#FA4219] rounded-3xl'>CONTACT US</button>
                </div>
            </div>
            <div>
                <Aboutus />
                <Services />
                <Blogs />
                <Contact />
                <Footer />
            </div>
        </div>
    )
}

export default Home