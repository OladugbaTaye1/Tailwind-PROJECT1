import React from "react"
import artiste1 from "../assets/images/artiste1.png"
import artiste2 from "../assets/images/artiste2.png"
import artiste3 from "../assets/images/artiste3.png"
import artiste4 from "../assets/images/artiste4.png"
import artiste5 from "../assets/images/artiste5.png"
import artiste6 from "../assets/images/artiste6.png"
import artiste7 from "../assets/images/artiste7.png"
import artiste8 from "../assets/images/artiste8.png"
import artiste9 from "../assets/images/artiste9.png"
import Artistes from "../assets/images/Artistes.png"
import searchicon from "../assets/images/searchicon.svg"

const Aprofile =() => {
    return(
        <div className="bg-[#fff] pt-[100px] w-full">
            <div className="flex justify-between px-[80px]">
                <p>Meet our Top Artistes</p>
                <div className="flex border-[1px] p-1 mb-1 rounded-lg">
                    <input type="text" placeholder="Search"/>
                    <img src={searchicon} alt="" />
                </div>
            </div>
            <div className="flex justify-between items-center px-[80px] pb-[50px]">
                <div>
                <img src={artiste1} alt="" />
                <h2>Abby Jasmine</h2>
                </div>
                
                <div>
                <img src={artiste2} alt="" />
                <h2>Brianna Castro</h2>
                </div>
               
                <div>
                <img src={artiste3} alt="" />
                <h2>Aviici</h2>
                </div>
            </div>
            <div className="flex justify-between items-center px-[80px] pb-[50px]">
                <div>
                <img src={artiste4} alt="" />
                <h2>BrokeASF</h2>
                </div>
                
                <div>
                <img src={artiste5} alt="" />
                <h2>Benny Blanco</h2>
                </div>
               
                <div>
                <img src={artiste6} alt="" />
                <h2>Bad Gyal</h2>
                </div>
            </div>
            <div className="flex justify-between items-center px-[80px] pb-[50px]">
                <div>
                <img src={artiste7} alt="" />
                <h2>Co Cash</h2>
                </div>
               
                <div>
                <img src={artiste8} alt="" />
                <h2>Contradash</h2>
                </div>
               
                <div>
                <img src={artiste9} alt="" />
                <h2>Kitty Cash</h2>
                </div>
            </div>
            <div className=" pb-[80px] ">
            <img src={Artistes} alt="" />
            </div>
            <div className="justify-center text-center font-medium">
                <p>You can reach us right away. Let’s begin your project. <span className="text-[#f20a0a]">Write us a message.</span></p>
            </div>
        </div>
    )
}


export default Aprofile