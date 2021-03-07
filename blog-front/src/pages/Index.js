import React from "react";
import Header from "../components/Header";
import Tree from "../components/Tree";
// import ImgPage from "../components/ImgPage";
import Footer from "../components/Footer";
import Img from "../components/Img";

export default function Index() {
    const width = document.documentElement.clientWidth;
    console.log(width);

    const a = width < 500 ? true : false;

    return (
        <div>
            <Header></Header>
            <Tree></Tree>
            <Footer></Footer>
            {!a ? <Img></Img> : <div></div>}
        </div>
    );
}
