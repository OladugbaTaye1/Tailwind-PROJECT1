import React from "react"
import headset from "../assets/images/headset.svg"
const Hsession1 =() => {
    return(
        <div className="flex justify-between items-center bg-[#000000] pt-[80px] pb-[20px] px-[170px] w-full">
           <div>
                <h5 className="text-[#fff] font-bold text-4xl pb-[30px] pr-77">When words fail, <span className="text-[#f20a0a]"> Music </span>speaks.</h5>
                <p className="text-[#FFFFFF] font-light italic text-1xl pb-[25px]">This is the home of music!</p>
                <button className="bg-[#fff] text-[#f20a0a] font-bold px-[15px] pt-[5px] pb-[5px] rounded-lg cursor-pointer hover:bg-red-700 hover:text-[#fff]">Book an artiste.</button>
           </div>
           <div>
                <img src={headset} alt="logo"/>
           </div>
        </div>
    )
}


export default Hsession1