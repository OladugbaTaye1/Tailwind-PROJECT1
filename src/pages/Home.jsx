import Header from "../component/header"
import Hsession1 from "../component/Hsession1"
import Hsession2 from "../component/Hsession2"
import Hdiv from "../component/Hdiv"
import Hcompanies from "../component/Hcompanies"
import Footer from "../component/footer"
import { useEffect, useState } from "react"
const Home =() => {
   
    return(
        <>
        <Header/>
        <Hsession1/>
        <Hsession2/>
        <Hdiv/>
        <Hcompanies/>
        <Footer/>
        </>
    )
} 



export default Home