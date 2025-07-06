"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  Plus,
  Trash2,
  Copy,
  Eye,
  EyeOff,
  Users,
  Download,
  CheckCircle,
  XCircle,
  RefreshCw,
  Settings,
  Upload,
} from "lucide-react"

interface PartnerCode {
  id: string
  code: string
  description: string
  createdAt: string
  usageCount: number
  isActive: boolean
  expiresAt?: string
}

export default function AdminPage() {
  const [codes, setCodes] = useState<PartnerCode[]>([])
  const [newCodeDescription, setNewCodeDescription] = useState("")
  const [showCodes, setShowCodes] = useState(false)
  const [adminPassword, setAdminPassword] = useState("")
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [partnerDownloadUrl, setPartnerDownloadUrl] = useState("")
  const [regularDownloadUrl, setRegularDownloadUrl] = useState("")
  const [showSettings, setShowSettings] = useState(false)

  // Загрузка кодов и настроек из localStorage
  useEffect(() => {
    const savedCodes = localStorage.getItem("partnerCodes")
    const savedPartnerUrl = localStorage.getItem("partnerDownloadUrl")
    const savedRegularUrl = localStorage.getItem("regularDownloadUrl")

    if (savedCodes) {
      setCodes(JSON.parse(savedCodes))
    } else {
      // Инициализация с базовыми кодами
      const initialCodes: PartnerCode[] = [
        {
          id: "1",
          code: "PARTNER2024",
          description: "Default partner code for 2024",
          createdAt: new Date().toISOString(),
          usageCount: 0,
          isActive: true,
        },
        {
          id: "2",
          code: "ELITE-VPN-001",
          description: "Elite partner access code",
          createdAt: new Date().toISOString(),
          usageCount: 0,
          isActive: true,
        },
      ]
      setCodes(initialCodes)
      localStorage.setItem("partnerCodes", JSON.stringify(initialCodes))
    }

    if (savedPartnerUrl) {
      setPartnerDownloadUrl(savedPartnerUrl)
    } else {
      const defaultPartnerUrl = "/downloads/FortuneVPN-Partner-Edition.exe"
      setPartnerDownloadUrl(defaultPartnerUrl)
      localStorage.setItem("partnerDownloadUrl", defaultPartnerUrl)
    }

    if (savedRegularUrl) {
      setRegularDownloadUrl(savedRegularUrl)
    } else {
      const defaultRegularUrl = "/downloads/FortuneVPN-Free.exe"
      setRegularDownloadUrl(defaultRegularUrl)
      localStorage.setItem("regularDownloadUrl", defaultRegularUrl)
    }
  }, [])

  // Сохранение кодов в localStorage
  const saveCodes = (newCodes: PartnerCode[]) => {
    setCodes(newCodes)
    localStorage.setItem("partnerCodes", JSON.stringify(newCodes))
    // Также обновляем список валидных кодов для страницы партнеров
    const activeCodes = newCodes.filter((code) => code.isActive).map((code) => code.code)
    localStorage.setItem("validPartnerCodes", JSON.stringify(activeCodes))
  }

  // Сохранение URL загрузки
  const saveDownloadUrls = () => {
    localStorage.setItem("partnerDownloadUrl", partnerDownloadUrl)
    localStorage.setItem("regularDownloadUrl", regularDownloadUrl)
    alert("Download URLs updated successfully!")
  }

  // Аутентификация админа
  const handleAdminLogin = () => {
    if (adminPassword === "zxcdead12AS!") {
      setIsAuthenticated(true)
    } else {
      alert("Incorrect password!")
    }
  }

  // Генерация случайного кода
  const generateRandomCode = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
    const segments = []
    for (let i = 0; i < 3; i++) {
      let segment = ""
      for (let j = 0; j < 4; j++) {
        segment += chars.charAt(Math.floor(Math.random() * chars.length))
      }
      segments.push(segment)
    }
    return segments.join("-")
  }

  // Добавление нового кода
  const addNewCode = () => {
    if (!newCodeDescription.trim()) {
      alert("Please enter a description for the code")
      return
    }

    const newCode: PartnerCode = {
      id: Date.now().toString(),
      code: generateRandomCode(),
      description: newCodeDescription,
      createdAt: new Date().toISOString(),
      usageCount: 0,
      isActive: true,
    }

    const updatedCodes = [...codes, newCode]
    saveCodes(updatedCodes)
    setNewCodeDescription("")
  }

  // Удаление кода
  const deleteCode = (id: string) => {
    if (confirm("Are you sure you want to delete this code?")) {
      const updatedCodes = codes.filter((code) => code.id !== id)
      saveCodes(updatedCodes)
    }
  }

  // Переключение активности кода
  const toggleCodeStatus = (id: string) => {
    const updatedCodes = codes.map((code) => (code.id === id ? { ...code, isActive: !code.isActive } : code))
    saveCodes(updatedCodes)
  }

  // Копирование кода в буфер обмена
  const copyToClipboard = (code: string) => {
    navigator.clipboard.writeText(code)
    alert(`Code "${code}" copied to clipboard!`)
  }

  // Экспорт кодов
  const exportCodes = () => {
    const dataStr = JSON.stringify(codes, null, 2)
    const dataBlob = new Blob([dataStr], { type: "application/json" })
    const url = URL.createObjectURL(dataBlob)
    const link = document.createElement("a")
    link.href = url
    link.download = `partner-codes-${new Date().toISOString().split("T")[0]}.json`
    link.click()
    URL.revokeObjectURL(url)
  }

  if (!isAuthenticated) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gray-50">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Admin Access</CardTitle>
            <p className="text-gray-600">Enter admin password to manage partner codes</p>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input
              type="password"
              placeholder="Admin password"
              value={adminPassword}
              onChange={(e) => setAdminPassword(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleAdminLogin()}
            />
            <Button onClick={handleAdminLogin} className="w-full">
              Login
            </Button>
          </CardContent>
        </Card>
      </main>
    )
  }

  return (
    <main className="py-20 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Partner Code Management</h1>
            <p className="text-gray-600">Generate and manage partner access codes for Fortune VPN</p>
          </div>
          <Button variant="outline" onClick={() => setShowSettings(!showSettings)}>
            <Settings className="w-4 h-4 mr-2" />
            Settings
          </Button>
        </div>

        {/* Settings Panel */}
        {showSettings && (
          <Card className="mb-8 border-2 border-blue-200">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Upload className="w-5 h-5" />
                <span>Download Settings</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Partner VPN Download URL</label>
                <Input
                  placeholder="/downloads/FortuneVPN-Partner-Edition.exe"
                  value={partnerDownloadUrl}
                  onChange={(e) => setPartnerDownloadUrl(e.target.value)}
                  className="mb-2"
                />
                <p className="text-xs text-gray-500">URL for Partner Edition VPN installer</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Regular VPN Download URL</label>
                <Input
                  placeholder="/downloads/FortuneVPN-Free.exe"
                  value={regularDownloadUrl}
                  onChange={(e) => setRegularDownloadUrl(e.target.value)}
                  className="mb-2"
                />
                <p className="text-xs text-gray-500">URL for regular free VPN installer</p>
              </div>

              <Button onClick={saveDownloadUrls} className="bg-blue-600 hover:bg-blue-700">
                Save URLs
              </Button>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-medium text-blue-900 mb-2">File Upload Instructions:</h4>
                <div className="text-sm text-blue-800 space-y-1">
                  <p>
                    • <strong>Partner Edition:</strong> FortuneVPN-Partner-Edition.exe (Premium features)
                  </p>
                  <p>
                    • <strong>Free Edition:</strong> FortuneVPN-Free.exe (Standard VPN)
                  </p>
                  <p>
                    • <strong>Upload Location:</strong> /public/downloads/ or your server
                  </p>
                  <p>
                    • <strong>Test File:</strong> vpnxd.mp4 (currently used for testing)
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6 text-center">
              <Users className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">{codes.length}</div>
              <div className="text-sm text-gray-600">Total Codes</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">{codes.filter((c) => c.isActive).length}</div>
              <div className="text-sm text-gray-600">Active Codes</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <Download className="w-8 h-8 text-purple-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">{codes.reduce((sum, c) => sum + c.usageCount, 0)}</div>
              <div className="text-sm text-gray-600">Total Downloads</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <XCircle className="w-8 h-8 text-red-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">{codes.filter((c) => !c.isActive).length}</div>
              <div className="text-sm text-gray-600">Disabled Codes</div>
            </CardContent>
          </Card>
        </div>

        {/* Add New Code */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Plus className="w-5 h-5" />
              <span>Generate New Partner Code</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex space-x-4">
              <Input
                placeholder="Enter description for the new code (e.g., 'Q1 2024 Partners')"
                value={newCodeDescription}
                onChange={(e) => setNewCodeDescription(e.target.value)}
                className="flex-1"
              />
              <Button onClick={addNewCode} className="bg-purple-600 hover:bg-purple-700">
                <Plus className="w-4 h-4 mr-2" />
                Generate Code
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Code Management */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center space-x-2">
                <RefreshCw className="w-5 h-5" />
                <span>Partner Codes</span>
              </CardTitle>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm" onClick={() => setShowCodes(!showCodes)}>
                  {showCodes ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  {showCodes ? "Hide" : "Show"} Codes
                </Button>
                <Button variant="outline" size="sm" onClick={exportCodes}>
                  <Download className="w-4 h-4 mr-2" />
                  Export
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {codes.map((code) => (
                <div key={code.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <code className="bg-gray-100 px-3 py-1 rounded font-mono text-sm">
                        {showCodes ? code.code : "••••-••••-••••"}
                      </code>
                      <Badge variant={code.isActive ? "default" : "secondary"}>
                        {code.isActive ? "Active" : "Disabled"}
                      </Badge>
                      <Badge variant="outline">{code.usageCount} downloads</Badge>
                    </div>
                    <p className="text-sm text-gray-600">{code.description}</p>
                    <p className="text-xs text-gray-500">Created: {new Date(code.createdAt).toLocaleDateString()}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button variant="outline" size="sm" onClick={() => copyToClipboard(code.code)}>
                      <Copy className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => toggleCodeStatus(code.id)}
                      className={code.isActive ? "text-red-600" : "text-green-600"}
                    >
                      {code.isActive ? <XCircle className="w-4 h-4" /> : <CheckCircle className="w-4 h-4" />}
                    </Button>
                    <Button variant="outline" size="sm" onClick={() => deleteCode(code.id)} className="text-red-600">
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))}
              {codes.length === 0 && (
                <div className="text-center py-8 text-gray-500">
                  <Users className="w-12 h-12 mx-auto mb-4 opacity-50" />
                  <p>No partner codes generated yet</p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Instructions */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>File Upload Instructions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-gray-600">
            <p>
              • <strong>Upload your VPN file</strong> to your server or cloud storage
            </p>
            <p>
              • <strong>Update the download URL</strong> in settings to point to your file
            </p>
            <p>
              • <strong>Test the download</strong> by using a partner code
            </p>
            <p>
              • <strong>Monitor downloads</strong> through the admin panel statistics
            </p>
            <p>
              • <strong>Update the file</strong> anytime by replacing it at the same URL
            </p>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
