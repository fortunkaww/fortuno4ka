import { Card, CardContent } from "@/components/ui/card"
import { Shield, UserCheck, Lock, Globe, Download, Zap } from "lucide-react"
import Image from "next/image"

// Функция для обработки скачивания обычного VPN
const handleRegularDownload = () => {
  // Здесь будет ссылка на обычный VPN установщик
  const downloadUrl = "/downloads/FortuneVPN-Free.exe" // Вы загрузите этот файл
  const link = document.createElement("a")
  link.href = downloadUrl
  link.download = "FortuneVPN-Free.exe"
  link.click()
}

export default function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                The Best <span className="text-purple-600">Free VPN</span> for{" "}
                <span className="text-purple-600">Windows</span>
              </h1>

              <div className="space-y-3 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  <span className="text-lg text-gray-700">One Click and you are set!</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  <span className="text-lg text-gray-700">Military-grade encryption</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  <span className="text-lg text-gray-700">Zero-log policy</span>
                </div>
              </div>

              <a
                href="/downloads/FortuneVPN-Free.exe"
                download="FortuneVPN-Free.exe"
                className="inline-flex items-center bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg rounded-full transition-colors"
              >
                <Download className="w-5 h-5 mr-2" />
                Download for Windows
              </a>

              <div className="flex items-center space-x-4 mt-6">
                <span className="text-gray-600">System Requirements:</span>
                <div className="flex items-center space-x-2">
                  <span className="text-sm bg-gray-100 px-2 py-1 rounded">Windows 10+</span>
                  <span className="text-sm bg-gray-100 px-2 py-1 rounded">64-bit</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <Image
                  src="/placeholder.svg"
                  alt="VPN Interface Mockup"
                  width={500}
                  height={400}
                  className="w-full max-w-md mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-2 border-gray-100 hover:border-purple-200 transition-colors">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">0$</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Truly Free</h3>
                <p className="text-gray-600">No hidden costs, no premium plans. Completely free forever.</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-100 hover:border-purple-200 transition-colors">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Military Encryption</h3>
                <p className="text-gray-600">Bank-level security with AES-256 encryption protocol.</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-100 hover:border-purple-200 transition-colors">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Lightning Fast</h3>
                <p className="text-gray-600">High-speed servers optimized for maximum performance.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Privacy Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                <span className="text-purple-400">Truly private VPN</span> - no registrations, no logs
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Your privacy is our priority. We don't track, log, or store any of your online activity.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <Shield className="w-6 h-6 text-purple-400" />
                  <span>Military-grade encryption</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Lock className="w-6 h-6 text-purple-400" />
                  <span>Zero-log policy</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Globe className="w-6 h-6 text-purple-400" />
                  <span>Global server network</span>
                </div>
                <div className="flex items-center space-x-3">
                  <UserCheck className="w-6 h-6 text-purple-400" />
                  <span>Anonymous browsing</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8">
                <div className="bg-white/10 backdrop-blur rounded-xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Lock className="w-8 h-8 text-white" />
                    <span className="text-green-400 font-semibold">PROTECTED</span>
                  </div>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-300">Status:</span>
                      <span className="text-green-400">Connected</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Location:</span>
                      <span>United States</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">IP Address:</span>
                      <span>Hidden</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to browse privately?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Join millions of users who trust Fortune VPN for their online privacy
          </p>
          <a
            href="/downloads/FortuneVPN-Free.exe"
            download="FortuneVPN-Free.exe"
            className="inline-flex items-center bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 text-lg rounded-full hover:from-purple-700 hover:to-pink-700 transition-colors"
          >
            <Download className="w-5 h-5 mr-2" />
            Download Now - It's Free
          </a>
        </div>
      </section>
    </main>
  )
}
