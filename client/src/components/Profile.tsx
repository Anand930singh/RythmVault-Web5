import { FiUpload } from "react-icons/fi";
import { IoIosMore } from "react-icons/io";
import Tabs from "./Tabs";
import Collected from "./profile/Collected";
import Offers from "./profile/Offers";
import Created from "./profile/Created";
import Activity from "./profile/Activity";

export default function Profile() {
  const tabsList = [
    {
      id: 1,
      label: "Collected",
      component: <Collected />, // Use JSX syntax to pass the component
    },
    {
      id: 2,
      label: "Offers made",
      component: <Offers />, // Use JSX syntax to pass the component
    },
    {
      id: 3,
      label: "Created",
      component: <Created />, // Use JSX syntax to pass the component
    },
    {
      id: 4,
      label: "Activity",
      component: <Activity />, // Use JSX syntax to pass the component
    },
    // ... other tabs
  ];

  return (
    <div className="w-full bg-slate-950 flex flex-col h-full">
      <div className="w-full h-96 bg-[url('https://as1.ftcdn.net/v2/jpg/03/50/68/30/1000_F_350683074_SSaXPN4XBvmwEKWRG4aU18Kl7kwkOdrg.jpg')] bg-cover bg-center"></div>
      <div className="w-full pt-24 relative px-2 md:px-10 lg:px-20">
        <div className="h-40 top-0 absolute aspect-square rounded-full border-4 border-slate-950 bg-slate-200 -translate-y-1/2"></div>
        <div className="w-full flex flex-col">
          <div className="w-full px-10 text-slate-200 flex justify-between">
            <div className="text-2xl font-semibold">John Doe</div>
            <div className="flex text-xl gap-3">
              <FiUpload />
              <IoIosMore />
            </div>
          </div>
          <div className="flex text-slate-200 px-10 mb-6 gap-8">
            <div className="flex gap-2">
              <div className="h-6 aspect-square rounded-full bg-purple-500"></div>
              <div className="w-16 text-sm text-ellipsis overflow-hidden">
                0x1FdEa9A7e76eF80FBc41F1baF9146682d22f07a4
              </div>
            </div>
            <div className="text-xs">joined Dec 2023</div>
          </div>

          <Tabs tabsList={tabsList} />
        </div>
      </div>
    </div>
  );
}
