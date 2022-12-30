import { Routes, Route } from "react-router-dom";
import {Footer} from "../components/footer/Footer";

// import { Navbar } from "../components/navbar/Navbar";
// import {Home } from "../components/home/Home"

const Router = ()=>{
    return (
    <Routes>
        <Route path="/" element={<Footer/>}></Route>
    </Routes>)
}

export {Router};
