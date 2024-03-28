import { initFlowbite } from 'flowbite'
import { useEffect, useState } from 'react';
import ToggleButton from '../atoms/header/ToggleButton';
import LinkButton from '../atoms/header/LinkButton';
import {useLocation} from "react-router-dom";

const Header = () => {
  const location = useLocation()
  const [currentPath, setCurrentPath] = useState()

  useEffect(()=> {
    setCurrentPath(location.pathname)
  }, [location])

  useEffect(()=> {
    initFlowbite()
  }, [])

  return(
    <>
      <header>
        <nav className="bg-white border-gray-200 px-4 text-lg lg:px-6 py-2.5 lg:py-5 dark:bg-gray-800">
          <div className="flex flex-wrap justify-around items-center mx-auto max-w-screen-xl">
            <span className="self-center font-semibold whitespace-nowrap dark:text-white">latinoamérica</span>
            <ToggleButton/>
            <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
              <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                <LinkButton label="Home" path="/" currentPath={currentPath}/>
                <LinkButton label="Eventos" path="/eventos" currentPath={currentPath}/>
                <LinkButton label="Paises" path="/paises" currentPath={currentPath}/>
              </ul>
            </div>
          </div>
        </nav>
      </header>        
    </>
  )
}

export default Header;
