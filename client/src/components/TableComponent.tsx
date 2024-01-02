import React from "react";

type TableComponentProps = {
  index: number;
  amt: number;
  isWideScreen: boolean;
  row: {
    collection: string;
    floor_price: string;
    volume: string;
    img: string;
  };
};
export default function TableComponent({
  index,
  row,
  amt,
  isWideScreen,
}: TableComponentProps) {
  return (
    <tr
      className="font-semibold flex md:text-base w-full items-center text-sm"
      key={index}
    >
      <td className="px-2 md:px-6 py-4 w-min flex-none text-xs">
        {index + amt}
      </td>
      <td
        scope="row"
        className="px-2 md:px-6 flex-1 text-ellipsis     overflow-hidden w-full flex gap-2 items-center py-4 text-white"
      >
        <img
          src={row.img}
          className="w-16 aspect-square rounded border border-slate-700 object-cover"
          alt="images"
        />
        <div className="flex flex-col w-full text-lg md:gap-2 gap-1">
          <div className="w-full text-sm sm:text-base">{row.collection}</div>
          <div
            className={`flex flex-col text-slate-400 text-xs md:text-sm ${
              isWideScreen ? "hidden" : ""
            }`}
          >
            <div>Floor Price</div>
            {row.floor_price}
          </div>
        </div>
      </td>

      <td
        className={`md:px-6 flex-none w-min px-2 whitespace-nowrap py-4 ${
          isWideScreen ? "" : "hidden"
        }`}
      >
        {row.floor_price}
      </td>
      <td className="md:px-6 px-2 w-min flex-none whitespace-nowrap text-end py-4">
        {row.volume}
      </td>
    </tr>
  );
}
