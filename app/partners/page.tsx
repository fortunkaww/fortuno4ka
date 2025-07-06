import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Shield, Globe, Users, Star, CheckCircle } from "lucide-react"
import Image from "next/image"

const partners = [
  {
    name: "SecureNet Solutions",
    logo: "/placeholder.svg?height=80&width=200",
    description: "Leading cybersecurity company providing enterprise-grade protection solutions.",
    category: "Security",
    website: "https://securenet.example.com",
    benefits: ["Advanced threat detection", "24/7 monitoring", "Compliance solutions"],
    featured: true,
  },
  {
    name: "CloudTech Infrastructure",
    logo: "/placeholder.svg?height=80&width=200",
    description: "Global cloud infrastructure provider with data centers worldwide.",
    category: "Infrastructure",
    website: "https://cloudtech.example.com",
    benefits: ["Global server network", "99.9% uptime", "Scalable solutions"],
    featured: true,
  },
  {
    name: "PrivacyFirst Analytics",
    logo: "/placeholder.svg?height=80&width=200",
    description: "Privacy-focused analytics platform that respects user data.",
    category: "Analytics",
    website: "https://privacyfirst.example.com",
    benefits: ["Anonymous tracking", "GDPR compliant", "Real-time insights"],
    featured: false,
  },
  {
    name: "TechGuard Consulting",
    logo: "/placeholder.svg?height=80&width=200",
    description: "IT consulting firm specializing in privacy and security implementations.",
    category: "Consulting",
    website: "https://techguard.example.com",
    benefits: ["Expert consultation", "Custom solutions", "Training programs"],
    featured: false,
  },
  {
    name: "DataSafe Storage",
    logo: "/placeholder.svg?height=80&width=200",
    description: "Secure cloud storage provider with end-to-end encryption.",
    category: "Storage",
    website: "https://datasafe.example.com",
    benefits: ["End-to-end encryption", "Zero-knowledge architecture", "Unlimited storage"],
    featured: false,
  },
  {
    name: "NetworkShield Pro",
    logo: "/placeholder.svg?height=80&width=200",
    description: "Network security solutions for businesses of all sizes.",
    category: "Security",
    website: "https://networkshield.example.com",
    benefits: ["Firewall protection", "DDoS mitigation", "Network monitoring"],
    featured: false,
  },
]

const partnershipBenefits = [
  {
    icon: Shield,
    title: "Enhanced Security",
    description: "Our partners help us provide the highest level of security and privacy protection.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Partnership network enables us to offer services worldwide with local expertise.",
  },
  {
    icon: Users,
    title: "Better Support",
    description: "Combined expertise allows us to provide superior customer support and solutions.",
  },
  {
    icon: Star,
    title: "Innovation",
    description: "Collaborative partnerships drive innovation and continuous improvement of our services.",
  },
]

export default function PartnersPage() {
  const featuredPartners = partners.filter((partner) => partner.featured)
  const regularPartners = partners.filter((partner) => !partner.featured)

  return (
    <main className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Our Partners</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We collaborate with industry-leading companies to provide you with the best VPN experience, enhanced
            security, and global coverage.
          </p>
        </div>

        {/* Partnership Benefits */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {partnershipBenefits.map((benefit, index) => (
            <Card key={index} className="text-center p-6 border-2 hover:border-purple-200 transition-colors">
              <CardContent className="p-0">
                <benefit.icon className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Featured Partners */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Partners</h2>
            <p className="text-lg text-gray-600">Our strategic partners who help make Fortune VPN possible</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {featuredPartners.map((partner, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-lg transition-shadow border-2 border-purple-100"
              >
                <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50">
                  <div className="flex items-center justify-between mb-4">
                    <Image
                      src={partner.logo || "/placeholder.svg"}
                      alt={`${partner.name} logo`}
                      width={200}
                      height={80}
                      className="h-12 w-auto"
                    />
                    <Badge variant="default" className="bg-purple-600">
                      <Star className="w-3 h-3 mr-1" />
                      Featured
                    </Badge>
                  </div>
                  <CardTitle className="text-xl">{partner.name}</CardTitle>
                  <Badge variant="outline">{partner.category}</Badge>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="text-gray-600 mb-4">{partner.description}</p>
                  <div className="space-y-2 mb-6">
                    {partner.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full bg-transparent" asChild>
                    <a href={partner.website} target="_blank" rel="noopener noreferrer">
                      Visit Website
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* All Partners */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">All Partners</h2>
            <p className="text-lg text-gray-600">Complete list of our trusted partner network</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularPartners.map((partner, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-3">
                    <Image
                      src={partner.logo || "/placeholder.svg"}
                      alt={`${partner.name} logo`}
                      width={150}
                      height={60}
                      className="h-8 w-auto"
                    />
                    <Badge variant="secondary">{partner.category}</Badge>
                  </div>
                  <CardTitle className="text-lg">{partner.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm mb-4">{partner.description}</p>
                  <div className="space-y-1 mb-4">
                    {partner.benefits.slice(0, 2).map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-3 h-3 text-green-500" />
                        <span className="text-xs text-gray-600">{benefit}</span>
                      </div>
                    ))}
                  </div>
                  <Button variant="outline" size="sm" className="w-full bg-transparent" asChild>
                    <a href={partner.website} target="_blank" rel="noopener noreferrer">
                      Learn More
                      <ExternalLink className="w-3 h-3 ml-2" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Partnership CTA */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Become Our Partner</h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Join our partner network and help us provide better privacy and security solutions to users worldwide.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-semibold mb-2">Technology Partners</h3>
              <p className="text-purple-100 text-sm">Integrate your solutions with our platform</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Reseller Partners</h3>
              <p className="text-purple-100 text-sm">Offer Fortune VPN to your customers</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Strategic Partners</h3>
              <p className="text-purple-100 text-sm">Long-term collaboration opportunities</p>
            </div>
          </div>
          <Button size="lg" variant="secondary" className="bg-white text-purple-600 hover:bg-gray-100">
            Contact Partnership Team
          </Button>
        </div>
      </div>
    </main>
  )
}
