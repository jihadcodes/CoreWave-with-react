import React from 'react'
import logo  from '../../assets/images/Logo.png'

const Navbar = () => {
  return (
    <>
    <section className='bg-[#EEFFF9]'>
        <div className="container">
            <div className="flex justify-between py-6.5 items-center">
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <div className="right flex justify-between items-center gap-[142px]">
                    <div className="menu">
                        <ul className='flex gap-11.25'>
                            <li><a href="">Home</a></li>
                            <li><a href="">About</a></li>
                            <li><a href="">Portfolio</a></li>
                            <li><a href="">Services</a></li>
                            <li><a href="">Blog</a></li>
                            <li><a href="">Testimonial</a></li>
                        </ul>
                    </div>
                    <div className="btn">
                        <button className='py-3.5 px-6.25 text-[16px ] cursor-pointer font-lato font-semibold bg-[#06C279] text-white rounded-[5px]'>Register</button>
                    </div>

                </div>
            </div>
        </div>
   </section>
    </>
  )
}

export default Navbar