import React from "react"
import bug from "../assets/images/bug.png"
import firstday from "../assets/images/firstday.png"
import forty4 from "../assets/images/forty4.png"
import found from "../assets/images/found.png"
import man from "../assets/images/man.png"
import Gocash from "../assets/images/Gocash.png"
import kittycash from "../assets/images/kittycash.png"
import brokeasf from "../assets/images/brokeasf.png"
import Numb from "../assets/images/Numb.png"
const Musicpro =() => {
    return(
        <div>
            <div className="flex border-b-[5px] border-[#f20a0a] justify-between pt-[80px] mx-[120px]">
                <p className="font-bold">MUSIC</p>
                <img className="pb-[5px]"src={bug} alt="" />
            </div>
            <div className="flex justify-between pt-[30px] mx-[120px]">
               <div>
               <img src={firstday} alt="" />
               <h2 className="text-center bg-[#222222]  text-[#fff] p-2">Abby Jasmine - “First day out”</h2>
               </div>
               
                <div>
                <img src={forty4} alt="" />
                <h2 className="text-center bg-[#222222] text-[#fff] p-2">Bad Gyal - “44”</h2>
                </div>
            </div>
            <div className="flex justify-between pt-[30px] mx-[120px]">
                <div>
                <img src={found} alt="" />
                <h2 className="text-center bg-[#222222] text-[#fff] p-2">Benny Blanco - “Found You”</h2>
                </div>
               
                <div>
                <img src={man} alt="" />
                <h2 className="text-center bg-[#222222] text-[#fff] p-2">Contradash - “Way Out”</h2>
                </div>
            </div>
            <div className="flex justify-between pt-[30px] mx-[120px]">
               <div>
               <img src={Gocash} alt="" />
               <h2 className="text-center bg-[#222222] text-[#fff] p-2">Co Cash - “Diferrence”</h2>
               </div>
               
                <div>
                <img src={kittycash} alt="" />
                <h2 className="text-center bg-[#222222] text-[#fff] p-2">Kitty Cash - “Missing You”</h2>
                </div>
            </div>
            <div className="flex justify-between pt-[30px] pb-[70px] mx-[120px]">
                <div>
                <img src={brokeasf} alt="" />
                <h2 className="text-center bg-[#222222] text-[#fff] p-2">BrokeASF - Tooley</h2>
                </div>
               
                <div>
                <img src={Numb} alt="" />
                <h2 className="text-center bg-[#222222] text-[#fff] p-2">Brianna Castro - “Numb”</h2>
                </div>
            </div>
            <div className="justify-center text-center font-medium">
                <p>You can reach us right away. Let’s begin your project. <span className="text-[#f20a0a]">Write us a message.</span></p>
            </div>
        </div>
    )
}


export default Musicpro