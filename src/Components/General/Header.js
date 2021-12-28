import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <nav className="flex flex-wrap flex-center justify-between items-center h-full p-5 bg-zinc-800  text-white">
        <div className="text-2xl ml-10 block">Logo</div>
        <div className="flex-3">
          <ul className="flex ">
            <Link className="mr-5" to="/home">Home</Link>
            <li className="mr-5">photo galery</li>
            <li className="mr-5">booking</li>
            <li className="mr-5">contact</li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
