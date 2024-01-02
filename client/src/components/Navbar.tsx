import { IoSearchOutline } from "react-icons/io5";
import { IoIosNotificationsOutline } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
import "../index.css";

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
            <button
              type="button"
              className="hidden font-semibold text-base border border-transparent hover:border hover:border-slate-200 sm:inline-flex justify-center items-center gap-2 focus:outline-none text-slate-300 rounded-3xl py-2.5 px-5"
            >
              Log in
            </button>

            <button
              type="button"
              className="hidden rounded-full sm:flex bg-blue-600 hover:bg-blue-500 text-white border-transparent focus:dark:bg-blue-600 focus:ring focus:ring-offset-2 focus:ring-offset-slate-400 focus:ring-blue-600 dark:focus:ring-offset-slate-400 disabled:bg-blue-200 disabled:cursor-not-allowed disabled:dark:bg-blue-900 disabled:dark:text-slate-400 text-base py-2.5 px-5"
            >
              Sign up
            </button>
          </>
        )}

        {loggedIn && (
          <>
            <Link to={"/draft"}>
              <button
                type="button"
                className="rounded-full flex items-center bg-blue-600 hover:bg-blue-500 text-white border-transparent focus:dark:bg-blue-600 focus:ring focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 disabled:bg-blue-200 disabled:cursor-not-allowed disabled:dark:bg-blue-900 disabled:dark:text-slate-400 text-sm py-3 px-6 gap-2"
              >
                <svg fill="none" viewBox="0 0 20 20" width="20" height="20">
                  <path
                    stroke="currentColor"
                    d="M12.77 3.897 7.587 9.078c-.344.344-.515.516-.659.708-.128.17-.238.353-.331.545-.105.216-.178.448-.324.911l-.763 2.413 2.413-.762c.463-.147.695-.22.911-.324.192-.093.375-.204.545-.332.193-.143.364-.315.708-.659l5.181-5.18m-2.5-2.5.981-.981c.34-.341.511-.512.695-.603a1.25 1.25 0 0 1 1.11 0c.184.091.354.262.695.603.34.34.511.51.602.695.174.35.174.76 0 1.11-.09.183-.261.354-.602.694l-.98.981m-2.5-2.5 2.5 2.5M16.666 17.5H3.333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.25"
                  ></path>
                </svg>
                <span>Join the community</span>
              </button>
            </Link>
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
