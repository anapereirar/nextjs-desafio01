import Image from "next/image";
import Logo from "../../images/logo_talentoTech.svg"
import Link from "next/link";
import Header from "../header/page";
import Sidebar from "../sidebar/page";
import SidebarRigth from "../rightside/page";
import Footer from "../footer/page";


export default function Main() {
  return (
    <>
    <Header />
    <div className="mx-auto flex w-full max-w-8xl flex-auto justify-center sm:px-2 lg:px-8 xl:px-12">
      
    
    <Sidebar/>
    {/* <div className="min-w-0 max-w-2xl flex-auto px-4 py-16 lg:max-w-none lg:pl-8 lg:pr-0 xl:px-16"> */}
      <main className="w-full">     
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-10">
          <div className="sm:mb-8 sm:flex sm:justify-center">
          <Image
            src={Logo}
            alt="Picture of the author"
            width={500}
            height={500}
          />

          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-300 sm:text-6xl">
              Avances Clave en Desarrollo Fullstack
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Profundizando conceptos y conocimientos intermedio con TalentoTech
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </a>
              <a href="#" className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-500">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
    </main>
    {/* </div> */}
    
    <SidebarRigth/>

    </div>
    <Footer/>
    </>
  );
}
