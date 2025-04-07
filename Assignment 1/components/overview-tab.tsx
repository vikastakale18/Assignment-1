import { ArrowRight, ChevronDown } from "lucide-react"
import VisitorsChart from "@/components/visitors-chart"
import WorldMap from "@/components/world-map"

export default function OverviewTab() {
  return (
    <div className="space-y-6">
      {/* Visitors Card */}
      <div className="bg-gray-900 rounded-lg p-4">
        <div className="flex justify-between items-center mb-4">
          <div className="text-sm">Visitors</div>
          <div className="flex items-center space-x-2">
            <div className="text-sm bg-black bg-opacity-50 px-3 py-1 rounded-full flex items-center">
              Last 30 days <ChevronDown className="h-4 w-4 ml-1" />
            </div>
            <div className="text-sm bg-black bg-opacity-50 px-3 py-1 rounded-full">+ Compare</div>
          </div>
        </div>

        <div className="flex items-baseline mb-4">
          <div className="text-3xl font-bold">13.49K</div>
          <div className="ml-2 text-green-500 text-sm">+1.46%</div>
          <div className="ml-1 text-gray-400 text-sm">(197)</div>
        </div>

        <VisitorsChart />
      </div>

      {/* Insights Card */}
      <div className="bg-gray-900 rounded-lg p-4">
        <h2 className="text-lg font-medium mb-4">Insights</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <div className="text-sm mb-1">Founders</div>
            <div className="flex items-baseline">
              <div className="text-2xl font-bold">7.4K</div>
              <div className="ml-2 text-green-500 text-xs">+100%</div>
              <div className="ml-1 text-gray-400 text-xs">(3,000)</div>
            </div>
          </div>

          <div>
            <div className="text-sm mb-1">Investors</div>
            <div className="flex items-baseline">
              <div className="text-2xl font-bold">6.09K</div>
              <div className="ml-2 text-green-500 text-xs">+100%</div>
              <div className="ml-1 text-gray-400 text-xs">(3,000)</div>
            </div>
          </div>
        </div>

        <div className="flex justify-end mt-4">
          <button className="text-sm flex items-center text-gray-400 hover:text-white">
            View detailed insights <ArrowRight className="h-4 w-4 ml-1" />
          </button>
        </div>
      </div>

      {/* Demographics Card (Mobile Only) */}
      <div className="bg-gray-900 rounded-lg p-4 md:hidden">
        <h2 className="text-lg font-medium mb-4">Demographics</h2>
        <WorldMap />
      </div>
    </div>
  )
}

