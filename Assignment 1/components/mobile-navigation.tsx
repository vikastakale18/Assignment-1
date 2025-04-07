import { Home, BarChart2, User, Bell, Settings } from "lucide-react"

export default function MobileNavigation() {
  return (
    <div className="flex items-center justify-around py-3 border-t border-gray-800 bg-black">
      <button className="flex flex-col items-center justify-center">
        <Home className="h-5 w-5" />
        <span className="text-xs mt-1">Dashboard</span>
      </button>
      <button className="flex flex-col items-center justify-center text-green-500">
        <BarChart2 className="h-5 w-5" />
        <span className="text-xs mt-1">Analytics</span>
      </button>
      <button className="flex flex-col items-center justify-center">
        <User className="h-5 w-5" />
        <span className="text-xs mt-1">Account</span>
      </button>
      <button className="flex flex-col items-center justify-center">
        <Bell className="h-5 w-5" />
        <span className="text-xs mt-1">Activity</span>
      </button>
      <button className="flex flex-col items-center justify-center">
        <Settings className="h-5 w-5" />
        <span className="text-xs mt-1">Settings</span>
      </button>
    </div>
  )
}

