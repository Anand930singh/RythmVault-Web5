import Tabs from "../components/Tabs";
import Trending from "../components/Trending";
import Top from "../components/Top";
import Carousel from "../components/Carousel";

export default function Home() {
 

  const tabsList = [
    {
      id: 1,
      label: "Trending",
      component: <Trending />, // Use JSX syntax to pass the component
    },
    {
      id: 2,
      label: "Top",
      component: <Top />, // Use JSX syntax to pass the component
    },
    // ... other tabs
  ];

  const Carousel_Spotlight = [
    {
      image: "./img1.png",
      name: "FIFA+ Collect",
      floor: "55 MATIC",
      volume: "15 ETH",
    },
    {
      image: "./img1.png",
      name: "FIFA+ Collect",
      floor: "55 MATIC",
      volume: "15 ETH",
    },
    {
      image: "./img1.png",
      name: "FIFA+ Collect",
      floor: "55 MATIC",
      volume: "15 ETH",
    },
  ];

  return (
    <div className="koHo-font text-slate-100">
      <div className="bg-slate-950 px-8 w-full flex flex-col pt-32 min-h-[100dvh] gap-10">
        <Tabs tabsList={tabsList} />
        <Carousel Name="Spotlight" List={Carousel_Spotlight} />
      </div>
    </div>
  );
}
