import { useCallback, useEffect, useState } from "react"
import Mobilemenu from "./Mobilemenu"
import Navbaritem from "./Navbaritem"

import {BsChevronDown, BsSearch, BsBellFill,BsFillArrowDownCircleFill} from 'react-icons/bs'
import AccountMenu from "./AccountMenu"
const TOP_OFFSET = 66 
const Navbar = () => {
  const [showMobilemenu, setShowMobilemenu] = useState(false)
  const [showAccountMenu, setShowAccountMenu] = useState(false)
  const [showBackground, setShowBackground] = useState(false)

  const toggleAccountMenu = useCallback(() => {
    setShowAccountMenu((currentAccountMenu) => !currentAccountMenu);
  }, []);

  const toggleMobilemenu = useCallback(() => {
    setShowMobilemenu((current) => !current);
  }, []);
    
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > TOP_OFFSET) {
          setShowBackground(true)
        } else {
          setShowBackground(false)
        }
      }
      window.addEventListener('scroll', handleScroll)
      return () => {
        window.removeEventListener('scroll', handleScroll)
      }
    },[])
    return (
   <nav className="w-full fixed z-40">
        <div 
            className={`
            px-4
            md:px-16
            py-6
            flex 
            flex-row
            items-center
            transition
            duration-500
            
            ${showBackground ? 'bg-zinc-900 bg-opacity-90' : ''}
            `}>
                <img className="h-8 lg:h-12 " src="/images/logo.png" alt="" />
                <div
                    className="
                    flex-row
                    ml-8
                    gap-7
                    hidden
                    lg:flex
                    "
                >
                  <Navbaritem label="Home" /> 
                  <Navbaritem label="Series" /> 
                  <Navbaritem label="Films" /> 
                  <Navbaritem label="New & Popular" />
                  <Navbaritem label="My List" /> 
                  <Navbaritem label="Browse by languages" />  
                </div>
                <div 
                onClick={toggleMobilemenu}
                className="lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer relative">
                    <p className="text-white text-sm">Browse</p>
                    <BsChevronDown className={`text-white transition ${showMobilemenu ? 'rotate-0': 'rotate-180'}`} />
                    <Mobilemenu visible={showMobilemenu} />
                </div>
                <div className="flex flex-row ml-auto gap-7 items-center">
                  <div className="text-gray-200 hover:text-gray-300 cursor-pointer">
                    <BsSearch/>
                  </div>
                  <div className="text-gray-200 hover:text-gray-300 cursor-pointer">
                    <BsBellFill/>
                  </div>
                  <div onClick={toggleAccountMenu} className="flex flex-row items-center gap-2 cursor-pointer relative">
                    <div className="w-6 h-6 lg:w-10 lg:h-10 rounded-md overflow-hidden">
                      <img src="/images/default-blue.png" alt="profile" />
                      <AccountMenu visible={showAccountMenu} />
                      <BsFillArrowDownCircleFill className={`text-white fill-white ml-4 px-2 transition ${showAccountMenu ? 'rotate-0': 'rotate-180' }`}/> 
                    </div>
      
                      
                    
                  </div>
                </div>
        </div>
   </nav>
  )
}

export default Navbar