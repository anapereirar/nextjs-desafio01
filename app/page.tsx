import Image from "next/image";
import Logo from "../app/images/logo_talentotech.svg";
import Link from "next/link";
import Header from "./components/header/page";
import Sidebar from "./components/sidebar/page";
import RightSide from "./components/rightside/page";
import Footer from "./components/footer/page";
import Main from "./components/main/page";


export default function Home() {
  return (
    <>
    <Header />
    
    <div className="mx-auto flex w-full max-w-8xl flex-auto justify-center sm:px-2 lg:px-8 xl:px-12">
    <Sidebar/>
    {/* <div className="min-w-0 max-w-2xl flex-auto px-4 py-16 lg:max-w-none lg:pl-8 lg:pr-0 xl:px-16"> */}
     <Main/>
     <RightSide/>
    {/* </div> */}
    </div>
    <Footer/>
    </>
  );
}
