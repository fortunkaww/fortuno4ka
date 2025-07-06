"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  Shield,
  Users,
  Globe,
  Star,
  CheckCircle,
  Download,
  AlertCircle,
  Loader2,
  DollarSign,
  TrendingUp,
  Award,
  Zap,
} from "lucide-react"

export default function BecomePartnersPage() {
  const [partnerCode, setPartnerCode] = useState("")
  const [isValidating, setIsValidating] = useState(false)
  const [isDownloading, setIsDownloading] = useState(false)
  const [validationResult, setValidationResult] = useState<"success" | "error" | null>(null)
  const [errorMessage, setErrorMessage] = useState("")
  const [downloadProgress, setDownloadProgress] = useState(0)
  const [validCodes, setValidCodes] = useState<string[]>([])

  // Загрузка валидных кодов из localStorage
  useEffect(() => {
    const savedValidCodes = localStorage.getItem("validPartnerCodes")
    if (savedValidCodes) {
      setValidCodes(JSON.parse(savedValidCodes))
    } else {
      // Fallback коды если админ-панель не использовалась
      const fallbackCodes = ["PARTNER2024", "ELITE-VPN-001", "PREMIUM-ACCESS", "BUSINESS-PRO", "ENTERPRISE-KEY"]
      setValidCodes(fallbackCodes)
    }
  }, [])

  const handleCodeSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!partnerCode.trim()) return

    setIsValidating(true)
    setValidationResult(null)
    setErrorMessage("")

    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Проверяем код против актуального списка из localStorage
    const currentValidCodes = JSON.parse(localStorage.getItem("validPartnerCodes") || "[]")
    const allValidCodes = [...validCodes, ...currentValidCodes]

    if (allValidCodes.includes(partnerCode.toUpperCase())) {
      // Увеличиваем счетчик использования кода
      updateCodeUsage(partnerCode.toUpperCase())
      setValidationResult("success")
      setIsValidating(false)
      startDownload()
    } else {
      setValidationResult("error")
      setErrorMessage("Invalid partner code. Please check your code and try again.")
      setIsValidating(false)
    }
  }

  // Обновление счетчика использования кода
  const updateCodeUsage = (code: string) => {
    const savedCodes = localStorage.getItem("partnerCodes")
    if (savedCodes) {
      const codes = JSON.parse(savedCodes)
      const updatedCodes = codes.map((c: any) => (c.code === code ? { ...c, usageCount: c.usageCount + 1 } : c))
      localStorage.setItem("partnerCodes", JSON.stringify(updatedCodes))
    }
  }

  const startDownload = async () => {
    setIsDownloading(true)
    setDownloadProgress(0)

    try {
      // Загрузка Partner Edition VPN установщика
      const downloadUrl = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/vpnxd-qWyCgcf6s6cBpnNtOIHR7vGJuelMGU.mp4" // Временно видео для теста, но будет exe

      // Создаем прямую ссылку для скачивания
      const link = document.createElement("a")
      link.href = downloadUrl
      link.download = "FortuneVPN-Partner-Edition.exe"
      link.target = "_blank"

      // Симуляция прогресса загрузки
      for (let i = 0; i <= 100; i += 10) {
        await new Promise((resolve) => setTimeout(resolve, 200))
        setDownloadProgress(i)
      }

      // Запускаем загрузку
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    } catch (error) {
      console.error("Download failed:", error)
      alert("Download failed. Please contact support.")
    }

    setIsDownloading(false)
  }

  const partnerBenefits = [
    {
      icon: DollarSign,
      title: "Revenue Sharing",
      description: "Earn up to 40% commission on every customer you refer to Fortune VPN.",
      highlight: "Up to 40%",
    },
    {
      icon: TrendingUp,
      title: "Scalable Business",
      description: "Build a sustainable income stream with our growing partner network.",
      highlight: "Recurring Income",
    },
    {
      icon: Award,
      title: "Exclusive Access",
      description: "Get access to partner-only features, tools, and premium support.",
      highlight: "VIP Treatment",
    },
    {
      icon: Zap,
      title: "Advanced Tools",
      description: "Comprehensive dashboard, analytics, and marketing materials provided.",
      highlight: "Pro Tools",
    },
  ]

  const partnerTiers = [
    {
      name: "Bronze Partner",
      commission: "20%",
      requirements: "5+ referrals/month",
      benefits: ["Basic marketing materials", "Email support", "Monthly payouts"],
      color: "bg-amber-100 border-amber-300",
    },
    {
      name: "Silver Partner",
      commission: "30%",
      requirements: "15+ referrals/month",
      benefits: ["Advanced marketing kit", "Priority support", "Bi-weekly payouts", "Custom landing pages"],
      color: "bg-gray-100 border-gray-300",
    },
    {
      name: "Gold Partner",
      commission: "40%",
      requirements: "50+ referrals/month",
      benefits: [
        "Full marketing suite",
        "Dedicated account manager",
        "Weekly payouts",
        "Co-marketing opportunities",
        "Beta access",
      ],
      color: "bg-yellow-100 border-yellow-300",
    },
  ]

  return (
    <main className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Become a Fortune VPN Partner</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Join our exclusive partner program and unlock premium VPN solutions while earning substantial commissions.
            Build your business with the most trusted VPN platform.
          </p>
          <div className="flex justify-center space-x-4">
            <Badge variant="secondary" className="bg-purple-100 text-purple-800 px-4 py-2">
              <Star className="w-4 h-4 mr-2" />
              Trusted by 5M+ Users
            </Badge>
            <Badge variant="secondary" className="bg-green-100 text-green-800 px-4 py-2">
              <CheckCircle className="w-4 h-4 mr-2" />
              99.9% Uptime
            </Badge>
          </div>
        </div>

        {/* Partner Benefits */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {partnerBenefits.map((benefit, index) => (
            <Card key={index} className="text-center p-6 border-2 hover:border-purple-200 transition-all duration-300">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <Badge variant="outline" className="mb-3 bg-purple-50 text-purple-700 border-purple-200">
                  {benefit.highlight}
                </Badge>
                <p className="text-gray-600">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Partner Tiers */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Partnership Tiers</h2>
            <p className="text-lg text-gray-600">Choose the partnership level that fits your business goals</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {partnerTiers.map((tier, index) => (
              <Card key={index} className={`border-2 ${tier.color} hover:shadow-lg transition-all duration-300`}>
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl mb-2">{tier.name}</CardTitle>
                  <div className="text-4xl font-bold text-purple-600 mb-2">{tier.commission}</div>
                  <p className="text-sm text-gray-600">Commission Rate</p>
                  <Badge variant="outline" className="mt-2">
                    {tier.requirements}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {tier.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Partner Code Access */}
        <div className="max-w-2xl mx-auto mb-16">
          <Card className="border-2 border-purple-200 bg-gradient-to-br from-purple-50 to-pink-50">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl mb-2">Access Partner VPN</CardTitle>
              <p className="text-gray-600">
                Enter your exclusive partner code to download the Fortune VPN Partner Edition with advanced features.
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <form onSubmit={handleCodeSubmit} className="space-y-4">
                <div>
                  <label htmlFor="partnerCode" className="block text-sm font-medium text-gray-700 mb-2">
                    Partner Access Code
                  </label>
                  <Input
                    id="partnerCode"
                    type="text"
                    placeholder="Enter your partner code (e.g., PARTNER2024)"
                    value={partnerCode}
                    onChange={(e) => setPartnerCode(e.target.value)}
                    className="text-center text-lg font-mono tracking-wider"
                    disabled={isValidating || isDownloading}
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                  disabled={isValidating || isDownloading || !partnerCode.trim()}
                >
                  {isValidating ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Validating Code...
                    </>
                  ) : (
                    <>
                      <Shield className="w-4 h-4 mr-2" />
                      Validate & Download
                    </>
                  )}
                </Button>
              </form>

              {/* Validation Results */}
              {validationResult === "error" && (
                <div className="flex items-center space-x-2 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <AlertCircle className="w-5 h-5 text-red-500" />
                  <div>
                    <p className="text-red-800 font-medium">Invalid Partner Code</p>
                    <p className="text-red-600 text-sm">{errorMessage}</p>
                  </div>
                </div>
              )}

              {validationResult === "success" && !isDownloading && (
                <div className="flex items-center space-x-2 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <div>
                    <p className="text-green-800 font-medium">Code Validated Successfully!</p>
                    <p className="text-green-600 text-sm">Preparing your Fortune VPN Partner Edition download...</p>
                  </div>
                </div>
              )}

              {/* Download Progress */}
              {isDownloading && (
                <div className="space-y-3">
                  <div className="flex items-center space-x-2 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <Download className="w-5 h-5 text-blue-500" />
                    <div className="flex-1">
                      <p className="text-blue-800 font-medium">Downloading Fortune VPN Partner Edition</p>
                      <p className="text-blue-600 text-sm">FortuneVPN-Partner-Edition.exe</p>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className="bg-gradient-to-r from-purple-600 to-pink-600 h-3 rounded-full transition-all duration-300"
                      style={{ width: `${downloadProgress}%` }}
                    ></div>
                  </div>
                  <p className="text-center text-sm text-gray-600">{downloadProgress}% Complete</p>
                </div>
              )}

              <div className="text-center text-sm text-gray-500">
                <p>Don't have a partner code? Contact our partnership team to get started.</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact CTA */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Partnership Journey?</h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Join thousands of successful partners who are building profitable businesses with Fortune VPN. Get your
            exclusive partner code today.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <Users className="w-8 h-8 mx-auto mb-2" />
              <h3 className="text-lg font-semibold mb-1">5,000+</h3>
              <p className="text-purple-100 text-sm">Active Partners</p>
            </div>
            <div>
              <Globe className="w-8 h-8 mx-auto mb-2" />
              <h3 className="text-lg font-semibold mb-1">50+</h3>
              <p className="text-purple-100 text-sm">Countries</p>
            </div>
            <div>
              <DollarSign className="w-8 h-8 mx-auto mb-2" />
              <h3 className="text-lg font-semibold mb-1">$2M+</h3>
              <p className="text-purple-100 text-sm">Paid in Commissions</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
