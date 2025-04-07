import { MoreVertical, Filter } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface HeaderProps {
  isMobile: boolean
}

export default function Header({ isMobile }: HeaderProps) {
  if (isMobile) {
    return (
      <div className="flex items-center justify-between p-4 border-b border-gray-800">
        <div className="flex items-center">
          <Avatar className="h-8 w-8 mr-2">
            <AvatarImage src="/placeholder.svg" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
        </div>
        <div className="flex items-center space-x-4">
          <Filter className="h-5 w-5" />
          <MoreVertical className="h-5 w-5" />
        </div>
      </div>
    )
  }

  return (
    <div className="flex items-center justify-between p-4 border-b border-gray-800">
      <div className="flex items-center">
        <h1 className="text-sm font-bold">Variables, Inc</h1>
        <span className="mx-4 text-sm text-gray-400">Analytics</span>
      </div>
      <div className="flex items-center space-x-6">
        <span className="text-sm">Activity</span>
        <span className="text-sm">Log out</span>
      </div>
    </div>
  )
}

