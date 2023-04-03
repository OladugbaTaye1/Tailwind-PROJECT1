import React from "react"
import background from "../assets/images/background.png"
const BookSession =() => {
    return(
        <div className="">
            <div className="relative pt-[100px]">
                <img src={background} alt="" />
                <h1 className="absolute top-[50%] left-[25%] text-[#fff] font-bold text-[4vw]">Book a studio session today!</h1>
            </div>

        </div>
    )
}


export default BookSession