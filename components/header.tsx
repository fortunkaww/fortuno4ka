"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [userIP, setUserIP] = useState("Loading...")
  const [userCountry, setUserCountry] = useState("")
  const [countryFlag, setCountryFlag] = useState("")

  useEffect(() => {
    // Функция для получения IP и локации с fallback API
    const fetchIPData = async () => {
      const apis = [
        // API 1: ipapi.co (полная информация)
        {
          url: "https://ipapi.co/json/",
          parser: (data: any) => ({
            ip: data.ip,
            country: data.country_name,
            countryCode: data.country_code,
          }),
        },
        // API 2: ip-api.com (полная информация)
        {
          url: "http://ip-api.com/json/",
          parser: (data: any) => ({
            ip: data.query,
            country: data.country,
            countryCode: data.countryCode,
          }),
        },
        // API 3: ipify + отдельный запрос для страны
        {
          url: "https://api.ipify.org?format=json",
          parser: async (data: any) => {
            const ip = data.ip
            try {
              const geoResponse = await fetch(`https://ipapi.co/${ip}/json/`)
              const geoData = await geoResponse.json()
              return {
                ip: ip,
                country: geoData.country_name || "Unknown",
                countryCode: geoData.country_code,
              }
            } catch {
              return {
                ip: ip,
                country: "Unknown",
                countryCode: null,
              }
            }
          },
        },
      ]

      for (const api of apis) {
        try {
          const response = await fetch(api.url)
          const data = await response.json()
          const result = await api.parser(data)

          if (result.ip && result.ip !== "Unknown") {
            setUserIP(result.ip)
            setUserCountry(result.country || "Unknown")
            setCountryFlag(
              result.countryCode ? `https://flagcdn.com/16x12/${result.countryCode.toLowerCase()}.png` : "",
            )
            return // Успешно получили данные, выходим
          }
        } catch (error) {
          console.log(`API ${api.url} failed:`, error)
          continue // Пробуем следующий API
        }
      }

      // Если все API не сработали
      setUserIP("Unable to detect")
      setUserCountry("Unknown")
      setCountryFlag("")
    }

    fetchIPData()
  }, [])

  return (
    <header className="bg-white shadow-sm">
      {/* Status Bar */}
      <div className="bg-gray-50 py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm text-gray-600">
          <span>Your IP: {userIP}</span>
          <div className="flex items-center space-x-2">
            <span>IP Country:</span>
            {countryFlag && <img src={countryFlag || "/placeholder.svg"} alt={userCountry} className="w-4 h-3" />}
            <span>{userCountry}</span>
          </div>
          <span>
            VPN Protection: <span className="text-red-500">Inactive</span>
          </span>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">F</span>
            </div>
            <span className="text-xl font-semibold text-gray-900">Fortune VPN</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/how-it-works" className="text-gray-700 hover:text-blue-600 font-medium">
              HOW IT WORKS
            </Link>
            <Link href="/vpn-locations" className="text-gray-700 hover:text-blue-600 font-medium">
              VPN LOCATIONS
            </Link>
            <Link href="/products" className="text-gray-700 hover:text-blue-600 font-medium">
              PRODUCTS
            </Link>
            <Link href="/ip-location" className="text-gray-700 hover:text-blue-600 font-medium">
              IP LOCATION
            </Link>
            <Link href="/become-partners" className="text-gray-700 hover:text-blue-600 font-medium">
              BECOME PARTNERS
            </Link>
            <Link href="/about-us" className="text-orange-500 hover:text-orange-600 font-medium">
              ABOUT US
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-blue-600 font-medium">
              BLOG
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <Link href="/how-it-works" className="text-gray-700 hover:text-blue-600 font-medium">
                HOW IT WORKS
              </Link>
              <Link href="/vpn-locations" className="text-gray-700 hover:text-blue-600 font-medium">
                VPN LOCATIONS
              </Link>
              <Link href="/products" className="text-gray-700 hover:text-blue-600 font-medium">
                PRODUCTS
              </Link>
              <Link href="/ip-location" className="text-gray-700 hover:text-blue-600 font-medium">
                IP LOCATION
              </Link>
              <Link href="/become-partners" className="text-gray-700 hover:text-blue-600 font-medium">
                BECOME PARTNERS
              </Link>
              <Link href="/about-us" className="text-orange-500 hover:text-orange-600 font-medium">
                ABOUT US
              </Link>
              <Link href="/blog" className="text-gray-700 hover:text-blue-600 font-medium">
                BLOG
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
