import { Card, CardContent } from "@/components/ui/card"
import { Download, MousePointerClickIcon as Click, Shield } from "lucide-react"
import { Monitor } from "lucide-react"

export default function HowItWorksPage() {
  return (
    <main className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">How It Works</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Getting started with Fortune VPN is incredibly simple. Follow these three easy steps to secure your Windows
            PC.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="text-center p-8">
            <CardContent className="p-0">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Download className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">1. Download Application</h3>
              <p className="text-gray-600 mb-6">
                Download and install Fortune VPN application for Windows in just a few clicks.
              </p>
              <a
                href="/downloads/FortuneVPN-Free.exe"
                download="FortuneVPN-Free.exe"
                className="inline-flex items-center bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-3 rounded-full transition-colors"
              >
                <Download className="w-4 h-4 mr-2" />
                Download for Windows
              </a>
            </CardContent>
          </Card>

          <Card className="text-center p-8">
            <CardContent className="p-0">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Click className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">2. One Click Connect</h3>
              <p className="text-gray-600">Launch the app and connect to a VPN server instantly with just one click.</p>
            </CardContent>
          </Card>

          <Card className="text-center p-8">
            <CardContent className="p-0">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">3. Browse Securely</h3>
              <p className="text-gray-600">
                Your entire Windows system is now protected with military-grade encryption.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-gray-50 rounded-2xl p-12 text-center">
          <Monitor className="w-16 h-16 text-purple-600 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Fortune VPN for Windows?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 mb-8">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">System-Wide Protection</h4>
              <p className="text-gray-600 text-sm">Protects all applications and browsers on your Windows PC</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Completely Free</h4>
              <p className="text-gray-600 text-sm">No hidden costs or premium plans required</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Fast Servers</h4>
              <p className="text-gray-600 text-sm">High-speed servers worldwide for optimal performance</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Zero Logs</h4>
              <p className="text-gray-600 text-sm">We don't track or store any of your browsing data</p>
            </div>
          </div>
          <a
            href="/downloads/FortuneVPN-Free.exe"
            download="FortuneVPN-Free.exe"
            className="inline-flex items-center bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg rounded-full transition-colors"
          >
            <Download className="w-5 h-5 mr-2" />
            Get Now
          </a>
        </div>
      </div>
    </main>
  )
}
