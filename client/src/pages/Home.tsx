import Tabs from "../components/Tabs";
import Trending from "../components/Trending";
import Top from "../components/Top";
import Carousel from "../components/Carousel";
import SelfScrollCarousel from "../components/SelfScrollCarousel";
import { Carousel_Spotlight } from "../data/Carousel";
import { img } from "../data/MainImages";

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

  return (
    <div className="koHo-font text-slate-100">
      <div className="bg-slate-950 px-2 md:px-8 w-full pb-10 flex flex-col pt-32 h-full min-h-[100dvh] gap-10">
        <SelfScrollCarousel img={img} />
        <Tabs tabsList={tabsList} />
        <Carousel Name="Spotlight" List={Carousel_Spotlight} />
        <Carousel Name="Trending" List={Carousel_Spotlight} />
      </div>
    </div>
  );
}
