"use client"

import { useState } from "react"
import { useMediaQuery } from "@/hooks/use-media-query"
import Sidebar from "@/components/sidebar"
import MobileNavigation from "@/components/mobile-navigation"
import Header from "@/components/header"
import OverviewTab from "@/components/overview-tab"
import DemographicsTab from "@/components/demographics-tab"

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("overview")
  const isMobile = useMediaQuery("(max-width: 768px)")

  return (
    <div className="flex h-screen bg-black text-white">
      {!isMobile && <Sidebar />}

      <div className="flex-1 flex flex-col overflow-hidden">
        <Header isMobile={isMobile} />

        <div className="flex-1 overflow-auto p-4 md:p-6">
          <div className="flex border-b border-gray-800 mb-6">
            <button
              className={`pb-2 px-4 font-medium text-sm ${activeTab === "overview" ? "border-b-2 border-white" : "text-gray-400"}`}
              onClick={() => setActiveTab("overview")}
            >
              Overview
            </button>
            <button
              className={`pb-2 px-4 font-medium text-sm ${activeTab === "demographics" ? "border-b-2 border-white" : "text-gray-400"}`}
              onClick={() => setActiveTab("demographics")}
            >
              Demographics
            </button>
          </div>

          {activeTab === "overview" && <OverviewTab />}
          {activeTab === "demographics" && <DemographicsTab />}
        </div>

        {isMobile && <MobileNavigation />}
      </div>
    </div>
  )
}

