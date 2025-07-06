"use client"

import Link from "next/link"
import { useState } from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, ArrowRight } from "lucide-react"

const blogPosts = [
  {
    title: "Why You Need a VPN in 2024: Complete Privacy Guide",
    excerpt:
      "Learn about the importance of online privacy and how VPNs protect your digital footprint in an increasingly connected world.",
    category: "Privacy",
    author: "Sarah Johnson",
    date: "2024-01-15",
    readTime: "5 min read",
    slug: "why-you-need-vpn-2024",
  },
  {
    title: "How to Choose the Right VPN Server Location",
    excerpt:
      "Discover the factors to consider when selecting a VPN server location for optimal speed, security, and content access.",
    category: "Tutorial",
    author: "Mike Chen",
    date: "2024-01-10",
    readTime: "7 min read",
    slug: "choose-vpn-server-location",
  },
  {
    title: "Understanding VPN Protocols: OpenVPN vs WireGuard",
    excerpt: "A technical comparison of popular VPN protocols and their impact on security, speed, and compatibility.",
    category: "Technical",
    author: "Alex Rodriguez",
    date: "2024-01-05",
    readTime: "8 min read",
    slug: "vpn-protocols-comparison",
  },
  {
    title: "Public Wi-Fi Security: Protecting Yourself on the Go",
    excerpt: "Essential tips for staying secure when using public Wi-Fi networks in cafes, airports, and hotels.",
    category: "Security",
    author: "Emma Davis",
    date: "2023-12-28",
    readTime: "6 min read",
    slug: "public-wifi-security",
  },
  {
    title: "The Future of Internet Privacy: Trends to Watch",
    excerpt: "Explore emerging trends in digital privacy and what they mean for internet users worldwide.",
    category: "Industry",
    author: "David Kim",
    date: "2023-12-20",
    readTime: "9 min read",
    slug: "future-internet-privacy",
  },
  {
    title: "VPN Myths Debunked: Separating Fact from Fiction",
    excerpt: "Common misconceptions about VPNs and the truth behind these widely believed myths.",
    category: "Education",
    author: "Lisa Thompson",
    date: "2023-12-15",
    readTime: "4 min read",
    slug: "vpn-myths-debunked",
  },
]

const categories = ["All", "Privacy", "Tutorial", "Technical", "Security", "Industry", "Education"]

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  // Фильтрация постов по категории
  const filteredPosts =
    selectedCategory === "All" ? blogPosts : blogPosts.filter((post) => post.category === selectedCategory)

  return (
    <main className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Fortune VPN Blog</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay informed about online privacy, VPN technology, and digital security with our latest articles and
            guides.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Badge
              key={category}
              variant={category === selectedCategory ? "default" : "outline"}
              className={`cursor-pointer transition-colors ${
                category === selectedCategory
                  ? "bg-purple-600 text-white hover:bg-purple-700"
                  : "hover:bg-purple-100 hover:text-purple-700"
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Badge>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="secondary">{post.category}</Badge>
                  <span className="text-sm text-gray-500">{post.readTime}</span>
                </div>
                <h2 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">{post.title}</h2>
                <p className="text-gray-600 line-clamp-3">{post.excerpt}</p>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                </div>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center text-purple-600 hover:text-purple-800 font-medium"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No articles found in this category.</p>
          </div>
        )}

        <div className="mt-16 bg-blue-50 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Stay Updated</h2>
          <p className="text-gray-600 mb-6">
            Subscribe to our newsletter to get the latest articles about online privacy and VPN technology.
          </p>
          <div className="max-w-md mx-auto flex space-x-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-purple-500"
            />
            <button className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}
