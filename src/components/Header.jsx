
const Header = () => {
  return (
    <nav className="bg-transparent py-4 lg:py-6 flex justify-center w-full px-[15%]">
      <div className="w-full px-4 flex  justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          {/* <img src="/logo.png" alt="Logo" className="h-8 w-auto mr-2" /> */}
          <span className="text-white font-semibold capitalize text-lg">PREM JOSHI</span>
        </div>

        {/* Navigation Links */}
        <ul className="flex lg:space-x-8">
          <li>
            <a href="#" className="text-[#E0B985] transition-all hover:text-gray-300">HOME</a>
          </li>
          <li>
            <a href="#" className="text-white transition-all hover:text-gray-300">ABOUT ME</a>
          </li>
          <li>
            <a href="#" className="text-white transition-all hover:text-gray-300">ALL PRODUCTS</a>
          </li>
          <li>
            <a href="#" className="text-white transition-all hover:text-gray-300">THE MOGGERS BLUE PRINT</a>
          </li>
        </ul>

        {/* Button */}
        <button className="uppercase border text-[#C0C5C5] border-[#C0C5C5] px-4 py-2 w-max hover:text-white transition-all hover:border-white">APPOINTMENT</button>
      </div>
    </nav>
  )
}

export default Header