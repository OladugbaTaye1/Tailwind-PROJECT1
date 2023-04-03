import React from "react"
import arts from "../assets/images/GroupArt.png"
import mic from "../assets/images/mic.png"
const Hsession2 =() => {
    return(
        <div className="bg-[#E5E5E5] pt-[80px] pb-[40px] px-[80px] w-full">
           <div className="flex justify-between items-center">
                <div>
                    <h1 className="font-normal text-[30px] pt-[90px] pb-[5px] w-[505px] ">We are home to the very best talents & artistes, leading the  music industry.
                    </h1>
                    <p className="font-light text-[18px] pb-[5px] w-[436px]">
                    Mocking by Jay has maintained a strong and innovative
                    push to promote capacity building and creativity that
                    showcase the richness and diversity of the Music
                    culture via story-telling.
                    </p>
                    <button className="bg-[#000000] text-[#fff] font-medium px-[15px] pt-[5px] pb-[5px] cursor-pointer hover:bg-red-700 hover:text-[#fff]">Learn more
                    </button>
                </div>
                <div>
                    <img src={arts} alt="logo"/>
                </div>
           </div>

           <div className="flex justify-between items-center pt-[80px]">
                <div>
                    <img src={mic} alt="" />
                </div>
                <div className="ml-[70px]">
                    <h1 className="font-normal text-[30px] pb-[5px] w-[641px]">We license, distribute and publish rich musiccal
                        content for artistes, song writers and producers.
                    </h1>
                    <p className="font-light text-[18px] pb-[5px] w-[438px]">
                    We have a transparent structure ensuring that revenues made through content distribution get to these artistes, producers and songwriters as due them.
                    We are a music company that is more artistic with extra support that ensures result for our signed talents.
                    </p>
                    <button className="bg-[#000000] text-[#fff] font-medium px-[15px] pt-[5px] pb-[5px] cursor-pointer hover:bg-red-700 hover:text-[#fff]">Learn more
                    </button>
                </div>
            </div>

        </div>
        
    )
}


export default Hsession2