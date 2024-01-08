import { RxHamburgerMenu } from "react-icons/rx";
import { IoSearchOutline, IoGridOutline } from "react-icons/io5";

export default function Collected() {
  return (
    <div className="w-full flex text-slate-200 flex-col gap-4">
      <div className="flex justify-between">
        <div className="flex items-center gap-4">
          <RxHamburgerMenu className="text-xl" />
          <div className="flex relative items-center">
            <input
              type="text"
              placeholder="Search"
              className="rounded pl-8 placeholder:text-slate-400 min-w-40 flex items-center bg-white/20 hover:bg-white/25 text-white border-transparent focus:ring focus:ring-offset focus:ring-offset-slate-400 focus:ring-slate-200 focus:outline-none text-sm py-1 w-full px-6 gap-2"
            />
            <IoSearchOutline className="absolute left-1 text-white ml-1 pointer-events-none text-xl" />
          </div>
        </div>
        <IoGridOutline className="text-xl" />
      </div>

      <div className="">0 items</div>
      <div className="bg-white/15 w-full py-10 md:py-16 lg:py-20 gap-4 flex-col flex items-center justify-center rounded">
        <div className="w-fit">No items were found</div>
        <button className="py-2 px-5 bg-blue-600 rounded-lg hover:bg-blue-500">
          Back to all items
        </button>
      </div>
    </div>
  );
}
