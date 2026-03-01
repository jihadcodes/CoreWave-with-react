import logo from '../../assets/images/Logo.png'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
        <div className="container">
            <div className="flex pt-25 pb-3.5">
                <div className="w-[25%]">
                    <img src={logo} alt="" className='mb-6.5 ' />
                    <span className='mb-1 font-lato font-regular text-[14px] leading-5.5 text-[#7B7B7B]'>jihad.dev.pro@gmail.com</span>
                    <p className='mb-5 font-lato font-regular text-[14px] leading-5.5 text-[#7B7B7B]'>+88 01767630044</p>
                    <div className="flex   gap-[7.41px] text-white ">
                        <FaFacebookF  className='w-8 h-8 bg-[#06C279] rounded-full ' />
                        <FaTwitter  className='w-8 h-8 bg-[#06C279] rounded-full ' />
                       <FaLinkedinIn  className='w-8 h-8 bg-[#06C279] rounded-full ' /> 
                       <FaBehance  className='w-8 h-8 bg-[#06C279] rounded-full ' />
                    </div>
                </div>
                <div className="w-[25%]">fdf</div>
                <div className="w-[25%]">df</div>
                <div className="w-[25%]">fdf</div>
            </div>
        </div>
    </footer>
  )
}

export default Footer
