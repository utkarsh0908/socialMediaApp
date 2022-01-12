import Image from "next/image";
import {SearchIcon, PlusCircleIcon, ChatIcon, HeartIcon, MenuIcon} from "@heroicons/react/outline";
import {HomeIcon} from "@heroicons/react/solid";

const Header = () => {
    return (
        <div className="shadow-sm bg-white z-50 border-b">
            <div className="flex justify-between max-w-6xl mx-5 lg:m-auto">

                {/* logo */}
                <div className="relative w-40 hidden lg:inline-grid">
                    <Image  src="/logo.png" 
                            layout="fill"
                            objectFit="contain"
                    ></Image>
                </div>
                <div className="relative w-10 lg:hidden flex-shrink-0">
                    <Image  src="/logo2.png" 
                            layout="fill"
                            objectFit="contain"
                    ></Image>
                </div>


                {/* middle bar */}
                <div className="flex items-center space-x-2">
                    <HomeIcon className="navBtn" />
                    <PlusCircleIcon className="navBtn"/>
                    <div className="chatBtn">
                        <ChatIcon className=" h-8 w-8 p-1 hidden md:inline-grid cursor-pointer "/>
                        <div className="absolute h-4 w-4 -top-0 -right-1 bg-red-500 rounded-full flex items-center justify-center text-xs text-white  animate-pulse">2</div>
                    </div>
                    <HeartIcon className="navBtn"/>
                </div>


                {/* Search bar */}
                <div className="flex items-center">
                    <div className="relative mt-1 p-3 rounded-md">
                        <div className="absolute inset-y-0 pl-3 flex items-center justify-center pointer-events-none">
                            <SearchIcon className="h-5 w-5 text-gray-500"/>
                        </div>
                        <input className="rounded-md border-gray-300 w-full pl-10 sm:text-sm bg-gray-50 focus:ring-black focus:border-black"    type="text" placeholder="Search"/>
                    </div>
                    <MenuIcon className="h-8 w-8 p-1 md:hidden"/>
                    <img src="/propic.jpeg" alt="profile pic" className="h-8 w-8 rounded-full cursor-pointer"/>
                </div>
            </div>
        </div>
    )
}

export default Header