import { Home, BarChart2, PlusCircle } from "lucide-react"

export default function Sidebar() {
  return (
    <div className="w-64 border-r border-gray-800 flex flex-col">
      <div className="p-4 border-b border-gray-800">
        <h1 className="font-bold">Variables, Inc</h1>
      </div>

      <div className="p-4 border-b border-gray-800">
        <h2 className="text-xs uppercase text-gray-500 mb-4">Dashboard</h2>
        <nav>
          <ul className="space-y-2">
            <li>
              <a href="#" className="flex items-center text-gray-400 hover:text-white">
                <Home className="h-4 w-4 mr-3" />
                <span className="text-sm">Overview</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="p-4 flex-1">
        <h2 className="text-xs uppercase text-gray-500 mb-4">Analytics</h2>
        <nav>
          <ul className="space-y-2">
            <li>
              <a href="#" className="flex items-center text-white hover:text-white">
                <BarChart2 className="h-4 w-4 mr-3" />
                <span className="text-sm">Overview</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center text-gray-400 hover:text-white">
                <span className="text-sm ml-7">Cohorts</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center text-gray-400 hover:text-white">
                <span className="text-sm ml-7">Retention</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center text-gray-400 hover:text-white">
                <span className="text-sm ml-7">Funnels</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center text-gray-400 hover:text-white">
                <span className="text-sm ml-7">Settings</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="p-4 border-t border-gray-800">
        <button className="w-full flex items-center justify-center">
          <PlusCircle className="h-5 w-5" />
        </button>
      </div>
    </div>
  )
}

