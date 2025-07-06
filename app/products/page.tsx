import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Chrome, Smartphone, Monitor, Check } from "lucide-react"

const products = [
  {
    name: "Desktop App",
    icon: Monitor,
    description: "Full system VPN protection for Windows",
    features: ["System-wide protection", "Advanced security features", "Custom DNS settings", "Network monitoring"],
    status: "Available",
    link: "#",
  },
  {
    name: "Mobile App",
    icon: Smartphone,
    description: "VPN protection for your mobile device",
    features: [
      "iOS & Android support",
      "Auto-connect on untrusted networks",
      "Kill switch protection",
      "Split tunneling",
    ],
    status: "Coming Soon",
    link: "#",
  },
  {
    name: "Browser Extension",
    icon: Chrome,
    description: "Lightweight browser protection",
    features: ["Browser-only protection", "Quick server switching", "Minimal resource usage", "Easy installation"],
    status: "Coming Soon",
    link: "#",
  },
]

export default function ProductsPage() {
  return (
    <main className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Our Products</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the right VPN solution for your needs. All our products are designed with privacy and simplicity in
            mind.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {products.map((product, index) => (
            <Card key={index} className="relative overflow-hidden">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <product.icon className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl mb-2">{product.name}</CardTitle>
                <p className="text-gray-600">{product.description}</p>
                <Badge variant={product.status === "Available" ? "default" : "secondary"} className="mt-2">
                  {product.status}
                </Badge>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {product.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className="w-full"
                  disabled={product.status !== "Available"}
                  variant={product.status === "Available" ? "default" : "outline"}
                >
                  {product.status === "Available" ? "Get Now" : "Notify Me"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Why Choose Fortune VPN Products?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            All our products share the same core principles: simplicity, privacy, and freedom.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-2">No Registration</h3>
              <p className="text-blue-100">Start using any of our products immediately without creating an account.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Zero Logs</h3>
              <p className="text-blue-100">We don't track, store, or monitor any of your online activities.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Always Free</h3>
              <p className="text-blue-100">Core features remain free forever with no hidden costs or limitations.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
