import { IoSearchOutline } from "react-icons/io5";
import { IoIosNotificationsOutline } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
import "../index.css";
import Wallet from "./Wallet";

type NavProps = {
  loggedIn: boolean;
};
export default function Navbar({ loggedIn }: NavProps) {
  return (
    <div className="z-10 fixed flex items-center bg-slate-950/60 backdrop-blur top-0 left-0 w-full border-b-gray-200 border-b py-4 px-6 justify-between">
      <div className="flex items-center gap-2">
        <img
          src="/logo.jpeg"
          alt="logo main"
          className="w-10 aspect-square rounded-full object-cover"
        />

        <div className="font-bold md:flex hidden text-slate-100 text-2xl tracking-wider jockey-font">
          RhythmVault
        </div>

        <div className="h-10 ml-4 w-[2px] lg:flex hidden rounded bg-slate-300"></div>
      </div>

      <div className="lg:flex hidden gap-3 text-slate-400">
        <Link to="/">
          <div className="cursor-pointer flex flex-col after:w-0 after:h-[2px] hover:after:w-full text-slate-300 font-semibold after:transition-[width] after:duration-300 after:rounded after:bg-slate-300">
            Dashboard
          </div>
        </Link>
        <Link to="/upload">
          <div className="cursor-pointer flex flex-col after:w-0 after:h-[2px] hover:after:w-full text-slate-300 font-semibold after:transition-[width] after:duration-300 after:rounded after:bg-slate-300">
            Create
          </div>
        </Link>
        <div className="cursor-pointer flex flex-col after:w-0 after:h-[2px] hover:after:w-full text-slate-300 font-semibold after:transition-[width] after:duration-300 after:rounded after:bg-slate-300">
          Stats
        </div>
      </div>

      <div className="flex items-center gap-3 lg:gap-5">
        <div className="lg:flex hidden relative items-center">
          <input
            type="text"
            placeholder="Search"
            className="rounded-xl pl-8 placeholder:text-slate-400 min-w-40 flex items-center bg-[#393939] hover:bg-[#424242] text-white border-transparent focus:ring focus:ring-offset focus:ring-offset-slate-400 focus:ring-slate-200 focus:outline-none text-sm py-3 w-full px-6 gap-2"
          />
          <IoSearchOutline className="absolute left-1 text-white ml-1 pointer-events-none text-xl" />
        </div>

        <IoSearchOutline className="lg:hidden flex text-white text-xl" />

        <button className="lg:hidden text-slate-200 flex rounded p-1 text-2xl">
          <RxHamburgerMenu />
        </button>

        {!loggedIn && (
          <>
            <Wallet />
          </>
        )}

        {loggedIn && (
          <>
            {/* <Switcher /> */}
            <IoIosNotificationsOutline className="text-2xl" />
            <Link to="/profile">
              <div className="rounded-full h-10 border border-black aspect-square bg-[url('https://storage.googleapis.com/opensea-static/opensea-profile/10.png')] "></div>
            </Link>
          </>
        )}
      </div>
    </div>
  );
}
