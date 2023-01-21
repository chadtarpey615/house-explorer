import React from 'react';

const Navbar = () => {
    return (
    <nav className="bg-gray-800">
        <div className="container mx-auto px-4 flex items-center justify-between">
            <div className="text-white">React Estate</div>
            <div className="block lg:hidden">
                <button className="text-white hover:text-white focus:text-white">
                    Menu
                </button>
            </div>
            <div className="hidden lg:block">
                <ul className="flex">
                    <li className="ml-6">
                        <button  className="text-white hover:text-white">Home</button>
                    </li>
                    <li className="ml-6">
                        <button  className="text-white hover:text-white">About</button>
                    </li>
                    <li className="ml-6">
                        <button  className="text-white hover:text-white">Contact</button>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    )

}

export default Navbar;