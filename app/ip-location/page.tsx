"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Globe, Shield, Eye, Download } from "lucide-react"

export default function IPLocationPage() {
  const [locationData, setLocationData] = useState({
    ip: "Loading...",
    country: "Loading...",
    region: "Loading...",
    city: "Loading...",
    isp: "Loading...",
    timezone: "Loading...",
  })

  useEffect(() => {
    const fetchIPData = async () => {
      const apis = [
        // API 1: ipapi.co (полная информация)
        {
          url: "https://ipapi.co/json/",
          parser: (data: any) => ({
            ip: data.ip,
            country: data.country_name,
            region: data.region,
            city: data.city,
            isp: data.org,
            timezone: data.timezone,
          }),
        },
        // API 2: ipgeolocation.io (альтернативный API)
        {
          url: "https://api.ipgeolocation.io/ipgeo?apiKey=at_your_api_key_here",
          parser: (data: any) => ({
            ip: data.ip,
            country: data.country_name,
            region: data.state_prov,
            city: data.city,
            isp: data.isp,
            timezone: data.time_zone?.name,
          }),
        },
        // API 3: ip-api.com (полная информация)
        {
          url: "https://ip-api.com/json/",
          parser: (data: any) => ({
            ip: data.query,
            country: data.country,
            region: data.regionName,
            city: data.city,
            isp: data.isp,
            timezone: data.timezone,
          }),
        },
        // API 4: ipify + отдельный запрос для геолокации
        {
          url: "https://api.ipify.org?format=json",
          parser: async (data: any) => {
            const ip = data.ip
            try {
              // Пробуем получить геоданные через ipapi.co
              const geoResponse = await fetch(`https://ipapi.co/${ip}/json/`)
              const geoData = await geoResponse.json()

              if (geoData && !geoData.error) {
                return {
                  ip: ip,
                  country: geoData.country_name || "Unknown",
                  region: geoData.region || "Unknown",
                  city: geoData.city || "Unknown",
                  isp: geoData.org || "Unknown",
                  timezone: geoData.timezone || "Unknown",
                }
              }

              // Если первый не сработал, пробуем через ip-api.com
              const geoResponse2 = await fetch(`https://ip-api.com/json/${ip}`)
              const geoData2 = await geoResponse2.json()

              return {
                ip: ip,
                country: geoData2.country || "Unknown",
                region: geoData2.regionName || "Unknown",
                city: geoData2.city || "Unknown",
                isp: geoData2.isp || "Unknown",
                timezone: geoData2.timezone || "Unknown",
              }
            } catch {
              return {
                ip: ip,
                country: "Unknown",
                region: "Unknown",
                city: "Unknown",
                isp: "Unknown",
                timezone: "Unknown",
              }
            }
          },
        },
      ]

      for (const api of apis) {
        try {
          console.log(`Trying API: ${api.url}`)
          const response = await fetch(api.url)

          if (!response.ok) {
            console.log(`API ${api.url} returned status: ${response.status}`)
            continue
          }

          const data = await response.json()
          console.log(`API ${api.url} response:`, data)

          const result = await api.parser(data)
          console.log(`Parsed result:`, result)

          // Проверяем что получили валидные данные
          if (result.ip && result.ip !== "Unknown" && result.country && result.country !== "Unknown") {
            setLocationData({
              ip: result.ip || "Unable to detect",
              country: result.country || "Unknown",
              region: result.region || "Unknown",
              city: result.city || "Unknown",
              isp: result.isp || "Unknown",
              timezone: result.timezone || "Unknown",
            })
            console.log(`Successfully got data from: ${api.url}`)
            return // Успешно получили данные, выходим
          }
        } catch (error) {
          console.log(`API ${api.url} failed:`, error)
          continue // Пробуем следующий API
        }
      }

      // Если все API не сработали, пробуем последний резервный вариант
      try {
        console.log("Trying fallback method...")
        const fallbackResponse = await fetch("https://httpbin.org/ip")
        const fallbackData = await fallbackResponse.json()

        setLocationData({
          ip: fallbackData.origin || "Unable to detect",
          country: "Unable to detect",
          region: "Unable to detect",
          city: "Unable to detect",
          isp: "Unable to detect",
          timezone: "Unable to detect",
        })
      } catch {
        // Если совсем ничего не работает
        setLocationData({
          ip: "Unable to detect",
          country: "Unable to detect",
          region: "Unable to detect",
          city: "Unable to detect",
          isp: "Unable to detect",
          timezone: "Unable to detect",
        })
      }
    }

    fetchIPData()
  }, [])

  return (
    <main className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Your IP Location</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See what information is publicly visible about your current internet connection and location.
          </p>
        </div>

        <div className="max-w-2xl mx-auto mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-center">Your Current IP Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Globe className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                  <p className="text-sm text-gray-600">IP Address</p>
                  <p className="font-semibold text-lg">{locationData.ip}</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <MapPin className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <p className="text-sm text-gray-600">Location</p>
                  <p className="font-semibold text-lg">
                    {locationData.city}, {locationData.region}
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Country:</span>
                  <span className="font-medium">{locationData.country}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">ISP:</span>
                  <span className="font-medium">{locationData.isp}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Timezone:</span>
                  <span className="font-medium">{locationData.timezone}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card className="text-center p-6">
            <CardContent className="p-0">
              <Eye className="w-12 h-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">What Others See</h3>
              <p className="text-gray-600">
                Your IP address reveals your approximate location and ISP to websites you visit.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-6">
            <CardContent className="p-0">
              <Shield className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Hide Your IP</h3>
              <p className="text-gray-600">
                Use Fortune VPN to mask your real IP address and protect your privacy online.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-6">
            <CardContent className="p-0">
              <Globe className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Change Location</h3>
              <p className="text-gray-600">
                Appear to be browsing from different countries with our global server network.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-purple-50 border border-purple-200 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Protect Your Privacy Now</h2>
          <p className="text-gray-700 mb-6">
            Don't let websites track your real location. Hide your IP address with Fortune VPN.
          </p>
          <a
            href="/downloads/FortuneVPN-Free.exe"
            download="FortuneVPN-Free.exe"
            className="inline-flex items-center bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg rounded-full transition-colors"
          >
            <Download className="w-5 h-5 mr-2" />
            Get Fortune VPN Free
          </a>
        </div>
      </div>
    </main>
  )
}
