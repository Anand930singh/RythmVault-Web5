import React from "react";

type CarouselProps = {
  Name: string;
  List: {
    image: string;
    name: string;
    floor: string;
    volume: string;
  }[];
};
export default function Carousel({ Name, List }: CarouselProps) {
  return (
    <div className="w-full flex flex-col gap-2">
      <div className="text-slate-200">{Name}</div>

      <div className="flex gap-2 relative items-center">
        {List.map((card, index) => (
          <div
            key={index}
            className="rounded-xl h-72 w-80 bg-slate-900 flex flex-col"
          >
            <div
              style={{ backgroundImage: `url(${card.image})` }}
              className="bg-cover bg-center w-full h-full flex-auto"
            >
              {/* <img
                src={card.image}
                alt="images"
                className="w-full h-full object-cover"
                style={{ objectFit: "cover" }}
              /> */}
            </div>
            <div className="w-full flex-none h-fit p-2 flex gap-1 flex-col">
              <div className="text-white text-lg font-semibold">
                {card.name}
              </div>
              <div className="flex w-full justify-between">
                <div className="flex flex-col text-white text-sm gap-1">
                  <div className="text-slate-400">Floor</div>
                  <div>{card.floor}</div>
                </div>
                <div className="flex flex-col text-white text-sm gap-1">
                  <div className="text-slate-400">Total Volume</div>
                  <div>{card.volume}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
