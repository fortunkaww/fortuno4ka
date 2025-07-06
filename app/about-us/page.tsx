import { Card, CardContent } from "@/components/ui/card"
import { Shield, Users, Globe, Heart } from "lucide-react"

export default function AboutUsPage() {
  return (
    <main className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">About Fortune VPN</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We believe that online privacy should be simple, accessible, and free for everyone. That's why we created
            Fortune VPN.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-lg text-gray-700 mb-6">
              In an era where digital privacy is constantly under threat, we're committed to providing a simple,
              effective Windows VPN solution that anyone can use. Our mission is to democratize online privacy by making
              VPN technology accessible to everyone, regardless of technical expertise or financial means.
            </p>
            <p className="text-lg text-gray-700">
              We believe that privacy is a fundamental right, not a luxury. That's why Fortune VPN is completely free
              and works with just one click on your Windows PC.
            </p>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">5M+</div>
                <div className="text-gray-600">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">10+</div>
                <div className="text-gray-600">Countries</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">99.9%</div>
                <div className="text-gray-600">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
                <div className="text-gray-600">Protection</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <Card className="text-center p-6">
            <CardContent className="p-0">
              <Shield className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Privacy First</h3>
              <p className="text-gray-600">
                We don't log, track, or store any of your browsing data. Your privacy is our top priority.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-6">
            <CardContent className="p-0">
              <Users className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">User-Centric</h3>
              <p className="text-gray-600">
                Every feature we build is designed with our users in mind, prioritizing simplicity and effectiveness.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-6">
            <CardContent className="p-0">
              <Globe className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Global Access</h3>
              <p className="text-gray-600">
                We believe in an open internet where everyone can access information freely and securely.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-6">
            <CardContent className="p-0">
              <Heart className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Community Driven</h3>
              <p className="text-gray-600">
                Our community of users helps us improve and guides our development decisions.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-gray-900 text-white rounded-2xl p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Commitment</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We're committed to keeping Fortune VPN free, simple, and secure for everyone.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-3">Always Free</h3>
              <p className="text-gray-300">
                Core VPN functionality will always remain free with no hidden costs or premium tiers.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-3">No Registration</h3>
              <p className="text-gray-300">
                We'll never require you to create an account or provide personal information to use our service.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-3">Transparent</h3>
              <p className="text-gray-300">
                We're open about our practices and committed to maintaining user trust through transparency.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
