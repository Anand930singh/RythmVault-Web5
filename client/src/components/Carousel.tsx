import { useState, useRef, useEffect } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

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
  const divWidth = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);
  const [check, setCheck] = useState(false);
  const [left, setLeft] = useState(0);
  const [numbers, setNumbers] = useState<number[]>([]);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleLeftClick = () => {
    if (numbers.length > 0) {
      const lastNumber = numbers[numbers.length - 1];
      setLeft((prevLeft) => prevLeft - lastNumber);
      setNumbers((prevNumbers) => prevNumbers.slice(0, -1));
    }
    if (check) setCheck(false);
  };

  const handleRightClick = () => {
    const pixelsToRem = (pixels: number) => pixels / 16; // Utility function to convert pixels to rem

    if (width + left * 16 - screenWidth > 21 * 16) {
      const newLeft = left - 21;
      setLeft(newLeft);
      setNumbers((prevNumbers) => [...prevNumbers, -21]);
    } else {
      const remainingDistance = width + left * 16 - (screenWidth - 80);
      const newLeft = left - pixelsToRem(remainingDistance);
      setLeft(newLeft);
      setNumbers((prevNumbers) => [
        ...prevNumbers,
        -pixelsToRem(remainingDistance),
      ]);
      setCheck(true);
    }
  };

  useEffect(() => {
    if (divWidth.current) {
      setWidth(divWidth.current.offsetWidth);
    }
  }, [divWidth]);

  return (
    <div className="w-full flex flex-col gap-4 relative">
      <div className="text-slate-200 text-2xl font-bold">{Name}</div>

      <div className="flex gap-2 overflow-x-hidden items-center">
        <div
          onClick={handleLeftClick}
          className={`${
            left === 0 ? "invisible" : "visible"
          } z-10 absolute left-0 rounded h-full p-1 flex items-center text-slate-100 hover:bg-[rgba(255,255,255,.1)]`}
        >
          <FaAngleLeft />
        </div>
        <div
          onClick={handleRightClick}
          className={`${check ? "invisible" : "visible"} ${
            width < screenWidth ? "invisible" : "visible"
          } z-10 absolute right-0 rounded h-full p-1 flex items-center text-slate-100 hover:bg-[rgba(255,255,255,.1)]`}
        >
          <FaAngleRight />
        </div>
        <div
          ref={divWidth}
          style={{ transform: `translateX(${left}rem)` }}
          className="flex gap-4 w-fit relative items-center transition-all"
        >
          {List.map((card, index) => (
            <div
              key={index}
              className="hover:-translate-y-1 transition-all rounded-xl h-72 min-w-80 bg-slate-900 overflowx-hidden flex flex-col"
            >
              <div
                style={{ backgroundImage: `url(${card.image})` }}
                className="bg-cover bg-center w-full h-full flex-auto"
              ></div>
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
    </div>
  );
}
