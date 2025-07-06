import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Globe, Zap, Shield } from "lucide-react"

const locations = [
  { country: "United States", city: "New York", flag: "🇺🇸", servers: 15, ping: "12ms" },
  { country: "United Kingdom", city: "London", flag: "🇬🇧", servers: 8, ping: "25ms" },
  { country: "Germany", city: "Frankfurt", flag: "🇩🇪", servers: 12, ping: "18ms" },
  { country: "France", city: "Paris", flag: "🇫🇷", servers: 6, ping: "22ms" },
  { country: "Netherlands", city: "Amsterdam", flag: "🇳🇱", servers: 10, ping: "15ms" },
  { country: "Canada", city: "Toronto", flag: "🇨🇦", servers: 7, ping: "28ms" },
  { country: "Japan", city: "Tokyo", flag: "🇯🇵", servers: 9, ping: "45ms" },
  { country: "Australia", city: "Sydney", flag: "🇦🇺", servers: 5, ping: "52ms" },
  { country: "Singapore", city: "Singapore", flag: "🇸🇬", servers: 8, ping: "38ms" },
  { country: "Brazil", city: "São Paulo", flag: "🇧🇷", servers: 4, ping: "65ms" },
]

export default function VPNLocationsPage() {
  return (
    <main className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">VPN Server Locations</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connect to high-speed servers around the world. All locations are available for free with no restrictions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="text-center p-6">
            <CardContent className="p-0">
              <Globe className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">10+</h3>
              <p className="text-gray-600">Countries</p>
            </CardContent>
          </Card>
          <Card className="text-center p-6">
            <CardContent className="p-0">
              <Zap className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">84+</h3>
              <p className="text-gray-600">High-Speed Servers</p>
            </CardContent>
          </Card>
          <Card className="text-center p-6">
            <CardContent className="p-0">
              <Shield className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">99.9%</h3>
              <p className="text-gray-600">Uptime Guarantee</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {locations.map((location, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{location.flag}</span>
                    <div>
                      <h3 className="font-semibold text-gray-900">{location.country}</h3>
                      <p className="text-sm text-gray-600">{location.city}</p>
                    </div>
                  </div>
                  <Badge variant="secondary" className="bg-green-100 text-green-800">
                    Online
                  </Badge>
                </div>
                <div className="flex justify-between text-sm text-gray-600">
                  <span>{location.servers} servers</span>
                  <span className="text-green-600 font-medium">{location.ping}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-blue-50 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">More Locations Coming Soon</h2>
          <p className="text-gray-600 mb-6">
            We're constantly expanding our server network to provide you with the best possible experience.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <Badge variant="outline">India 🇮🇳</Badge>
            <Badge variant="outline">South Korea 🇰🇷</Badge>
            <Badge variant="outline">Italy 🇮🇹</Badge>
            <Badge variant="outline">Spain 🇪🇸</Badge>
            <Badge variant="outline">Mexico 🇲🇽</Badge>
          </div>
        </div>
      </div>
    </main>
  )
}
