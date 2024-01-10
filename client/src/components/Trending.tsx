import { useEffect, useState } from "react";
import TableComponent from "./TableComponent";
import { Table } from "../data/Trending";

export default function Trending() {
  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth >= 1080);

  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth >= 1100);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="rounded-lg overflow-x-hidden w-full flex gap-4">
      <table className="w-full relative rtl:text-right text-left text-slate-100">
        <thead className="md:text-base flex w-full text-sm text-gray-400 border-b border-b-slate-400">
          <tr className="w-full flex">
            <th
              scope="col"
              className="flex-none sm:hidden block px-3 py-2 w-min"
            >
              #
            </th>
            <th
              scope="col"
              className="sm:flex-none sm:flex hidden px-3 py-2 w-min"
            >
              Rank
            </th>
            <th scope="col" className="px-3 flex-1 py-2">
              Collection
            </th>

            <th
              scope="col"
              className={`whitespace-nowrap px-3 py-2 ${
                isWideScreen ? "" : "hidden"
              }`}
            >
              Floor Price
            </th>
            <th scope="col" className="text-end px-3 py-2">
              Volume
            </th>
          </tr>
        </thead>
        <tbody
          style={{ height: isWideScreen ? "100%" : "60vh" }}
          className="flex relative w-full flex-col items-center justify-between
          scrollbar-hide overflow-y-auto"
        >
          {isWideScreen
            ? Table.slice(5).map((row, index) => (
                <TableComponent
                  row={row}
                  index={index}
                  amt={1}
                  key={index}
                  isWideScreen={isWideScreen}
                />
              ))
            : Table.map((row, index) => (
                <TableComponent
                  row={row}
                  index={index}
                  amt={1}
                  key={index}
                  isWideScreen={isWideScreen}
                />
              ))}
        </tbody>
      </table>
      <table
        className={`w-full relative rtl:text-right text-left text-slate-100 ${
          isWideScreen ? "" : "hidden"
        }`}
      >
        <thead className="md:text-base flex w-full text-sm text-gray-400 border-b border-b-slate-400">
          <tr className="w-full flex">
            <th
              scope="col"
              className="flex-none sm:hidden block px-3 py-2 w-min"
            >
              #
            </th>
            <th
              scope="col"
              className="sm:flex-none sm:flex hidden px-3 py-2 w-min"
            >
              Rank
            </th>
            <th scope="col" className="px-3 flex-1 py-2">
              Collection
            </th>

            <th
              scope="col"
              className={`whitespace-nowrap px-3 py-2 ${
                isWideScreen ? "" : "hidden"
              }`}
            >
              Floor Price
            </th>
            <th scope="col" className="text-end px-3 py-2">
              Volume
            </th>
          </tr>
        </thead>
        <tbody
          style={{ height: isWideScreen ? "100%" : "60vh" }}
          className="flex relative w-full flex-col items-center justify-between
          scrollbar-hide overflow-y-auto"
        >
          {Table.slice(-5).map((row, index) => (
            <TableComponent
              row={row}
              index={index}
              key={index}
              amt={6}
              isWideScreen={isWideScreen}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
