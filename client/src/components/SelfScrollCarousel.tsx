import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BsArrowRightCircle, BsArrowLeftCircle } from "react-icons/bs";

type SelfScrollCarouselProps = {
  img: {
    id: number;
    image: string;
    topic: string;
    floor: string;
    items: number;
  }[];
};
const variants = {
  initial: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      // scale: 0.5,
    };
  },
  animate: {
    x: 0,
    opacity: 1,
    // scale: 1,
    // transition: 'ease-in',
    transition: {
      x: { type: "spring", stiffness: 300, damping: 30 },
      opacity: { duration: 0.2 },
    },
  },
  exit: (direction: number) => {
    return {
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
      // scale: 0.5,
      // transition: 'ease-in',
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      },
    };
  },
  // initial:{
  //   x:200,
  //   opacity:0
  // },
  // animate:{
  //   x:0,
  //   opacity:1
  // },
  // exit:{
  //   x:-200,
  //   opacity:0
  // }
};
export default function SelfScrollCarousel({ img }: SelfScrollCarouselProps) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  function nextStep() {
    setDirection(1);
    if (index === img.length - 1) {
      setIndex(0);
      return;
    }
    setIndex(index + 1);
  }

  function prevStep() {
    setDirection(-1);
    if (index === 0) {
      setIndex(img.length - 1);
      return;
    }
    setIndex(index - 1);
  }

  useEffect(() => {
    const timer = setTimeout(nextStep, 5000); // Change slide after 5 seconds

    // Clean up the timer on component unmount
    return () => {
      clearTimeout(timer);
    };
  }, [index]);

  return (
    <div className="h-screen md:h-[75vh] bg-transparent justify-center rounded-lg overflow-hidden w-full relative flex items-center">
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          variants={variants}
          animate="animate"
          initial="initial"
          exit="exit"
          src={img[index].image}
          key={img[index].id}
          custom={direction}
          className="h-full absolute top-0 left-0 w-full object-cover"
          alt="main logo"
        />
        <button
          onClick={nextStep}
          className="h-32 rounded absolute right-0 px-2 flex items-center justify-center cursor-pointer bg-white/20 bg-opacity-[83%]"
        >
          <BsArrowRightCircle className="text-2xl text-white" />
        </button>

        <button
          onClick={prevStep}
          className="h-32 rounded absolute left-0 px-2 flex items-center justify-center cursor-pointer bg-white/20 bg-opacity-[83%]"
        >
          <BsArrowLeftCircle className="text-2xl text-white" />
        </button>
        <div className="absolute p-10 w-full flex justify-between rounded-md bottom-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex relative flex-col gap-1 h-full w-min z-[5] shadow-[4.0px_-6.0px_8.0px_rgba(0,0,0,0.38)] bg-white/20 backdrop-blur p-3 rounded"
          >
            <p className="font-semibold whitespace-nowrap text-lg">
              {img[index].topic}
            </p>
            <div className="flex text-white text-base gap-2">
              <div>{img[index].items} items</div>
              <div>Floor {img[index].floor}</div>
            </div>
          </motion.div>

          <motion.div></motion.div>
        </div>
      </AnimatePresence>
    </div>
  );
}
