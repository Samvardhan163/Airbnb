import Image from "next/image";
import {
  SearchIcon,
  GlobeAltIcon,
  UserCircleIcon,
  AcademicCapIcon,
  MenuIcon,
} from "@heroicons/react/solid";
function Header() {
  return (
    <header className="sticky top-0 z-0 grid grid-cols-3 shadow-md py-5 px-5 md:px-10">
      <div className="relative my-auto flex h-10 cursor-pointer items-center">
        <Image
          src="https://links.papareact.com/qd3"
          alt="Airbnb"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>
      <div className="flex flex-grow ml-4 items-center border-2 rounded-full py-2 md:shadow-sm focus-within:shadow-md">
        <input
          type="text"
          className=" pl-5 outline-none bg-transparent flex-grow text-md  text-gray-600 placeholder-gray-400 text-xs sm:text-sm lg:text-md xl:text-lg"
          placeholder="start search here"
        />
        <SearchIcon className="h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer  hidden lg:inline-flex md:mx-2 "></SearchIcon>
      </div>
      <div className="flex  items-center space-x-4 justify-end text-gray-500">
        <p>Become a host</p>
        <GlobeAltIcon className="h-6"></GlobeAltIcon>
        <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
          <UserCircleIcon className="h-6"></UserCircleIcon>
          <MenuIcon className="h-6"></MenuIcon>
        </div>
      </div>
    </header>
  );
}

export default Header;
