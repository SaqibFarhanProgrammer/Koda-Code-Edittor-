import React from 'react';

const Navbar = () => {
    return (
        <nav className="bg-gray-800 p-4">
            <ul className="flex list-none m-0 p-0">
                <li className="mr-4">
                    <a href="/" className="text-white no-underline hover:underline">Home</a>
                </li>
                <li className="mr-4">
                    <a href="/about" className="text-white no-underline hover:underline">About</a>
                </li>
                <li>
                    <a href="/contact" className="text-white no-underline hover:underline">Contact</a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;