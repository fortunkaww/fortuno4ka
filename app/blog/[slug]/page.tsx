import { notFound } from "next/navigation"
import { Calendar, User, Clock, ArrowLeft, Download } from "lucide-react"
import Link from "next/link"

// This would typically come from a CMS or database
const blogPost = {
  title: "Why You Need a VPN in 2024: Complete Privacy Guide",
  content: `
    <p>In today's digital landscape, online privacy has become more important than ever. With increasing surveillance, data breaches, and cyber threats, protecting your digital footprint is no longer optional—it's essential.</p>
    
    <h2>The Current State of Online Privacy</h2>
    <p>Every day, millions of people browse the internet without realizing how much of their personal information is being collected, tracked, and potentially misused. From your browsing habits to your location data, companies and malicious actors are constantly gathering intelligence about your online activities.</p>
    
    <h2>How VPNs Protect Your Privacy</h2>
    <p>A Virtual Private Network (VPN) creates a secure, encrypted tunnel between your device and the internet. This means that all your online traffic is protected from prying eyes, including:</p>
    <ul>
      <li>Internet Service Providers (ISPs)</li>
      <li>Government surveillance</li>
      <li>Hackers on public Wi-Fi</li>
      <li>Websites tracking your location</li>
    </ul>
    
    <h2>Why Choose Fortune VPN?</h2>
    <p>Unlike many VPN services that require complex setup and monthly fees, Fortune VPN offers:</p>
    <ul>
      <li>Instant setup with no registration required</li>
      <li>Completely free service with no hidden costs</li>
      <li>One-click connection for maximum convenience</li>
      <li>Strong encryption to protect your data</li>
    </ul>
    
    <h2>Getting Started</h2>
    <p>Protecting your privacy with Fortune VPN is incredibly simple. Just download our Windows application, click the connect button, and you're instantly protected. No accounts to create, no personal information to provide, and no monthly fees to worry about.</p>
  `,
  author: "Sarah Johnson",
  date: "2024-01-15",
  readTime: "5 min read",
  category: "Privacy",
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  // In a real app, you'd fetch the blog post based on the slug
  if (!blogPost) {
    notFound()
  }

  return (
    <main className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/blog" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Blog
        </Link>

        <article>
          <header className="mb-12">
            <div className="flex items-center space-x-4 mb-4">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                {blogPost.category}
              </span>
              <span className="text-gray-500 text-sm">{blogPost.readTime}</span>
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">{blogPost.title}</h1>

            <div className="flex items-center space-x-6 text-gray-600">
              <div className="flex items-center space-x-2">
                <User className="w-5 h-5" />
                <span>{blogPost.author}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-5 h-5" />
                <span>{new Date(blogPost.date).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5" />
                <span>{blogPost.readTime}</span>
              </div>
            </div>
          </header>

          <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: blogPost.content }} />
        </article>

        <div className="mt-16 bg-blue-50 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Protect Your Privacy?</h2>
          <p className="text-gray-600 mb-6">
            Start using Fortune VPN today and browse the internet with complete privacy and security.
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
