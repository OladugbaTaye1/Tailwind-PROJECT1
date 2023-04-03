import React from "react"
import comp from "../assets/images/comp.png"
const Hcompanies =() => {
    return(
        <div className="grid bg-[#E5E5E5] justify-center items-center pt-[40px]">
            <div className="pb-[70px]">
                <img src={comp} alt="" />
            </div>
            <div className="justify-center text-center font-medium">
                <p>You can reach us right away. Let’s begin your project. <span className="text-[#f20a0a]">Write us a message.</span></p>
            </div>
        </div>
    )
}


export default Hcompanies