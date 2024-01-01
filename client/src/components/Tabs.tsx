import { motion } from "framer-motion";
import { ReactNode, useState } from "react";

type TabsListProps = {
  tabsList: {
    id: number;
    label: string;
    component: ReactNode;
  }[];
};

export default function Tabs({ tabsList }: TabsListProps) {
  const [activeTab, setActiveTab] = useState(tabsList[0].id);

  // Find the active tab
  const activeTabData = tabsList.find((tab) => tab.id === activeTab);

  return (
    <div className="w-full flex flex-col gap-8">
      <div className="flex space-x-1 p-1 w-fit rounded-lg bg-[rgba(255,255,255,.04)]">
        {tabsList.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`${
              activeTab === tab.id ? "" : "hover:text-white/60"
            } relative rounded px-3 py-1.5 text-base font-semibold text-white outline-sky-400 transition focus-visible:outline-2`}
            style={{
              WebkitTapHighlightColor: "transparent",
            }}
          >
            {activeTab === tab.id && (
              <motion.span
                layoutId="bubble"
                className="absolute inset-0 z-10 bg-[rgba(255,255,255,.12)] mix-blend-difference"
                style={{ borderRadius: 10 }}
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            {tab.label}
          </button>
        ))}
      </div>

      <div className="w-full rounded p-3">
        {/* Render only the component of the active tab */}
        {activeTabData && (
          <div key={activeTabData.id} className="w-full">
            {activeTabData.component}
          </div>
        )}
      </div>
    </div>
  );
}
