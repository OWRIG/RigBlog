import React from "react";
import Header from "../components/Header";
import Tree from "../components/Tree";
// import ImgPage from "../components/ImgPage";
import Footer from "../components/Footer";


export default function Index() {
  return (
    <div>
      <Header></Header>

      <Tree></Tree>

      {/* <ImgPage></ImgPage> */}
      <Footer></Footer>
    </div>
  );
}
