import { ArrowRight } from "lucide-react"
import WorldMap from "@/components/world-map"

export default function DemographicsTab() {
  const countries = [
    { name: "India", flag: "🇮🇳", percentage: "40%" },
    { name: "USA", flag: "🇺🇸", percentage: "30%" },
    { name: "Canada", flag: "🇨🇦", percentage: "15%" },
    { name: "UK", flag: "🇬🇧", percentage: "7%" },
  ]

  return (
    <div className="bg-gray-900 rounded-lg p-4">
      <h2 className="text-lg font-medium mb-4">Demographics</h2>

      <div className="mb-6">
        <WorldMap />
      </div>

      <div className="space-y-3">
        {countries.map((country) => (
          <div key={country.name} className="flex items-center justify-between">
            <div className="flex items-center">
              <span className="text-xl mr-2">{country.flag}</span>
              <span>{country.name}</span>
            </div>
            <div>{country.percentage}</div>
          </div>
        ))}
      </div>

      <div className="flex justify-end mt-4">
        <button className="text-sm flex items-center text-gray-400 hover:text-white">
          View all countries <ArrowRight className="h-4 w-4 ml-1" />
        </button>
      </div>
    </div>
  )
}

