interface NavbaritemProps {
  label: string;

}

const Navbaritem: React.FC<NavbaritemProps> = ({label}) => {

  return (
    // // Create a Navbar component with image user name and logout button using tailwindcss
    // <div className="flex flex-row justify-between items-center p-4">
    //   <div className="flex flex-row items-center">
    //     <img src="https://i.pravatar.cc/150?img=3" className="rounded-full w-10 h-10 mr-4" />
    //     <h1 className="text-lg font-bold text-white">User Name</h1>
    //   </div>
      
    //   <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Logout</button>
    // </div>
    <div className="text-white cursor-pointer hover:text-gray-300 transition">
      {label}
    </div>

  )
}

export default Navbaritem